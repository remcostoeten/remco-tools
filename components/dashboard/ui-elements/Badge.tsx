import React from 'react';

interface BadgeProps {
    text: string;
    onClose?: () => void;
    style?: React.CSSProperties;
    className?: string;
    variant?: 'default' | 'absolute';
    position?: {
        top?: number | string;
        left?: number | string;
        right?: number | string;
        bottom?: number | string;
    };
}

const Badge: React.FC<BadgeProps> = ({ text, onClose, style, className, variant = 'default', position }) => {
    const badgeStyle: React.CSSProperties = {
        backgroundColor: '#0F170D',
        paddingTop: '8px',
        paddingLeft: '18px',
        paddingRight: '18px',
        paddingBottom: '8px',
        borderRadius: 'rounded-xl',
        display: 'inline-flex',
        alignItems: 'center',
        marginRight: '2px',
        border: '1px solid',
        borderColor: '#21301A',
        position: variant === 'absolute' ? 'absolute' : 'static',
        ...position,
        ...style,
    };

    const textStyle: React.CSSProperties = {
        color: '#BFC0BE',
        fontSize: '0.875rem',
    };

    const closeButtonStyle: React.CSSProperties = {
        color: '#BFC0BE',
        fontSize: '0.75rem',
        marginLeft: '0.5rem',
        outline: 'none',
    };

    return (
        <div onClick={onClose} className={`${className} dash-badge`} style={badgeStyle}>
            <span style={textStyle}>{text}</span>
            {onClose && (
                <button onClick={onClose} style={closeButtonStyle}>
                    ×
                </button>
            )}
        </div>
    );
};

export default Badge;