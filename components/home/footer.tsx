'use client';
import React from 'react';
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';
import MailIcon from '../core/icons/Mail';
import Contact from './contact';
import { Manrope } from 'next/font/google';
import Linkedin from '../core/icons/Linkedin';
import GithubIcon from '../core/icons/Github';

const rope = Manrope({ subsets: ['latin'] });

export default function Footer() {
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 1,
            }}
            viewport={{
                once: true,
            }}
            className='flex flex-col sm:flex-row w-full h-[475px] rounded-[18px] mb-32'
        >
            <div className='w-full sm:w-7/12 padding-block h-full footer-grid__block l-round'>
                <h3 className='grow text-3xl font-bold'>
                    <span className={rope.className}>
                        Get in contact,
                        <br />
                        through this form
                    </span>
                </h3>
                {/* You should render the Contact component here */}
                <Contact />
            </div>

            <div className='w-full r-round sm:w-5/12 justify-between flex flex-col sm:ml-[2rem]'>
                <div className='footer-grid__block mb-[2rem] rounded-[18px] h-full flex flex-col justify-between'>
                    <h3 className='text-3xl grow font-bold'>
                        <span className={rope.className}>
                            Before you go,
                            <br />
                            checkout some links
                        </span>
                    </h3>
                    <ul className='flex flex-col gap-1.5 '>
                        <li className='text-xl list-none'>
                            <Link
                            className='underline'
                                href='https://snippets.remcostoeten.com'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                My snippets/docs
                            </Link>
                        </li>
                        <li className='text-xl list-none'>
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
                        <li 

                        className='text-xl underline list-none'>
                            <Link href='/html-to-jsx'>HTML to JSX</Link>
                        </li>
                    </ul>
                </div>
                <div className='footer -mr-[1rem] flex h-[40%] justify-between'>
                    <div className='card grid mr-[1rem] w-1/3 h-[100%] place-items-center footer-grid__block rounded-[18px]'>
                        <GithubIcon />
                    </div>
                    <div className='showAlternativeCursor card grid mr-[1rem] w-1/3 h-[100%] place-items-center footer-grid__block rounded-[18px]'>
                        <Link 
                            href='https://www.linkedin.com/in/remco-stoeten'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <Linkedin />
                        </Link>
                    </div>
                    <div className='showAlternativeCursor card grid mr-[1rem] w-1/3 h-[100%] place-items-center footer-grid__block rounded-[18px]'>
                        <a href='mailto:remcostoeten@hotmail.com'>
                            <MailIcon />
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
