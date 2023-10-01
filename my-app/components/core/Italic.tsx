import React from 'react';

type Iprops = {
    i: string;
    className?: string;
};

export default function I({ i, className }: Iprops) {
    const standardClassName = 'libre-italic';

    // Combine the standard class and the custom class if provided
    const combinedClassName = className ? `${standardClassName} ${className}` : standardClassName;

    return <span className={combinedClassName}>{i}</span>;
}
