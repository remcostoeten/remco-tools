'use client';
import { useState } from 'react';
import OffCanvasMenu from './Offcanvas';

const HamburgerButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button className="fixed top-4 left-4 z-10" onClick={toggleMenu}>
                ☰
            </button>
            <OffCanvasMenu isOpen={isOpen} onClose={toggleMenu} />
        </>
    );
};

export default HamburgerButton;
