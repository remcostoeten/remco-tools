import React, { ReactNode } from 'react';

interface ExpandButtonProps {
    children: ReactNode;
    beforeContent: ReactNode;
}

const ExpandButton = ({ children, beforeContent }: ExpandButtonProps) => {
    return (
        <span className='buttons--expand'>
            <div className="before-content">{beforeContent}</div>
            <span>{children}</span>
        </span>
    );
};

export default ExpandButton;
