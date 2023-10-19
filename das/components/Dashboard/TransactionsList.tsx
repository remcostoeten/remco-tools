import { db } from "@/lib/firebase";
import { Income } from "@/types/transactions";
import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";
import { getDocs, collection, Transaction } from "firebase/firestore";
import { useState, useEffect } from "react";

interface Expense {
  name: string;
  userId: string;
  expenseAmount: number;
  category: string;
  type: string;
}

export default function TransactionsList() {
  const [transactions, setTransactions] = useState<Income[]>([]);
  const TABLE_HEAD = ["Transaction", "Amount", "Date", "Status", "Account", ""];

  useEffect(() => {
    const fetchTransactions = async () => {
      const expensesQuerySnapshot = await getDocs(collection(db, "expenses"));
      const expenses = expensesQuerySnapshot.docs.map((doc: any) => ({
        ...doc.data(),
        type: 'expense'
      }));
      const incomesQuerySnapshot = await getDocs(collection(db, "incomes"));
      const incomes = incomesQuerySnapshot.docs.map((doc: any) => ({
        ...doc.data(),
        type: 'income'
      }));
      const transactions = [...expenses, ...incomes];
      setTransactions(transactions);
    };

    fetchTransactions();
  }, []);

  return (
    <Card>
      <table className="w-full border-leftmin-w-max table-auto text-left text-cream bg-body">
        <thead className="bg-transparent">
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-y border-[#1c1c1c]  p-4"
              >
                <Typography
                  variant="small"
                  color="text-cream"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {transactions.map(
            ({ name, expenseAmount, createdAt, type }, index) => {
              const isLast = index === transactions.length - 1;
              const classes = isLast ? "p-4" : "p-4 border-b border-[#1c1c1c]";
              const amountClass = type === 'expense' ? 'text-red-500' : 'text-green-500';
              return (
                <tr key={name}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="text-cream"
                      className="font-bold"
                    >
                      {name}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="text-cream"
                      className={`font-normal ${amountClass}`}
                    >
                      {type === 'expense' ? '-' : '+'}€{expenseAmount}
                    </Typography>
                  </td>
                  {/* Continue with other columns here */}
                </tr>
              );
            }
          )}
    }
)}

        </tbody>
      </table>
    </Card>
  );
}