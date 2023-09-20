'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { HiDownload } from 'react-icons/hi';
import { Drawer } from 'vaul';
import ArrowButton from '../core/buttons/ArrowBtn';

export default function DownloadCV() {
    const [isPdfOpen, setIsPdfOpen] = useState(false);

    const openPdf = () => {
        setIsPdfOpen(true);
    };

    return (
        <Drawer.Root shouldScaleBackground>
            <Drawer.Trigger asChild>
                <ArrowButton showLeftArrow={false} showRightArrow={false} text="View CV" onClick={openPdf} hoverText="Or Download" />
            </Drawer.Trigger>
            <Drawer.Portal>
                <Drawer.Overlay className="fixed inset-0 bg-black/40" />
                <Drawer.Content className="fixed bottom-0 left-0 right-0 mt-24 flex h-[96%] flex-col rounded-t-[10px] bg-zinc-100">
                    <div className="relative flex-1 rounded-t-[10px] bg-white p-4">
                        {isPdfOpen && (
                            <React.Fragment>
                                <div className="fixed inset-0 flex flex-col items-center justify-center gap-4 z-max">
                                    <div className="fixed inset-0 bg-black opacity-75"></div>
                                    <div className="flex justify-between w-4/5 gap-2 left-10 top-4 ">
                                        <h2 className="pt-4 pl-4 pr-4 font-semibold text-left z-max">
                                            This CV is a little bit out dated without my current employee,
                                            <br></br> but it gives a clear indication.
                                        </h2>
                                        <small className="absolute opacity-25 right-4 top-2 sm:top-12 ">Swipe to close, also on desktop :)</small>
                                    </div>

                                    <div className="relative w-4/5 overflow-hidden bg-white rounded-lg shadow-lg h-4/5">
                                        <iframe title="PDF Viewer" src="/CV.pdf" className="w-full h-full"></iframe>
                                        <Link href="/CV.pdf" download className="absolute flex items-center gap-2 px-4 py-2 font-bold text-white bg-blue-500 rounded bottom-2 right-2 hover:bg-blue-700">
                                            Download CV
                                            <HiDownload className="transition opacity-60 group-hover:translate-y-1" />
                                        </Link>
                                    </div>
                                </div>
                            </React.Fragment>
                        )}
                    </div>
                    <Drawer.Close>Close</Drawer.Close>
                </Drawer.Content>
            </Drawer.Portal>
        </Drawer.Root>
    );
}
