'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { HiDownload } from 'react-icons/hi';
import { Drawer } from 'vaul';

export default function DownloadCV() {
    const [isPdfOpen, setIsPdfOpen] = useState(false);

    const openPdf = () => {
        setIsPdfOpen(true);
    };

    const closePdf = () => {
        setIsPdfOpen(false);
    };

    return (
        <>
            <div className='z-max'>
                <Drawer.Root shouldScaleBackground>
                    <Drawer.Trigger asChild>
                        <button
                            className='group border-shadow border hover-effect bg-offwhite hover:text-white dark:bg-black dark:text-offwhite px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'
                            onClick={openPdf}
                        >
                            Open Drawer
                        </button>
                    </Drawer.Trigger>
                    <Drawer.Portal>
                        <Drawer.Overlay className='fixed inset-0 bg-black/40' />
                        <Drawer.Content className='bg-zinc-100 flex flex-col rounded-t-[10px] h-[96%] mt-24 fixed bottom-0 left-0 right-0'>
                            <div className='relative p-4 bg-white rounded-t-[10px] flex-1'>
                                {isPdfOpen && (
                                    <div className='fixed flex flex-col gap-4 inset-0 flex z-max items-center justify-center'>
                                        <div className='fixed inset-0 bg-black opacity-75'></div>
                                        <div className='flex  left-10 top-4 w-max justify-between gap-2 '>
                                            <h2 className='text-left font-semibold p-4 z-max'>
                                                This CV is a little bit out
                                                dated without my current
                                                employee,
                                                <br></br> but it gives a clear
                                                indication.
                                            </h2>
                                        </div>
                                        <small className='absolute right-4 top-0 '>
                                            Swipe to close, also on desktop :)
                                        </small>
                                        <div className='bg-white w-4/5 h-4/5 shadow-lg rounded-lg overflow-hidden relative'>
                                            <iframe
                                                title='PDF Viewer'
                                                src='/CV.pdf'
                                                className='w-full h-full'
                                            ></iframe>
                                            <Link
                                                href='/CV.pdf'
                                                download
                                                className='absolute flex items-center gap-2  bottom-2 right-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                                            >
                                                Download CV
                                                <HiDownload className='opacity-60 group-hover:translate-y-1 transition' />
                                            </Link>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <Drawer.Close>Close</Drawer.Close>
                        </Drawer.Content>
                    </Drawer.Portal>
                </Drawer.Root>
            </div>{' '}
        </>
    );
}
