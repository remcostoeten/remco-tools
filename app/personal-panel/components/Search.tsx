import { Input } from "@/components/ui/input";
import { useCurrentPath } from "@/hooks/useCurrentPath";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function TSearch() {
    let currentPath = useCurrentPath();

    const breadcrumbs = () => {
        if (currentPath === "/dashboard") {
            return "Dashboard - Home";
        }
        return "";
    };

    useEffect(() => {
        if (currentPath === "/dashboard") {
            currentPath = "Dashboard - Home";
            console.log("Dashboard - Home");
        }
    }, [currentPath]);

    return (
        <>
            <header className="justify-between items-start border-b-[color:var(--black-10,rgba(255,255,255,0.10))] flex gap-5 bg-dash-grey p-default border-b border-solid max-md:flex-wrap">
                <nav className="items-start self-stretch flex justify-between gap-5 mt-5 pl-1 pr-2 py-1 mb-5">
                    <div className="items-start content-center flex-wrap self-stretch flex justify-between gap-4 rounded-lg">
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/20fe64a3-efce-4b79-a29a-6f08a3b79eff?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/20fe64a3-efce-4b79-a29a-6f08a3b79eff?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/20fe64a3-efce-4b79-a29a-6f08a3b79eff?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/20fe64a3-efce-4b79-a29a-6f08a3b79eff?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/20fe64a3-efce-4b79-a29a-6f08a3b79eff?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/20fe64a3-efce-4b79-a29a-6f08a3b79eff?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/20fe64a3-efce-4b79-a29a-6f08a3b79eff?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/20fe64a3-efce-4b79-a29a-6f08a3b79eff?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&"
                            className="aspect-square object-cover object-center w-5 overflow-hidden shrink-0"
                        />
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5fffc0de-eae2-48de-93b3-7918a5f7a640?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5fffc0de-eae2-48de-93b3-7918a5f7a640?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5fffc0de-eae2-48de-93b3-7918a5f7a640?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5fffc0de-eae2-48de-93b3-7918a5f7a640?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5fffc0de-eae2-48de-93b3-7918a5f7a640?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5fffc0de-eae2-48de-93b3-7918a5f7a640?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5fffc0de-eae2-48de-93b3-7918a5f7a640?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5fffc0de-eae2-48de-93b3-7918a5f7a640?apiKey=3cf1db2ab1694ce4be6d4ee2ec473197&"
                            className="aspect-square object-cover object-center w-5 overflow-hidden shrink-0"
                        />
                    </div>
                    <div className="items-start content-center flex-wrap self-stretch flex gap-4 rounded-lg max-md:justify-center">
                        <div className="self-stretch text-white text-opacity-40 text-center text-sm leading-[142.86%]">
                            <Link href="/">Home</Link>
                        </div>
                        <div className="self-stretch text-white text-opacity-20 text-sm leading-[142.86%]">/</div>
                        <div className="self-stretch text-white text-center text-sm leading-[142.86%]">
                            {currentPath}
                        </div>
                    </div>
                </nav>
                <div className="items-start self-stretch flex w-[316px] max-w-full justify-between gap-5 mt-5 pr-1">
                    <div className="flex items-center px-3 w-full placeholder:text-cream text:cream focus:text-cream active:text-cream" cmdk-input-wrapper="">
                        <search className={cn("mr-4 h-4 w-4 shrink-0 opacity-50", "text-cream")} />
                        <Input
                            className={cn(
                                "flex h-11 w-full rounded-md bg-transparent py-3 placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 text-cream"
                            )}
                        />
                    </div>
                </div>
            </header>
        </>
    );
}