"use client";

import React from "react";
import Heading from "@c/section-heading";
import { motion } from "framer-motion";
import Link from 'next/link';
export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <Heading>About me</Heading>
      <p className="mb-3">
        I am Remco Stoeten, 26, from Lemmer, Netherlands. I hold a graphic
        design degree and have over five years of experience in frontend
        development, specifically in custom 🤮Magento 2🤢 webshops.</p><p className="mb-3"> After working at{" "}
        <Link className="underline" href="https://tickles.nl" target="_blank" rel="noopener noreferrer">an agency</Link> and then in-house at a multinational SaaS company, I joined
        {" "} <Link className="underline" href="https://gitlab.com/pleio" target="_blank" rel="noopener noreferrer">Pleio</Link>, which exclusively operates in non-profit, contributed to projects
        like{" "}      </p><p className="mb-3">
        <Link className="underline"
          href="https://gitlab.com/pleio/dossier/"
          target="_blank"
          rel="noopener noreferrer"
        >
          FSV
        </Link>
        . I have a strong passion for complex interfaces and all-round
        programming, always looking to learn new things and improve my skills. Currently focusing on Typescript & co. Also some Python and Lua on the side.
      </p>
    </motion.section>
  );
}
