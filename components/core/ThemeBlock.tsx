import { ThemeBlockProps } from "@/utils/types";
import { ContextMenu, ContextMenuContent, ContextMenuItem } from "../ui/context-menu";
import { ContextMenuTrigger } from "../ui/context-menu";
import MoneyUpIcon from "./icons/MoneyUp";
import MoneyDownIcon from "./icons/MoneyDown";
import { DotIcon } from "@radix-ui/react-icons";
import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
  } from "@c/ui/menubar"
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
    const Icon = isIncome ? <MoneyUpIcon className="glowIcon" size={size} fill={iconFill} /> : <MoneyDownIcon size={size} fill={downFill} />;

    return (
        <div className={`black-block black-block--section ${borderRadius} flex flex-${flexDir} ${gap} ${width} ${className}`}>
            {title && (
                <div className="flex justify-between items-center">
                    <div className="flex gap-4 items-center">{Icon}
                        <h4 className="text-3xl font-medium tracking-wider">{title}</h4>
                    </div>
                    <Menubar>
                        <MenubarMenu>
                            <MenubarTrigger>...</MenubarTrigger>
                            <MenubarContent>
                                <MenubarItem>
                                    New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                                </MenubarItem>
                                <MenubarItem>
                                    New Window <MenubarShortcut>⌘N</MenubarShortcut>
                                </MenubarItem>
                                <MenubarItem disabled>New Incognito Window</MenubarItem>
                                <MenubarSeparator />
                                <MenubarSub>
                                    <MenubarSubTrigger>Share</MenubarSubTrigger>
                                    <MenubarSubContent>
                                        <MenubarItem>Email link</MenubarItem>
                                        <MenubarItem>Messages</MenubarItem>
                                        <MenubarItem>Notes</MenubarItem>
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