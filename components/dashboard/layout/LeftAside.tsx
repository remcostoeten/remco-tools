'use client';
import React from 'react';
import LogoIcon from '../../core/icons/remcostoeten-logo-icon';
import { DashmenuMap, DashmenuMapSub, DashmenuMapSubSub } from '@/config/data';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { auth } from '@/utils/firebase';
import { signOut } from 'firebase/auth';
import MagicStar from '../../effects/MagicStar';
import { Pencil } from 'lucide-react';
import { LuLogOut } from 'react-icons/lu';
import { useActiveSectionContext } from '@/context/active-section-contex';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { UilCreateDashboard } from '@iconscout/react-unicons'
import { LinkProps } from '@/utils/types';


const LeftAsideLink: React.FC<LinkProps> = ({ name, hash }) => {
    const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    return (
        <Link
            className={clsx('flex w-full items-center justify-start pb-[9px] hover:text-gray-200 transition dark:text-white pr-4 h-9', {
                'text-gray-200': activeSection === name,
            })}
            href={hash}
            onClick={() => {
                setActiveSection(name);
                setTimeOfLastClick(Date.now());
            }}
        >
            {name}

            {name === activeSection && (
                <motion.span
                    className="activec"
                    layoutId="activeSection"
                    // style={{
                    //     transform: 'translate(3px, 0px)',
                    //     transformOrigin: '50% 50% 0px',
                    //     height: '50px',
                    // }}
                    transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30,
                    }}
                ></motion.span>
            )}
        </Link>
    );
};

export default function LeftAside() {
    const currentRoute = usePathname().toLowerCase();
    const user = auth?.currentUser;
    const isActiveRoute = (route) => {
        return currentRoute === route.toLowerCase();
    };
    const loginMenuItem = () => {
        return user ? (
            <button className="cta-sprinkle gap-6" onClick={() => signOut(auth)}>
                <MagicStar />
                Logout <LuLogOut style={{ transform: 'translate(20px, 3px)' }} color="#8BB928" />
                <MagicStar />
            </button>
        ) : (
            <Link className="cta-sprinkle text-sm" href="/dashboard/login">
                <MagicStar />
                <Pencil color="#8BB928" />
                Login
                <MagicStar />
            </Link>
        );
    };

    return (
        <div className="flex flex-col justify-between h-screen w-min">
            <div className="text-cream mt-[13px] mb-[40px] flex flex-col">
                <div className="logo-section">
                    <LogoIcon fill="#92C52A" />
                </div>
                <div className="sub">
                    <ul className="space-y-1 sub grandparent">

                        <li className={isActiveRoute('/dashboard') ? 'active flex items- !text-red-400' : 'flex items-center     '}>
                            <span className='text-cream flex items-center justify-center px-3 py-2 text-xs bg-green-alt bg-dash-alt-border rounded-lg w-max border'>
                                <UilCreateDashboard />
                            </span>
                            <Link className={isActiveRoute('/dashboard') ? 'active ' : ' items-center     '} href="/dashboard">Dashboard</Link>
                        </li>
                        {DashmenuMap.map((section, index) => (
                            <React.Fragment key={index}>
                                {section.items.map((item: { name?: string; icon?: React.ReactNode; title?: string }, index: number) => (
                                    <li key={item.name} className={`${isActiveRoute(`/dashboard/${item.name?.toLowerCase()}`) ? 'active flex items-cejnter' : ' flex items-center'}`}>
                                        <span className='text-cream flex items-center justify-center px-3 py-2 -z-10 text-xs bg-green-alt bg-dash-alt-border rounded-lg w-max border'>
                                            {item.icon}
                                        </span>
                                        <LeftAsideLink name={item.name} hash={`/dashboard/${item.name?.toLowerCase()}`} />

                                    </li>
                                ))}
                            </React.Fragment>
                        ))}
                        {DashmenuMapSub.map((section, index) => (
                            <React.Fragment key={index}>
                                <ul className="space-y-1 sub-sub parent">
                                    <h2 className="title pl-[10px]">Settings</h2>
                                    {section.items.map((item: { name?: string; icon?: React.ReactNode; title?: string }, index: number) => {
                                        if (item.name) {
                                            return (
                                                <li key={item.name} className={isActiveRoute(`/${item.name?.toLowerCase()}`) ? 'active' : ''}>
                                                    <LeftAsideLink name={item.name} hash={`/${item.name?.toLowerCase()}`} />
                                                </li>
                                            );
                                        } else {
                                            return null;
                                        }
                                    })}
                                </ul>
                            </React.Fragment>
                        ))}
                        {DashmenuMapSubSub.map((section, index) => (
                            <React.Fragment key={index}>
                                <ul className="space-y-1 sub-sub child">
                                    <h2 className="title pl-[10px]">Settings</h2>
                                    {section.items.map((item: { name?: string; icon?: React.ReactNode; title?: string }, index: number) => {
                                        if (item.name) {
                                            return (
                                                <li key={item.name} className={isActiveRoute(`/dashboard/${item.name?.toLowerCase()}`) ? 'active' : ''}>
                                                    <LeftAsideLink name={item.name} hash={`/dashboard/${item.name?.toLowerCase()}`} />
                                                </li>
                                            );
                                        } else {
                                            return null;
                                        }
                                    })}
                                </ul>
                            </React.Fragment>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="footer flex flex-col justify-end gap-[24px]">
                <div className="flex gap flex-col">
                    <h3>Got a question?</h3>
                    <p className="text-xs leading-5">Or just want to share some feedback? I'd be happy to hear.</p>
                </div>
                {loginMenuItem()}
            </div>
        </div>
    );
}