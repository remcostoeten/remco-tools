import { promises as fs } from "fs"
import path from "path"
import { Metadata } from "next"
import Image from "next/image"
import { z } from "zod"
import { columns } from "@/components/data-tables/columns"
import { DataTable } from "@/components/data-tables/data-table"
import { taskSchema } from "@/components/data-tables/data/schema"
import { UserNav } from "@/components/data-tables/user-nav"
import { DisplayTasks } from "@/components/data-tables/DisplayTasks"


export const metadata: Metadata = {
  title: "Tasks",
  description: "A task and issue tracker build using Tanstack Table.",
}

export default async function TaskPage() {
  return (
    <>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of your tasks for this month!
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <UserNav />
          </div>
        </div>
        <DataTable data={undefined} columns={DisplayTasks} />
      </div>
    </>
  )
}
