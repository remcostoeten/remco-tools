'use client';
import { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { toast } from '../ui/use-toast';
import { auth, db } from '@/utils/firebase';
import { Expense, Income } from '@/utils/types';
import { addDoc, collection, deleteDoc, getDocs, QueryDocumentSnapshot } from 'firebase/firestore';
import SectionSpacer from '@/components/ui/SectionSpacer';

type Category = 'Food' | 'Transport' | 'Utilities';

export default function Totals() {
    const [expenseAmount, setExpenseAmount] = useState<number>(0);
    const [incomeAmount, setIncomeAmount] = useState<number>(0);
    const [expenseName, setExpenseName] = useState<string>('');
    const [savingsName, setSavingsName] = useState<string>('');
    const [savingsAmount, setSavingsAmount] = useState<number>(0);
    const [incomeName, setIncomeName] = useState<string>('');
    const [totalIncome, setTotalIncome] = useState<number>(0);
    const [totalExpense, setTotalExpense] = useState<number>(0);
    const [netWorth, setNetWorth] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const user = auth?.currentUser;

    const [expenses, setExpenses] = useState<Expense[]>([]);
    const [incomes, setIncomes] = useState<Income[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<Category>('Food');

    useEffect(() => {
        const fetchData = async () => {
            const expenseQuerySnapshot = await getDocs(collection(db, 'expenses'));
            const fetchedExpenses = expenseQuerySnapshot.docs.map((doc) => ({
                id: doc.id,
                name: doc.data().name,
                expenseAmount: doc.data().expenseAmount,
            }));
            setExpenses(fetchedExpenses);

            const incomeQuerySnapshot = await getDocs(collection(db, 'incomes'));
            const fetchedIncomes = incomeQuerySnapshot.docs.map((doc) => ({
                id: doc.id,
                name: doc.data().name,
                incomeAmount: doc.data().incomeAmount,
            }));
            setIncomes(fetchedIncomes);

            await calculateTotalIncome();
            await calculateTotalExpense();

            setIsLoading(false);
        };

        fetchData();
    }, []);

    const handleAddIncome = async () => {
        try {
            const docRef = await addDoc(collection(db, 'incomes'), {
                incomeAmount,
                name: incomeName,
            });
            console.log('Income added with ID:', docRef.id);
            setIncomeAmount(0);
            setIncomeName('');
            await calculateTotalIncome();
            toast({
                title: `${incomeAmount} for ${incomeName} added!`,
            });
            await fetchData();
        } catch (error) {
            console.error('Error adding income:', error);
        }
    };

    const handleAddExpense = async () => {
        try {
            const docRef = await addDoc(collection(db, 'expenses'), {
                expenseAmount,
                name: expenseName,
                category: selectedCategory,
                userId: user ? user.uid : null,
            });
            console.log('Expense added with ID:', docRef.id);
            setExpenseAmount(0);
            setExpenseName('');
            setSelectedCategory('Food');
            await calculateTotalExpense();
            toast({
                title: `${expenseAmount} for ${expenseName} added!`,
            });
            await fetchData();
        } catch (error) {
            console.error('Error adding expense:', error);
        }
    };

    const handleAddSavings = async () => {
        try {
            const docRef = await addDoc(collection(db, 'savings'), {
                savingsAmount,
                name: savingsName,
            });
            console.log('Savings added with ID:', docRef.id);
            setSavingsAmount(0);
            setSavingsName('');
            toast({
                title: `${savingsAmount} saving added!`,
            });
            await fetchData();
        } catch (error) {
            console.error('Error adding Savings:', error);
        }
    };

    const handleClearAll = async () => {
        try {
            const incomeQuerySnapshot = await getDocs(collection(db, 'incomes'));
            incomeQuerySnapshot.forEach(async (doc) => {
                await deleteDoc(doc.ref);
            });

            const expenseQuerySnapshot = await getDocs(collection(db, 'expenses'));
            expenseQuerySnapshot.forEach(async (doc) => {
                await deleteDoc(doc.ref);
            });

            const savingsQuerySnapshot = await getDocs(collection(db, 'savings'));
            savingsQuerySnapshot.forEach(async (doc) => {
                await deleteDoc(doc.ref);
            });

            setSavingsAmount(0);
            setIncomeAmount(0);
            setExpenseAmount(0);
            setIncomeName('');
            setExpenseName('');
            setTotalIncome(0);
            setTotalExpense(0);
            setNetWorth(0);
        } catch (error) {
            console.error('Error clearing all data:', error);
        }
    };

    const calculateTotalIncome = async () => {
        try {
            const incomeQuerySnapshot = await getDocs(collection(db, 'incomes'));
            const total = incomeQuerySnapshot.docs.reduce((acc, doc) => acc + doc.data().incomeAmount, 0);
            setTotalIncome(total);
            calculateNetWorth();
        } catch (error) {
            console.error('Error calculating total income:', error);
        }
    };

    const calculateTotalExpense = async () => {
        try {
            const userExpenses = (await getDocs(collection(db, 'expenses'))).docs.filter((doc) => doc.data().userId === (user ? user.uid : null));

            const total = userExpenses.reduce((acc: number, doc: QueryDocumentSnapshot) => acc + doc.data().expenseAmount, 0);

            setTotalExpense(total);
        } catch (error) {
            console.error('Error calculating total expense:', error);
        }
    };

    const calculateNetWorth = () => {
        const netWorth = totalIncome - totalExpense;
        setNetWorth(netWorth);
    };

    const fetchData = async () => {
        const expenseQuerySnapshot = await getDocs(collection(db, 'expenses'));
        const fetchedExpenses = expenseQuerySnapshot.docs.map((doc) => ({
            id: doc.id,
            name: doc.data().name,
            expenseAmount: doc.data().expenseAmount,
        }));
        setExpenses(fetchedExpenses);

        const incomeQuerySnapshot = await getDocs(collection(db, 'incomes'));
        const fetchedIncomes = incomeQuerySnapshot.docs.map((doc) => ({
            id: doc.id,
            name: doc.data().name,
            incomeAmount: doc.data().incomeAmount,
        }));
        setIncomes(fetchedIncomes);

        await calculateTotalIncome();
        await calculateTotalExpense();

        setIsLoading(false);
    };

    return (
        <>
          <SectionSpacer variant="small" />
      
          <div className="flex w-full flex-col justify-between gap-4">
            <div>
              {user ? (
                <>
                  <div className="flex w-full justify-between gap-4">
                    <div className="block-container">
                      <div className="block-title">Income</div>
                      <div className="block-content">
                        {incomes.map((income) => (
                          <div key={income.id}>
                            <span>Name: {income.name}</span>
                            <span>Amount: €{income.incomeAmount},-</span>
                          </div>
                        ))}
                      </div>
                    </div>
      
                    <div className="block-container">
                      <div className="block-title">Expense</div>
                      <div className="block-content">
                        {expenses.map((expense) => (
                          <div key={expense.id}>
                            <span>Name: {expense.name}</span>
                            <span>Amount: €{expense.expenseAmount},-</span>
                          </div>
                        ))}
                      </div>
                    </div>
      
                    <div className="block-container">
                      <div className="block-title">Savings</div>
                      <div className="block-content"></div>
                    </div>
                  </div>
                </>
              ) : (
                <h1>test</h1>
              )}
            </div>
          </div>
      
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <div className="card expense p-8">
                  <h2 className="mb-4 text-2xl font-bold">Add Income</h2>
                  <div className="mb-4 flex items-center gap-4">
                    <Input type="number" placeholder="€ ,-" value={incomeAmount} onChange={(e) => setIncomeAmount(Number(e.target.value))} />
                    <Input type="text" value={incomeName} onChange={(e) => setIncomeName(e.target.value)} placeholder="Income Name" />
                  </div>
                  <Button onClick={handleAddIncome}>Add income</Button>
                </div>
                <div className="card expense p-8">
                  <h2 className="mb-4 text-2xl font-bold">Add Expense</h2>
                  <div className="mb-4 flex items-start gap-4">
                    <div className="flex flex-col gap-1">
                      <Input type="number" value={expenseAmount} placeholder="€ ,-" onChange={(e) => setExpenseAmount(Number(e.target.value))} />
                      <Input type="text" value={expenseName} onChange={(e) => setExpenseName(e.target.value)} placeholder="Expense Name" />
                    </div>
                    <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value as Category)}>
                      <option value="Food">Food</option>
                      <option value="Transport">Transport</option>
                      <option value="Utilities">Utilities</option>
                    </select>
                  </div>
                  <Button onClick={handleAddExpense}>Add Expense</Button>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="card expense p-8">
                    <h2 className="mb-4 text-2xl font-bold">Add Savings</h2>
                    <div className="mb-4 flex items-center">
                      <Input
                        type="number"
                        value={savingsAmount}
                        placeholder="€ ,-"
                        onChange={(e) => setSavingsAmount(Number(e.target.value))}
                        className="-300 mr-2 w-1/2 rounded-md border p-2"
                      />
                      <Input type="text" value={savingsName} onChange={(e) => setSavingsName(e.target.value)} placeholder="Savings Name" className="-300 w-1/2 rounded-md border p-2" />
                    </div>
                    <Button onClick={handleAddSavings}>add saving</Button>
                  </div>
                </div>
              </div>
              <div className="flex w-full gap-4">
                <div className="card expense flex flex-1 flex-col p-8">
                  <dl className="mb-4 text-2xl font-bold">Expenses List:</dl>
                  {expenses.map((expense) => (
                    <dl className="flex w-full justify-between" key={expense.id}>
                      <dd>Name: {expense.name}</dd>
                      <dt>Amount: €{expense.expenseAmount},-</dt>
                    </dl>
                  ))}
                </div>
                <div className="card expense flex flex-1 flex-col p-8">
                  <dl className="mb-4 text-2xl font-bold">Income List:</dl>
                  {incomes.map((income) => (
                    <dl className="flex w-full justify-between" key={income.id}>
                      <dd>Name: {income.name}</dd>
                      <dt>Amount: €{income.incomeAmount},-</dt>
                    </dl>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="block-container">
  <div className="block-title">Net Worth</div>
  <div className="block-content">
    <span>Total Income: €{totalIncome},-</span>
    <span>Total Expenses: €{totalExpense},-</span>
    <span>Net Worth: €{netWorth},-</span>
  </div>
</div>

        </>
      );
      
}