import { Metadata } from "next"

import CustomStatusBadge from "@/components/core/StatusBadge"
import {
  PageHeader
} from "@/components/ui-dashboard/page-nav"

export const metadata: Metadata = {
  title: "Expense Tracker",
  description:
    "Keep track of your expenses and income using this expense tracker app. Add, manage, and analyze your financial transactions. Built with Next.js, Tailwind CSS, and Firebase.",
}

interface UiShowcaseLayoutProps {
  children: any
}

const badges = [
  { title: "Beta", emoji: "rocket" },
  { title: "Bugs", emoji: "fire" },
]

export default function UiShowcaseLayout({ children }: UiShowcaseLayoutProps) {


  return (
    <>
      <div className="container relative flex-1 flex-col space-y-4 p-8 pt-6">
      <div className="flex gap-4">
       {badges.map((badge, index) => (
      <CustomStatusBadge key={index} {...badge} index={index} />
    ))}
    </div>
    <header className="expenses-tracker  relative flex flex-col">
          <PageHeader>
            <h1 className="mb-2 inline-block font-heading text-4xl sm:mb-0 lg:text-5xl">
              Expenses and income tracker
            </h1>
            <p className=" text-lg text-muted-foreground sm:text-xl w-7/12">
              A simple feature to track your income and expenses. Data is stored
              on the server so you can leave and come back later to enter more
              expenses! 💵 💰
            </p>
          </PageHeader>
        </header>
        <>{children}</>
      </div>
    </>
  )
}
