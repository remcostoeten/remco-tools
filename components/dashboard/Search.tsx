'use client';
import React from "react";
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from "../ui/command";
import { SearchIcon } from "@heroicons/react/solid";
import { usePathname } from "next/navigation";
export default function Search() {
    const [open, setOpen] = React.useState(false)
    const pathname = usePathname()

    if (pathname === "dashboard/login" || pathname === "dashboard/register" || pathname === "dashboard") {
        return null
    }


    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }
        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])

    return (
        <>
            <Command className="flex items-center">
                <CommandInput placeholder="Type a command or search..." />
            </Command>
            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Suggestions">
                        <CommandItem>Calendar</CommandItem>
                        <CommandItem>Search Emoji</CommandItem>
                        <CommandItem>Calculator</CommandItem>
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
            <div className="fade-seperator-b-l mt-2"></div>
        </>
    )
}
