import React from "react";


export const Text = ({ children }) => (
    <p className="text-[16px] font-light flex items-center leading-[24px]">{children}</p>
);

export const Subheading = ({ children }) => (
    <p className="sub-heading">{children}</p>
);

export const Label = ({ children }) => (
    <span className="words">
        <Text>{children}</Text>
    </span>
);


