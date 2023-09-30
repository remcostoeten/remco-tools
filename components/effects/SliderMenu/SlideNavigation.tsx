'use client';
import { useState } from 'react'
import Burger from './burger/Burger';
import Menu from './menu';
import { AnimatePresence } from 'framer-motion';
import Stairs from './stairs/Stairs';

export default function Header() {

    const [menuIsOpen, setMenuIsOpen] = useState(false);

    return (
        <div className='z-max'>
            <Burger openMenu={() => { setMenuIsOpen(true) }} />
            <AnimatePresence mode='wait'>
                {
                    menuIsOpen && <>
                        <Stairs />
                        <Menu closeMenu={() => { setMenuIsOpen(false) }} />
                    </>
                }
            </AnimatePresence>
        </div>
    )
}

