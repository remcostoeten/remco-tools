'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import MailIcon from '../core/icons/Mail';
import Contact from './contact';
import { Manrope } from 'next/font/google';
import Linkedin from '../core/icons/Linkedin';
import GithubIcon from '../core/icons/Github';
import GitlabIcon from '../core/icons/Gitlab';
import Image from 'next/image';

const rope = Manrope({ subsets: ['latin'] });

export default function Footer() {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 20, // Optional: You can add a vertical animation.
            }}
            animate={{
                opacity: 1,
                y: 0, // Optional: You can add a vertical animation.
            }}
            transition={{
                duration: 1,
            }}
            className="home-container mb-32 flex h-[475px] w-full flex-col rounded-[18px] pb-40 sm:flex-row"
        >
            <div className="col-block padding-block footer-grid__block l-round h-96 w-full border-none sm:w-11/12">
                <Image className="glow-icon" src="/icon-social.svg" alt="Social media" width={72} height={72} />
                <h3 className="grow text-3xl font-bold">
                    <span className={rope.className}>
                        Get in contact,
                        <br />
                        through this form
                    </span>
                </h3>
                <Contact />
            </div>

            <div className="r-round flex w-full flex-col justify-between sm:ml-[2rem] sm:w-5/12">
                <div className="col-block footer-grid__block mb-[2rem] flex flex-col justify-between rounded-[18px] sm:h-full">
                    <h3 className="grow text-3xl font-bold">
                        <span className={rope.className}>
                            Before you go,
                            <br />
                            checkout some links
                        </span>
                    </h3>
                    <ul className="flex flex-col gap-1.5 ">
                        <li className="col-block list-none text-xl">
                            <Link className="underline" href="https://snippets.remcostoeten.com" target="_blank" rel="noopener noreferrer">
                                My snippets/docs
                            </Link>
                        </li>
                        <li className="col-block list-none text-xl">
                            <Link href="https://kanban.remcostoeten.com" className="underline" target="_blank" rel="noopener noreferrer">
                                Kanban board
                            </Link>
                        </li>
                        <li className="list-none text-xl">
                            <Link className="underline" href="geolocation" rel="noopener noreferrer">
                                Geolocation app
                            </Link>
                        </li>
                        <li className="list-none text-xl underline">
                            <Link href="/html-to-jsx">HTML to JSX</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer -mr-[1rem] mb-20 flex h-[40%] justify-between sm:mb-0">
                    <Link href="https://github.com/remcostoeten" target="_blank" className="col-block footer-grid__block mr-[1rem] grid h-[100%] w-1/3 place-items-center rounded-[18px]">
                        <GithubIcon />
                    </Link>
                    <Link href="https://www.linkedin.com/in/remco-stoeten" target="_blank" rel="noopener noreferrer" className="showAlternativeCursor col-block  footer-grid__block mr-[1rem] grid h-[100%] w-1/3 place-items-center rounded-[18px]">
                        <Linkedin />
                    </Link>
                    <Link href="https://wa.me/31636590707" target="_blank" rel="noopener noreferrer" className="showAlternativeCursor col-block  footer-grid__block mr-[1rem] grid h-[100%] w-1/3 place-items-center rounded-[18px]">
                        <Linkedin />
                    </Link>
                    <Link target="_blank" href="https://gitlab.com/remcostoeten" className="showAlternativeCursor col-block footer-grid__block mr-[1rem] grid h-[100%] w-1/3 place-items-center rounded-[18px]">
                        <GitlabIcon />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}
