import React, { ReactNode } from "react";

interface TextProps {
    children: ReactNode;
}

export const Text = ({ children }: TextProps) => (
    <p className="text-[16px] font-light flex items-center leading-[24px]">{children}</p>
);

interface SubheadingProps {
    children: ReactNode;
}

export const Subheading = ({ children }: SubheadingProps) => (
    <p className="sub-heading">{children}</p>
);

interface LabelProps {
    children: ReactNode;
}

export const Label = ({ children }: LabelProps) => (
    <span className="words">
        <Text>{children}</Text>
    </span>
);


