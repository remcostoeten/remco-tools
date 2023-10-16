import React, { useState, useMemo, useEffect } from 'react';
import { IMessage } from "@/utils/types";
import { Input } from '../ui/input';
import { Card } from '../ui/card';
import MiniSpinner from '../effects/MiniSpinner';
import { Button } from '@nextui-org/react';
import { useCurrentPath } from '@/hooks/useCurrentPath';
import Image from 'next/image';
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from '@heroicons/react/solid';

export default function MessageDisplay({ data, searchTerm, currentUser }: MessageDisplayProps) {
    const itemsPerPage = 50;
    const [currentPage, setCurrentPage] = useState(1);
    const [jumpToPage, setJumpToPage] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(true);
    const totalPages = Math.ceil(data.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = data.slice(startIndex, endIndex);
    const pageName = useCurrentPath();

    const highlightSearch = (message: string) => {
        const parts = message.split(new RegExp(`(${searchTerm})`, 'gi'));
        return (
            <span className="text-cream ">
                {parts.map((part, i) =>
                    part.toLowerCase() === searchTerm.toLowerCase() ?
                        <strong key={i} className="bg-yellow-300">{part}</strong> :
                        part
                )}
            </span>
        );
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pageName]);

    const distinctSenderNames = [...new Set(data.map((msg) => msg.name))];
    const senderPairs = [];
    for (let i = 0; i < distinctSenderNames.length; i += 2) {
        const firstSender = distinctSenderNames[i];
        const secondSender = distinctSenderNames[i + 1];
        senderPairs.push([firstSender, secondSender]);
    }

    const handleLogin = () => {
        if (password === process.env.NEXT_PUBLIC_PASSWORD) {
            setLoggedIn(true);
        } else {
            alert("Incorrect password");
        }
    };

    useEffect(() => {
        setLoading(false);
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pageName]);

    const handleJumpToPage = () => {
        const pageNumber = parseInt(jumpToPage);
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    if (!loggedIn) {
        return (
            <Card className="p-4 flex flex-col gap-2 mt-4 justify-start ">
                <h2>Admin Login</h2>
                <Input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button variant='shadow' onClick={handleLogin}>Login</Button>
            </Card>
        );
    }

    if (loading) {
        return <div><MiniSpinner /></div>;
    } else {
        return (
            <div>
                <div className="flex flex-col  p-4 space-y-4">
                    {currentData.map((msg) => (
                        <div
                            key={msg.id || msg.timestamp}
                            className={`message-container border-1 border bg-[#0F170D] border-black p-4 w-max min-w-[450px] ${senderPairs.some(pair => pair.includes(msg.name)) ? 'message-right' : 'message-left'}`}
                            id={msg.id || msg.timestamp}
                        >
                            <div className="relative flex-grow bg-blackc p-2 rounded-lg textresize-none">
                                <div className="font-bold">{msg.name}</div>
                                {msg.message && <div>{highlightSearch(msg.message)}</div>}

                                {msg.image && (
                                    <Image
                                        style={{
                                            maxWidth: '100%',
                                            maxHeight: '100%',
                                            objectFit: 'contain',
                                        }}
                                        fill
                                        className="mt-2"
                                        src={`/private-apis/img/${pageName}/${msg.image}`}
                                        alt="message-related"
                                    />

                                )}
                                <div className="dash-badge  absolute -right-[39px] -top-[15px] flex-none mr-4 text-cream p-2 ">
                                    {msg.timestamp}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 shadow-lg opacity-75 fixed right-3.5 h-fit  bottom-3">
                    <div className="flex flex-1 justify-between sm:hidden">
                        <a
                            href="#"
                            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        >
                            <ChevronDoubleLeftIcon className="h-5 w-5" aria-hidden="true" />
                            <span className="ml-2">Previous</span>
                        </a>
                        <a
                            href="#"
                            className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                        >
                            <span className="mr-2">Next</span>
                            <ChevronDoubleRightIcon className="h-5 w-5" aria-hidden="true" />
                        </a>
                    </div>
                    <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between flex ">
                        <div>
                            <p className="text-sm text-gray-700">
                                Showing <span className="font-medium">{startIndex + 1}</span> to <span className="font-medium">{endIndex}</span> of{' '}
                                <span className="font-medium">{data.length}</span> results
                            </p>
                        </div>
                        <div>
                            <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                                <a
                                    href="#"
                                    className={`relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 ${currentPage === 1 ? 'pointer-events-none bg-gray-200' : ''}`}
                                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                >
                                    <ChevronDoubleLeftIcon className="h-5 w-5" aria-hidden="true" />
                                </a>
                                {Array.from({ length: 5 }, (_, i) => {
                                    const pageNumber = currentPage - 2 + i;
                                    return pageNumber > 0 && pageNumber <= totalPages ? (
                                        <a
                                            key={pageNumber}
                                            href="#"
                                            className={`relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 ${currentPage === pageNumber ? 'bg-gray-200' : ''}`}
                                            onClick={() => setCurrentPage(pageNumber)}
                                        >
                                            {pageNumber}
                                        </a>
                                    ) : null;
                                })}
                                <a
                                    href="#"
                                    className={`relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 ${currentPage === totalPages ? 'pointer-events-none bg-gray-200' : ''}`}
                                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                                >
                                    <ChevronDoubleRightIcon className="h-5 w-5" aria-hidden="true" />
                                </a>
                                <div className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700">
                                    <span>Jump to page:</span>
                                    <Input
                                        type="number"
                                        min={1}
                                        max={totalPages}
                                        value={jumpToPage}
                                        onChange={(e) => setJumpToPage(e.target.value)}
                                        className="ml-2 w-16"
                                    />
                                    <Button variant='shadow' onClick={handleJumpToPage}>Go</Button>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};