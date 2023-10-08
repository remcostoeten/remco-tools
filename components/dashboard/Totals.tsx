'use client';
import { useState, useEffect, ReactNode } from 'react';
import { Button } from '../ui/button';
import { toast } from '../ui/use-toast';
import { auth, db } from '@/utils/firebase';
import { Expense, Income } from '@/utils/types';
import { addDoc, collection, deleteDoc, getDocs, QueryDocumentSnapshot } from 'firebase/firestore';
import InputWithLabel from '../InputWithElement';
import MoneyCardSkeleton from '../core/LoaderBlock';
import MiniSpinner from '../effects/MiniSpinner';
import Block from '../core/ThemeBlock';
import SectionSpacer from '../ui/SectionSpacer';
import FetchIncomes from './FetchIndividualIncome';
import MoneyCard from './MoneyCard';

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

  type MoneyCardProps = {
    items: any;
    title: string;
  };


  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsLoading(true);
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
        createdAt: new Date(),
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
        createdAt: new Date(),
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
      createdAt: new Date(),
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
      const total = incomeQuerySnapshot.docs.reduce((acc, doc) => acc + doc.data().amount, 0);
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
      <div className="flex w-full gap-4">
        {isLoading ? (

          <div className="flex w-full gap-4">
            <Block className='w-5/12' >
              <MiniSpinner /></Block>
            <Block className='w-5/12' >
              <MiniSpinner /></Block>
            <Block className='w-2/12' >
              <MiniSpinner /></Block></div>
        ) : (
          <div className="flex w-full gap-4">
            <MoneyCard items={expenses} title="Expenses" />
            <MoneyCard items={incomes} title="Incomes" />
          </div>
        )}
      </div>
      <SectionSpacer variant='small' />




      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <div className="black-block black-blockt--content p-8">
              <h2 className="mb-4 text-2xl font-bold">Add Income</h2>
              <div className="mb-4 flex flex-col items-center gap-1">
                <InputWithLabel type="number" placeholder="€ ,-" value={incomeAmount} onChange={(e) => setIncomeAmount(Number(e.target.value))} />
                <InputWithLabel type="text" placeholder="Income Name" value={incomeName} onChange={(e) => setIncomeName(e.target.value)} />
              </div>
              <Button onClick={handleAddIncome}>Add income</Button>
            </div>
            <div className="black-block black-blockt--content p-8">
              <h2 className="mb-4 text-2xl font-bold">Add Expense</h2>
              <div className="mb-4 flex items-start gap-4">
                <div className="flex flex-col gap-1">
                  <InputWithLabel type="number" placeholder="€ ,-" value={expenseAmount} onChange={(e) => setExpenseAmount(Number(e.target.value))} />
                  <InputWithLabel type="text" placeholder="Expense Name" value={expenseName} onChange={(e) => setExpenseName(e.target.value)} />
                </div>
                <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value as Category)}>
                  <option value="Food">Food</option>
                  <option value="Transport">Transport</option>
                  <option value="Utilities">Utilities</option>
                </select>
              </div>
              <Button onClick={handleAddExpense}>Add Expense</Button>
            </div>
            <div className="flex gap-1 flex-col">
              <div className="black-block black-blockt--content p-8">
                <h2 className="mb-4 text-2xl font-bold">Add Savings</h2>
                <div className="mb-4 flex-col flex items-center">

                  <InputWithLabel type="number" placeholder="€ ,-" value={savingsAmount} onChange={(e) => setSavingsAmount(Number(e.target.value))} />
                  <InputWithLabel type="text" placeholder="Savings Name" value={savingsName} onChange={(e) => setSavingsName(e.target.value)} />
                </div>
                <Button onClick={handleAddSavings}>add saving</Button>
              </div>
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