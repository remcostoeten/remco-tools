import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/utils/firebase';
import { DataTable, IncomeColumns } from '@/components/dashboard/tables/DataTable';
import { Income, Expense } from '@/utils/types';
import { useState, useEffect } from 'react';

async function getData(): Promise<(Income | Expense)[]> {
  const incomeData: Income[] = [];
  const expenseData: Expense[] = [];

  const incomeQuerySnapshot = await getDocs(collection(db, 'incomes'));
  incomeQuerySnapshot.forEach((doc) => {
    const data = doc.data();
    incomeData.push({
      id: doc.id,
      incomeAmount: data.incomeAmount,
      name: data.name,
      createdAt: data.createdAt.toDate(),
    });
  });

  const expenseQuerySnapshot = await getDocs(collection(db, 'expenses'));
  expenseQuerySnapshot.forEach((doc) => {
    const data = doc.data();
    expenseData.push({
      id: doc.id,
      expenseAmount: data.expenseAmount,
      name: data.name,
      createdAt: data.createdAt.toDate(),
    });
  });

  return [...incomeData, ...expenseData];
}

export default function DemoPage() {
  interface Payment {
    name: string;
    amount: number;
  }

  interface PaymentIncome extends Income, Payment {
    createdAt: Date;
  }

  interface PaymentExpense extends Expense, Payment {
    createdAt: Date;
  }

  type PaymentData = PaymentIncome | PaymentExpense;

  const [data, setData] = useState<PaymentData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const payments = await getData();
      setData(payments);
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={IncomeColumns} data={data} />
    </div>
  );
}