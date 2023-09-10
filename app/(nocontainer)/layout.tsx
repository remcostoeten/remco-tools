import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Remcostoeten feature showcase",
  description: "All kinds of random productivity tools i've built for myself.",
}
interface BasicLayoutProps {
  children: React.ReactNode
}

export default function BasicLayout({ children }: BasicLayoutProps) {
  return (
    <>
      <div className="relative flex flex-col w-7/12">
        <section>{children}</section>
      </div>
    </>
  )
}
