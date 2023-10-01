'use client';
import { ArrowTopLeftIcon } from '@radix-ui/react-icons';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { toast } from '@/components/ui/use-toast';
import notFoundProps from './not-found';
import { Label } from '@radix-ui/react-label';
import { Switch } from '@radix-ui/react-switch';
import { useState, useRef, useEffect } from 'react';

type NotFoundProps = {
    play?: any;
    pause?: any;
};

export default function NotFound({}: NotFoundProps) {
    // Corrected function name and parameter type
    const [showError, setShowError] = useState(true);
    const [playAbba, setPlayAbba] = useState(false);
    const elevatorRef = useRef<HTMLAudioElement | null>(null);
    const abbaRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        setTimeout(() => {
            toast({
                title: 'Now playing generic_elevator.mp3',
            });
            elevatorRef.current?.play();
        }, 1000);
    }, []);

    const switchSong = () => {
        setPlayAbba(!playAbba);
    };

    useEffect(() => {
        if (playAbba) {
            setTimeout(() => {
                toast({
                    title: '🎉 Now playing abba - dancing queen.mp3 💃',
                });
                elevatorRef.current?.pause();
                abbaRef.current?.play();
            }, 1000);
        } else {
            abbaRef.current?.pause();
        }
    }, [playAbba]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowError(false);
            window.location.href = '/'; // Perform client-side redirection
        }, 30000);

        return () => clearTimeout(timer);
    }, []);

    if (!showError) {
        return null;
    }

    return (
        <div className="error-wrapper">
            <div className="flex items-center p-8 flex-end space-x-2 justify-between">
                <motion.a whileHover={{ scale: 1.04, transition: { duration: 0.6 } }} transition={{ delay: 0.2, duration: 0.5, ease: 'easeInOut' }} className="text-sm flex gap-2 items-center align-middle font-medium" href="/">
                    <ArrowTopLeftIcon width={25} height={25} />
                    <span>Return back to home</span>
                </motion.a>
                <div className="flex items-center p-8 flex-end space-x-2 justify-between content-center">
                    <Label htmlFor="song" className="flex flex-col space-y-1">
                        <span className="font-2xl font-semibold">Switch song</span>
                    </Label>
                    <Switch id="song" onClick={switchSong} />
                </div>
            </div>
            <div className="error font-[80px]">404</div>
            <br />
            <br />
            <span className="info font-[40px]">File not found</span>
            <img src="http://images2.layoutsparks.com/1/160030/too-much-tv-static.gif" className="static" alt="Static GIF" /> <audio ref={elevatorRef} src="/music.mp3" loop autoPlay={showError} />
            <audio ref={abbaRef} src="/abba.mp3" loop />
        </div>
    );
}
