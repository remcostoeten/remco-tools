import { Metadata } from "next"
import { DataTable } from "@/components/data-tables/data-table"
import { UserNav } from "@/components/data-tables/user-nav"
import { displayInspiration } from "@/components/core/tools/playground/inspiration/DisplayInspiration"


export const metadata: Metadata = {
  title: "Tasks",
  description: "A task and issue tracker build using Tanstack Table.",
}

export default async function TaskPage() {
  return (
    <>
            <div className="h-full flex-1 flex-col space-y-8 p-8 flex  w-screen md:w-[80vw]">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Design inspirations🔥</h2>
            <p className="text-muted-foreground">
              Some random examples of UI's I came accross and want to use as inspiration.🚀
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <UserNav />
          </div>
        </div>
        <DataTable data={undefined} columns={displayInspiration} />
      </div>
    </>
  )
}
