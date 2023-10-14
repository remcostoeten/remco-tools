'use client';
import React from 'react';
import LogoIcon from '../core/icons/remcostoeten-logo-icon';
import { AltButtonTextOutside } from '../core/buttons/Buttons';
import { DashmenuMap, DashmenuMapSub, DashmenuMapSubSub } from '@/config/data';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { auth } from '@/utils/firebase';
import { signOut } from 'firebase/auth';
import MagicStar from '../effects/MagicStar';
import { Pencil } from 'lucide-react';
import { LogoutIcon } from '@heroicons/react/solid';
import { LuLogOut } from 'react-icons/lu';
import { useActiveSectionContext } from '@/context/active-section-contex';
import { motion } from 'framer-motion';
import clsx from 'clsx';

type LinkProps = {
    name: string;
    hash: string;
};

const LeftAsideLink: React.FC<LinkProps> = ({ name, hash }) => {
    const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    return (
        <Link
            className={clsx('flex w-full items-center justify-center py-3 hover:text-gray-200 transition dark:-text-white pl-4 pr-4 h-9', {
                '': activeSection === name,
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
                    className="black-block absolute inset-0 border rounded-full -z-10"
                    layoutId="activeSection"
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
    const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
    const isActiveRoute = (route) => {
        return currentRoute === route.toLowerCase();
    };

    const loginMenuItem = () => {
        return user ? (
            <button className="cta gap-6" onClick={() => signOut(auth)}>
                <MagicStar />
                Logout <LuLogOut style={{ transform: 'translate(20px, 3px)' }} color="#8BB928" />
                <MagicStar />
            </button>
        ) : (
            <Link className="cta text-sm" href="/dashboard/login">
                <MagicStar />
                <Pencil color="#8BB928" />
                Login
                <MagicStar />
            </Link>
        );
    };

    return (
        <div className="flex flex-col justify-between h-screen">
            <div className="text-cream mt-[50px] mb-[40px] flex flex-col">
                <div className="logo-section">
                    <LogoIcon fill="#92C52A" />
                </div>
                <div className="sub">
                    <ul className="space-y-1 sub grandparent">
                        <li className={isActiveRoute('/dashboard') ? 'active' : ''}>
                            <Link href="/dashboard">Dashboard</Link>
                        </li>
                        {DashmenuMap.map((section, index) => (
                            <React.Fragment key={index}>
                                {section.items.map((item: { name?: string; icon?: React.ReactNode; title?: string }, index: number) => (
                                    <li key={item.name} className={isActiveRoute(`/dashboard/${item.name?.toLowerCase()}`) ? 'active' : ''}>
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