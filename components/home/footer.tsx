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
            className='flex pb-40 flex-col sm:flex-row w-full h-[475px] rounded-[18px] mb-32'
        >
            <div className="col-block w-full sm:w-11/12 padding-block h-96 footer-grid__block l-round border-none">
                <Image className='glow-icon' src="/icon-social.svg" alt="Social media" width={72} height={72} />
                <h3 className='grow text-3xl font-bold'>
                    <span className={rope.className}>
                        Get in contact,
                        <br />
                        through this form
                    </span>
                </h3>
                <Contact />
            </div>

            <div className='w-full r-round sm:w-5/12 justify-between flex flex-col sm:ml-[2rem]'>
                <div className='col-block footer-grid__block mb-[2rem] rounded-[18px] sm:h-full flex flex-col justify-between'>
                    <h3 className='text-3xl grow font-bold'>
                        <span className={rope.className}>
                            Before you go,
                            <br />
                            checkout some links
                        </span>
                    </h3>
                    <ul className='flex flex-col gap-1.5 '>
                        <li className='col-block text-xl list-none'>
                            <Link
                                className='underline'
                                href='https://snippets.remcostoeten.com'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                My snippets/docs
                            </Link>
                        </li>
                        <li className='col-block text-xl list-none'>
                            <Link
                                href='https://kanban.remcostoeten.com'
                                className='underline'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                Kanban board
                            </Link>
                        </li>
                        <li className='text-xl list-none'>
                            <Link
                                className='underline'
                                href='geolocation'
                                rel='noopener noreferrer'
                            >
                                Geolocation app
                            </Link>
                        </li>
                        <li className='text-xl underline list-none'>
                            <Link href='/html-to-jsx'>HTML to JSX</Link>
                        </li>
                    </ul>
                </div>
                <div className='footer mb-20 sm:mb-0 -mr-[1rem] flex h-[40%] justify-between'>
                    <Link href="https://github.com/remcostoeten" target="_blank" className='col-block grid mr-[1rem] w-1/3 h-[100%] place-items-center footer-grid__block rounded-[18px]'>
                        <GithubIcon />
                    </Link>
                    <Link
                        href='https://www.linkedin.com/in/remco-stoeten'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='showAlternativeCursor col-block  grid mr-[1rem] w-1/3 h-[100%] place-items-center footer-grid__block rounded-[18px]'
                    >
                        <Linkedin />
                    </Link>
                    <Link
                        target='_blank'
                        href='https://gitlab.com/remcostoeten'
                        className='showAlternativeCursor col-block grid mr-[1rem] w-1/3 h-[100%] place-items-center footer-grid__block rounded-[18px]'
                    >
                        <GitlabIcon />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}
