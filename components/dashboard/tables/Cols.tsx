"use client"

import { Expense, Income } from "@/utils/types"
import { ColumnDef } from "@tanstack/react-table"

export const IncomeColumns: ColumnDef<Income>[] = [
  {
    accessorKey: "createdAt",
    header: "Date",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "incomeAmount",
    header: "incomeAmount",
  },
]

export const ExpenseColumns: ColumnDef<Expense>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "expenseAmount",
    header: "Expense Amount",
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
];