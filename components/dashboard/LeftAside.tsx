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



export default function LeftAside() {
    const currentRoute = usePathname().toLowerCase();
    const user = auth?.currentUser;

    const loginMenuItem = () => {
        return user ? (
            <button className='cta gap-6' onClick={() => signOut(auth)}>
                <MagicStar />
                Logout <LuLogOut style={{ transform: 'translate(20px, 3px)' }} color='#8BB928' />
                <MagicStar />
            </button>
        ) : (
            <Link className='cta text-sm' href='/dashboard/login'>
                <MagicStar />
                <Pencil color="#8BB928" />
                Login
                <MagicStar />
            </Link >
        );
    };

    return (
        <div className='flex flex-col justify-between h-screen'>
            <div className='text-cream mt-[50px] mb-[40px] flex flex-col'>
                <div className='logo-section'>
                    <LogoIcon fill='#92C52A' />
                </div>
                {DashmenuMap.map((section, index) => (
                    <div key={index} className='sub'>
                        <ul className='space-y-1 sub grandparent'>
                            {section.items.map((item: { text?: string; icon?: React.ReactNode; title?: string; }, index: number) => {
                                if (item.text) {
                                    return (
                                        <li key={item.text} className={currentRoute === `/${item.text.toLowerCase()}` ? 'active' : ''}>
                                            <AltButtonTextOutside icon={item.icon}>
                                                <Link href={`dashboard/${item.text.toLowerCase()}`}>{item.text}</Link>
                                            </AltButtonTextOutside>
                                        </li>
                                    );
                                } else {
                                    return null;
                                }
                            })}
                        </ul>
                    </div>
                ))}
                {DashmenuMapSub.map((section, index) => (
                    <div key={index} className='sub'>
                        <ul className='space-y-1 sub-sub parent'>
                            <h2 className='title pl-[10px]'>Settings</h2>
                            {section.items.map((item: { text?: string; icon?: React.ReactNode; title?: string; }, index: number) => {
                                if (item.text) {
                                    return (
                                        <li key={item.text} className={currentRoute === `/${item.text.toLowerCase()}` ? 'active' : ''}>
                                            <Link href={`/${item.text.toLowerCase()}`}>{item.text}</Link>
                                        </li>
                                    );
                                } else {
                                    return null;
                                }
                            })}
                        </ul>
                    </div>
                ))}
                {DashmenuMapSubSub.map((section, index) => (
                    <div key={index} className='sub'>
                        <ul className='space-y-1 sub-sub child'>
                            <h2 className='title pl-[10px]'>Settings</h2>
                            {section.items.map((item: { text?: string; icon?: React.ReactNode; title?: string; }, index: number) => {
                                if (item.text) {
                                    return (
                                        <li key={item.text} className={currentRoute === `/${item.text.toLowerCase()}` ? 'active' : ''}>
                                            <Link href={`dashboard/${item.text.toLowerCase()}`}>{item.text}</Link>
                                        </li>
                                    );
                                } else {
                                    return null;
                                }
                            })}
                        </ul>
                    </div>
                ))}
            </div>
            <div className='footer flex flex-col justify-end gap-[24px]'>
                <div className='flex gap flex-col'>
                    <h3>Got a question?</h3>
                    <p className='text-xs leading-5'>Or just want to share some feedback? I'd be happy to hear.</p>
                </div>
                {loginMenuItem()}
            </div>
        </div >
    );
}
