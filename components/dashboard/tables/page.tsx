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
    amount: number;
  }

  type PaymentData = PaymentIncome | PaymentExpense;

  const [data, setData] = useState<PaymentData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const payments = await getData();
      const paymentData: PaymentData[] = payments.map((payment) => {
        if ('incomeAmount' in payment) {
          return {
            ...payment,
            amount: payment.incomeAmount,
          } as PaymentIncome;
        } else {
          return {
            ...payment,
            amount: payment.expenseAmount,
          } as PaymentExpense;
        }
      });
      setData(paymentData);
    };
    fetchData();
  }, []);

  return (
    <DataTable columns={IncomeColumns} data={data} />
  );
}