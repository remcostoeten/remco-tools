import AllThoughts from "./components/AllThoughts"
import { NewThought } from "./components/NewThought"
import { ThoughtProvider } from "./components/ThoughtContext"

const sidebarNavItems = [
  {
    title: "Profile",
    href: "/examples/forms",
  },
  {
    title: "Account",
    href: "/examples/forms/account",
  },
  {
    title: "Appearance",
    href: "/examples/forms/appearance",
  },
  {
    title: "Notifications",
    href: "/examples/forms/notifications",
  },
  {
    title: "Display",
    href: "/examples/forms/display",
  },
]

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({}: RootLayoutProps) {
  return (
    <>
      <ThoughtProvider>
        <div className="flex relative container  flex-col">
          <AllThoughts /> 
          <NewThought/>
        </div>
      </ThoughtProvider>
    </>
  )
}
