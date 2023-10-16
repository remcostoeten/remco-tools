

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
import { toast } from 'sonner';
import { FaIcicles } from "react-icons/fa";
import Link from "next/link";
import RemcostoetenLogoIcon from "@/components/core/icons/remcostoeten-logo-icon";

interface UiShowcaseLayoutProps {
    children: React.ReactNode
}

toast('This entire section is broken', {
    className: 'text-3x l',
    description: 'Features from a old codebase which I need to migrate and fix someday!!',
    duration: 10000,
    icon: <FaIcicles />,
});
export default function UiShowcaseLayout({ children }: UiShowcaseLayoutProps) {
    return (
        <>
            <div className="container clear-headers relative gap-8 flex flex-col">
                <Link href="/">
                    <RemcostoetenLogoIcon />
                </Link>
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
