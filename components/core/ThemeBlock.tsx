import { ThemeBlockProps } from "@/utils/types";
import MoneyUpIcon from "./icons/MoneyUp";
import MoneyDownIcon from "./icons/MoneyDown";
import {
    Menubar, MenubarContent,
    MenubarItem,
    MenubarMenu, MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger
} from "@c/ui/menubar";
import { useEffect, useState } from "react";
export default function Block({
    children,
    flexDir = "col",
    borderRadius = "rounded-md",
    gap = "gap-4",
    width,
    title,
    className = "",
}: ThemeBlockProps) {

    const isIncome = title === "Income";
    const iconFill = "#3eb557";
    const downFill = "#d6222e"
    const size = "48px"
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(document.body.clientWidth <= 768);
    }, []);
    
    const Icon = isIncome ? (
        <MoneyUpIcon className="glowIcon" size={isMobile ? '36px' : '48px'} fill={iconFill} />
    ) : (
        <MoneyDownIcon size={isMobile ? '36px' : '48px'} fill={downFill} />
    );
    return (
        <div className={`dblock p-6 flex flex-col gap-4 ${borderRadius} flex flex-${flexDir} ${gap} ${width} ${className}`}>
            {title && (
                <div className="flex justify-between items-center">
                    <div className="flex gap-4 items-center">{Icon}
                        <h4 className="text-xl sm:text-3xl text-cream font-medium tracking-wider">{title}</h4>
                    </div>
                    <Menubar>
                        <MenubarMenu>
                            <MenubarTrigger><span className="text-cream">...</span></MenubarTrigger>
                            <MenubarContent>
                                <MenubarItem>
                                    Add new <MenubarShortcut>⌘T</MenubarShortcut>
                                </MenubarItem>
                                <MenubarItem>
                                    Some option <MenubarShortcut>⌘N</MenubarShortcut>
                                </MenubarItem>
                                <MenubarItem disabled>A disabled option</MenubarItem>
                                <MenubarSeparator />
                                <MenubarSub>
                                    <MenubarSubTrigger>Some menu</MenubarSubTrigger>
                                    <MenubarSubContent>
                                        <MenubarItem>Some text</MenubarItem>
                                        <MenubarItem>Some text</MenubarItem>
                                        <MenubarItem>Some text</MenubarItem>
                                    </MenubarSubContent>
                                </MenubarSub>
                                <MenubarSeparator />
                                <MenubarItem>
                                    Print... <MenubarShortcut>⌘P</MenubarShortcut>
                                </MenubarItem>
                            </MenubarContent>
                        </MenubarMenu>
                    </Menubar>                </div>
            )}
            {children}
        </div>
    );
}