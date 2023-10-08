import { ThemeBlockProps } from "@/utils/types";
import { ContextMenu, ContextMenuContent, ContextMenuItem } from "../ui/context-menu";
import { ContextMenuTrigger } from "../ui/context-menu";
import MoneyUpIcon from "./icons/MoneyUp";
import MoneyDownIcon from "./icons/MoneyDown";
import { DotIcon } from "@radix-ui/react-icons";

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
                    <ContextMenu>
                        <ContextMenuTrigger>
                            <span className="dots text-zinc-600 text-4xl flex gap-[2px]"><DotIcon fill="#eee" /><DotIcon fill="#eee" /> <DotIcon fill="#eee" />         </span>
                        </ContextMenuTrigger>
                        <ContextMenuContent>
                            <ContextMenuItem>Profile</ContextMenuItem>
                            <ContextMenuItem>Billing</ContextMenuItem>
                            <ContextMenuItem>Team</ContextMenuItem>
                            <ContextMenuItem>Subscription</ContextMenuItem>
                        </ContextMenuContent>
                    </ContextMenu>
                </div>
            )}
            {children}
        </div>
    );
}