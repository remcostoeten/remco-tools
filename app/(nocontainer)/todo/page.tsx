import { Metadata } from "next"
import { DataTable } from "@/components/data-tables/data-table"
import { UserNav } from "@/components/data-tables/user-nav"
import { DisplayTasks } from "@/components/data-tables/DisplayTasks"
import { BsEmojiSunglasses } from "react-icons/bs"


export const metadata: Metadata = {
  title: "Tasks",
  description: "A page with links to inspirational sites UX and design wise. All data is store in a database(Firestore).",
}

export default async function TaskPage() {
  return (
    <>
      <div className="h-full flex-1 flex-col space-y-8 p-8 flex  w-screen md:w-[60vw]">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Stuff to do 💰</h2>
            <p className="text-muted-foreground">
              Just somet tasks or wishes I still have for this site. The endleseless list of things to do. Brain with ideas goes brrrrrrrrrrr 🚀
            </p>
          </div>
          </div>
        <DataTable data={undefined} columns={DisplayTasks} />
      </div>
    </>
  )
}
