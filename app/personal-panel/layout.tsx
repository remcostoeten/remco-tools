'use client';
import { Command, CommandDialog, CommandEmpty, CommandInput, CommandItem, CommandGroup, CommandList } from "@/components/ui/command";
import * as React from "react";
import Blocks from "./components/Blocks";
import Sidebar from "./components/Sidebar";
import Blocksz from "./components/DashboardComponent";
import RevenueGrowthComponent from "./components/DashboardComponent";

export default function DashboardComponent() {
    const [open, setOpen] = React.useState(false)
    return (
        <>
            <body className="bg-dash-grey">
                <header className="justify-between items-start border-b-[color:var(--black-10,rgba(255,255,255,0.10))] flex gap-5 bg-dash-grey px-5 border-b border-solid max-md:flex-wrap">
                    <nav className="items-start self-stretch flex justify-between gap-5 mt-5 pl-1 pr-2 py-1 mb-5">
                        <div className="items-start content-center flex-wrap self-stretch flex justify-between gap-4 rounded-lg">
                            <img loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/20fe64a3-efce-4b79-a29a-6f08a3b79eff?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/20fe64a3-efce-4b79-a29a-6f08a3b79eff?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/20fe64a3-efce-4b79-a29a-6f08a3b79eff?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/20fe64a3-efce-4b79-a29a-6f08a3b79eff?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/20fe64a3-efce-4b79-a29a-6f08a3b79eff?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/20fe64a3-efce-4b79-a29a-6f08a3b79eff?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/20fe64a3-efce-4b79-a29a-6f08a3b79eff?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/20fe64a3-efce-4b79-a29a-6f08a3b79eff?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&" className="aspect-square object-cover object-center w-5 overflow-hidden shrink-0" />
                            <img loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5fffc0de-eae2-48de-93b3-7918a5f7a640?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5fffc0de-eae2-48de-93b3-7918a5f7a640?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5fffc0de-eae2-48de-93b3-7918a5f7a640?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5fffc0de-eae2-48de-93b3-7918a5f7a640?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5fffc0de-eae2-48de-93b3-7918a5f7a640?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5fffc0de-eae2-48de-93b3-7918a5f7a640?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5fffc0de-eae2-48de-93b3-7918a5f7a640?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5fffc0de-eae2-48de-93b3-7918a5f7a640?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&" className="aspect-square object-cover object-center w-5 overflow-hidden shrink-0" />
                        </div>
                        <div className="items-start content-center flex-wrap self-stretch flex gap-4 rounded-lg max-md:justify-center">
                            <div className="self-stretch text-white text-opacity-40 text-center text-sm leading-[142.86%]">Dashboards</div>
                            <div className="self-stretch text-white text-opacity-20 text-sm leading-[142.86%]">/</div>
                            <div className="self-stretch text-white text-center text-sm leading-[142.86%]">Default</div>
                        </div>
                    </nav>
                    <div className="items-start self-stretch flex w-[316px] max-w-full justify-between gap-5 mt-5 pr-1">
                        <form className="items-start content-center flex-wrap bg-white bg-opacity-10 self-stretch flex max-w-full justify-between gap-2 px-0 py-0 rounded-lg w-96 h-10">
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
                            </CommandDialog> <div className="items-start content-center flex-wrap self-stretch flex justify-between gap-1 rounded-lg">

                            </div>
                        </form>
                        <div className="items-start content-center flex-wrap self-center flex gap-4 my-auto rounded-lg max-md:justify-center w-full">
                            <img loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/fd2e68b8-6a6c-4bbb-ae4c-4fdf68657965?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/fd2e68b8-6a6c-4bbb-ae4c-4fdf68657965?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fd2e68b8-6a6c-4bbb-ae4c-4fdf68657965?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/fd2e68b8-6a6c-4bbb-ae4c-4fdf68657965?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/fd2e68b8-6a6c-4bbb-ae4c-4fdf68657965?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fd2e68b8-6a6c-4bbb-ae4c-4fdf68657965?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/fd2e68b8-6a6c-4bbb-ae4c-4fdf68657965?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/fd2e68b8-6a6c-4bbb-ae4c-4fdf68657965?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&" className="aspect-square object-cover object-center w-5 overflow-hidden shrink-0" />
                            <img loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8262559e-0437-467c-af1f-ad3177e58388?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8262559e-0437-467c-af1f-ad3177e58388?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8262559e-0437-467c-af1f-ad3177e58388?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8262559e-0437-467c-af1f-ad3177e58388?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8262559e-0437-467c-af1f-ad3177e58388?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8262559e-0437-467c-af1f-ad3177e58388?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8262559e-0437-467c-af1f-ad3177e58388?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8262559e-0437-467c-af1f-ad3177e58388?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&" className="aspect-square object-cover object-center w-5 overflow-hidden shrink-0" />
                            <img loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c9c5d538-1b30-4853-8a3e-bdc86f269986?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9c5d538-1b30-4853-8a3e-bdc86f269986?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9c5d538-1b30-4853-8a3e-bdc86f269986?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9c5d538-1b30-4853-8a3e-bdc86f269986?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9c5d538-1b30-4853-8a3e-bdc86f269986?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9c5d538-1b30-4853-8a3e-bdc86f269986?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9c5d538-1b30-4853-8a3e-bdc86f269986?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9c5d538-1b30-4853-8a3e-bdc86f269986?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&" className="aspect-square object-cover object-center w-5 overflow-hidden shrink-0" />
                            <img loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6e16351f-e77e-4d68-a863-4bf178025fd0?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e16351f-e77e-4d68-a863-4bf178025fd0?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e16351f-e77e-4d68-a863-4bf178025fd0?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e16351f-e77e-4d68-a863-4bf178025fd0?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e16351f-e77e-4d68-a863-4bf178025fd0?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e16351f-e77e-4d68-a863-4bf178025fd0?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e16351f-e77e-4d68-a863-4bf178025fd0?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e16351f-e77e-4d68-a863-4bf178025fd0?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&" className="aspect-square object-cover object-center w-5 overflow-hidden shrink-0" />
                        </div>
                    </div>
                </header>
                <main className="flex">
                    <Sidebar />
                    <RevenueGrowthComponent />
                </main >
            </body >
        </>
    );
}