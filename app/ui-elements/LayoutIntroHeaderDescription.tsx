"use client"
import {
  PageHeaderDescription
} from "@c/showcase/page-nav"
import { motion } from "framer-motion"
import Link from "next/link"

export const LayoutIntroHeaderDescription = () => (
  <>
    <motion.span
      className="mb-2 inline-block font-heading text-4xl sm:mb-0 lg:text-5xl"
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.65, duration: .5 }}
    >
      Some examples which I have not abbandoned yet.
    </motion.span>
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7, duration: 0.5 }}>
      <PageHeaderDescription>
        Dashboard, e-commerce, blogs, landing pages, parallax scrolls, portfolio
        designs, authentication pages... I've made countless UI's which I all have
        scrapped. Some{" "}
        <Link
          className="default font-normal underline"
          href="https://github.com/remcostoeten/remcostoeten.com"
          target="_blank"
        >
          repos{' '}
        </Link>
        have over 700+ commits before getting sick off it.
      </PageHeaderDescription>
    </motion.div>
  </>
)
