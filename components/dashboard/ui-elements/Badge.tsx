import React from 'react';

interface BadgeProps {
    text: string;
    onClose?: () => void;
    style?: React.CSSProperties;
    className?: string;
    variant?: 'default' | 'absolute';
    optionalText?: string;
    position?: {
        top?: number | string;
        left?: number | string;
        right?: number | string;
        bottom?: number | string;
    };
}

const Badge: React.FC<BadgeProps> = ({ text, onClose, style, className, variant = 'default', optionalText, position }) => {
    const badgeStyle: React.CSSProperties = {
        position: variant === 'absolute' ? 'absolute' : 'static',
        ...position,
        ...style,
    };


    return (
        <div onClick={onClose} className={`${className} dash-badge`} style={badgeStyle}>
            <div className="flex items-center gap-2">
                <span>{text}</span>
                <span>{optionalText}</span>
                {
                    onClose && (
                        <button onClick={onClose} />
                    )
                }
            </div>
        </div>
    );
}


export default Badge;