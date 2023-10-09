'use client';
import { motion } from 'framer-motion';
import React, { useEffect } from 'react';

interface HoverCardProps {
    small?: boolean;
    children?: React.ReactNode;
    cardType?: 'card--income' | 'card--expense';
}

const HoverCard = ({
    small, children, cardType
}: HoverCardProps) => {
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const cards = document.getElementsByClassName('card');
            for (const card of cards) {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                (card as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
                (card as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
            }
        };

        const cardsElement = document.getElementById('cardz');
        if (cardsElement) {
            cardsElement.addEventListener('mousemove', handleMouseMove);
            return () => {
                cardsElement.removeEventListener('mousemove', handleMouseMove);
            };
        }
    }, []);
    
    const cardClass = cardType ? `card ${cardType}` : 'card';

    return (
        <motion.div id="cardz" initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 2 } }}
            className={small ? "sm:w-2/12 w-full " : "sm:w-5/12 w-full"}
        >
            <div className={cardClass}>
                <div className="card-content">
                    {children}
                </div>
            </div>
        </motion.div>
    );
};

export default HoverCard;