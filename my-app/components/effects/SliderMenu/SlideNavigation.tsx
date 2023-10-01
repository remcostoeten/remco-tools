'use client';
import { useState } from 'react'
import Burger from './burger/Burger';
import Menu from './menu';
import { AnimatePresence } from 'framer-motion';
import Stairs from './stairs/Stairs';
import SectionSpacer from '@/components/ui/SectionSpacer';

export default function Header() {

    const [menuIsOpen, setMenuIsOpen] = useState(false);

    return (
        <>
            <SectionSpacer variant='small' />
            <div className='z-max'>
                <Burger openMenu={() => { setMenuIsOpen(true); }} />
                <AnimatePresence mode='wait'>
                    {menuIsOpen && <>
                        <Stairs />
                        <Menu closeMenu={() => { setMenuIsOpen(false); }} />
                    </>}
                </AnimatePresence>
            </div>
        </>
    )
}

