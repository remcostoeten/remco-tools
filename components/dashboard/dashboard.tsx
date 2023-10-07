
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Separator } from 'components/ui/separator';


import SidebarLink from './SidebarLink';
import RemcoLogoIcon from '../core/icons/remcostoeten-logo-icon';
import { dashboardLinks, settingsLinks } from '@/config/data';
import { SignoutIcon } from './icons';


export default function Sidebar() {
    const pathname = usePathname();
    return (
        <>
            <div className="fixed inset-0 left-0 right-0 z-[1] hidden bg-black bg-opacity-10 backdrop-blur" />

            <div className="flex">
                <nav className="fixed bottom-0 left-0 top-0 z-[1] hidden min-h-full w-[140px] flex-col bg-[#09090b] px-3 py-2 transition-all sm:flex sm:w-[124px] sm:dark:border-r sm:dark:border-border">
                    <div className="z-[10] mb-[10px] flex h-full w-[100%] flex-col justify-between">
                        <div className="flex flex-col items-center justify-between h-full gap-8">
                            <div className="flex flex-col items-center">
                                <Link href="/" className="mt-[15px] rounded-lg p-1 transition-all focus:outline-none active:scale-95">
                                    <RemcoLogoIcon />
                                </Link>
                                <Separator className="mb-4 mt-[8px] border-t border-gray-100 opacity-[0.2]" />
                                {dashboardLinks.map((link, index) => {
                                    return (
                                        <SidebarLink className={index === 0 ? '!mt-0' : ''} key={link.name} name={link.name} active={pathname === link.href} href={link.href} shortcut={link.shortcutText}>
                                            <link.Icon className="text-white" />
                                        </SidebarLink>
                                    );
                                })}
                            </div>
                            <div className="flex flex-col items-center">
                                {settingsLinks.map((link) => {
                                    return (
                                        <SidebarLink key={link.href} active={pathname === link.href} href={link.href}>
                                            <link.Icon className="text-white" />
                                        </SidebarLink>
                                    );
                                })}
                                <button className={`mt-2 flex h-[40px] w-full items-center justify-center rounded-lg p-2 text-base tracking-wide text-white hover:bg-[#27272a]`} title="Sign out">
                                    <div className="flex items-center">
                                        <SignoutIcon className="text-white" />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
                <nav className="fixed bottom-0 left-[140px] top-0 z-[1] hidden min-h-full w-[25vw] flex-col bg-[#FFFBF3] px-3 py-2 transition-all sm:dark:border-r sm:dark:border-border">
                    <div className="z-[10] mb-[10px] flex h-full w-[100%] flex-col justify-between">
                        <div className="flex flex-col items-center justify-between h-full gap-8">
                            <div className="flex flex-col items-center"></div>
                        </div>
                    </div>
                </nav>
            </div >
        </>
    );
}