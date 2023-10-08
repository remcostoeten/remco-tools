import { ThemeBlockProps } from "@/utils/types";

export default function Block({
    children,
    flexDir = "col",
    borderRadius = "rounded-md",
    gap = "gap-4",
    width,
    title,
    className = "",
}: ThemeBlockProps) {
    return (
        <div className={`black-block black-block--section ${borderRadius} flex flex-${flexDir} ${gap} ${width} ${className}`}> {/* Concatenate className prop */}
            {title && <h4 className="text-5xl font-medium tracking-wider">{title}</h4>}
            {children}
        </div>
    );
}