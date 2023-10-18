'use client';

import LogoIcon from "@/components/core/icons/remcostoeten-logo-icon";
import { dashboardNav } from "@/config/data";
import { Calendar, MoreHorizontal, Tags, Trash, User } from "lucide-react"
import { useState } from "react";

interface DashNavProps { }

import { Button } from "@/components/ui/button"

import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { BellIcon, SearchIcon } from "@heroicons/react/solid";

const labels = [
    "feature",
    "bug",
    "enhancement",
    "documentation",
    "design",
    "question",
    "maintenance",
]

export default function DashNav({ }: DashNavProps) {
    const [label, setLabel] = useState("")
    const [open, setOpen] = useState(false)

    return (
        <>

            <header className="flex items-center my-5  mx-auto m-w-[1280px] space-between justify-between">

                <LogoIcon />
                <nav className="bg-[#1f1f1f] rounded-full top-0 black-box px-10 h-[69px]    pr-8 ">
                    <ul className="dashboard-nav flex gap-12">
                        {dashboardNav.map((item, index) => {
                            return <li className="cursor-pointer font-light flex items-center text-[#c9c9c9" key={index}>{item.name}</li>;
                        })}
                    </ul>
                </nav>
                <div className="flex justify-end gap-2">
                    <div className="flex gap-1 items-center justify-center rounded-full border-[#2F2F2F] ">
                        <span className="flex items-center justify-center rounded-full border-[#2F2F2F] w-12 h-12 border">
                            <SearchIcon width={30} />
                        </span>
                        <span className="flex items-center justify-center rounded-full border-[#2F2F2F] w-12 h-12 border">
                            <BellIcon width={30} />
                        </span>
                    </div>
                    <nav className="pl-[90px] relative bg-[#1f1f1f] rounded-full top-0 black-box px-10 h-[69px]  flex items-center align-middle
                      pr-8 ">
                        <div className="flex items-center justify-center"><div className="absolute left-[13px]  w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                            <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                        </div>
                            <div className="flex flex-col gap- ">

                                <h2>username</h2>
                                <span className="text-light text-xs text-[#757575]">Subtitle</span>
                            </div>
                        </div>
                        <div className="flex w-full flex-col items-start justify-between sm:flex-row sm:items-center">
                            <p className="text-sm font-medium leading-none">
                                <span className="mr-2 rounded-lg bg-primary px-2 py-1 text-xs text-primary-foreground">
                                    {label}
                                </span>
                            </p>
                            <DropdownMenu open={open} onOpenChange={setOpen}>
                                <DropdownMenuTrigger asChild>
                                    <MoreHorizontal />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="w-[200px]">
                                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                    <DropdownMenuGroup>
                                        <DropdownMenuItem>
                                            <Calendar className="mr-2 h-4 w-4" />
                                            Settings...
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem className="text-red-600 cursor-pointer">
                                            <Trash className="mr-2 h-4 w-4" />
                                            Delete
                                            <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                    </DropdownMenuGroup>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </nav>
                </div >
            </header >
        </>
    );
}