

'use client';

import { LayoutIntroHeaderDescription } from "./LayoutIntroHeaderDescription"
import { motion } from "framer-motion"
import {
  PageHeader,
} from "@/components/showcase/page-nav"

import { Separator } from "@/components/ui/separator"
import { ExamplesNav } from "@/components/showcase/example-nav"
import UiLinks from "./ui-links"
import MsgBar from "@c/showcase/MsgBar"

interface UiShowcaseLayoutProps {
  children: React.ReactNode
}

export default function UiShowcaseLayout({ children }: UiShowcaseLayoutProps) {
  return (
    <>
      <div className="container claer-header relative flex flex-col">
        <PageHeader>
          <MsgBar />
          <LayoutIntroHeaderDescription />
          <UiLinks />
        </PageHeader>
        <section>
          <motion.div className="min-h-[70vh] space-y-6 border p-10 pb-16 shadow"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}

          >
            <ExamplesNav />
            {children}
          </motion.div>
        </section >
      </div >
    </>
  )
}
