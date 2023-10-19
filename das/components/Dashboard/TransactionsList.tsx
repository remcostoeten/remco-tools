import { db } from "@/lib/firebase";
import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";
import { getDocs, collection } from "firebase/firestore";
import { useState, useEffect } from "react";

interface Expense {
  name: string;
  userId: string;
  expenseAmount: number;
  category: string;
  type: string;
}

export  default function TransactionsList() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const TABLE_HEAD = ["Transaction", "Amount", "Date", "Status", "Account", ""];

  useEffect(() => {
    const fetchExpenses = async () => {
      const querySnapshot = await getDocs(collection(db, "expenses"));
      const expenses = querySnapshot.docs.map((doc: any) => ({
        ...doc.data(),
        type: 'expense'
      }));
      setExpenses(expenses);
    };

    fetchExpenses();
  }, []);

  return (
    <Card>
      <CardHeader>
        <Typography variant="h6" color="blue-gray" className="font-bold">
          Expenses
        </Typography>
      </CardHeader>
      <CardBody className="overflow-scroll px-0">
        <table className="w-full border-leftmin-w-max table-auto text-left bg-transparent">
          <thead className="bg-transparent">
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-[#1c1c1c]  p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {expenses.map(
              ({ name, expenseAmount }, index) => {
                const isLast = index === expenses.length - 1;
                const classes = isLast ? "p-4" : "p-4 border-b border-[#1c1c1c]";
                return (
                  <tr key={name}>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-bold"
                      >
                        {name}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        €{expenseAmount}
                      </Typography>
                    </td>
                    {/* Continue with other columns here */}
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
}