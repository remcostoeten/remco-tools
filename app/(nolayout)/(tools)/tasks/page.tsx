import { Metadata } from "next"
import { DataTable } from "@/components/data-tables/data-table"
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
            <h2 className="text-2xl font-bold tracking-tight">Website tasks!</h2>
            <p className="text-muted-foreground">
              Just a list for myself off things I need, or want to implementt, primairly for this site.
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
