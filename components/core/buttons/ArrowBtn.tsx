import Link from 'next/link';

type ArrowBtnProps = {
    text?: string;
    anchor?: string;
    onClick?: () => void;
    className?: string;
    showParticles?: boolean;
    showHoverText?: boolean;
    hoverText?: string;
};

export default function ArrowBtn({
    text,
    anchor,
    onClick,
    className,
    showParticles = true,
    showHoverText = false,
    hoverText,
}: ArrowBtnProps) {
    return (
        <>
            <button
                className={`${className} btn btn--arrow btn--animate btn--transparent`}
                style={{ width: '200px' }}
            >
                <div className='btn__content'>{text}</div>
                <Link
                    href={anchor}
                    onClick={onClick}
                    className='animated-arrow'
                >
                    <span className='the-arrow -left'>
                        <span className='shaft'></span>
                    </span>
                    <span className='main'>
                        {showHoverText && (
                            <span className='text particles'>{hoverText}</span>
                        )}
                        <span
                            style={{ transform: ' translateY(-18px)' }}
                            className='the-arrow               '
                        >
                            {' '}
                            <span className='shaft'></span>
                        </span>
                    </span>
                </Link>

                {showParticles && <div className='particles'></div>}
            </button>
            <button className='btn animbtn'>
                <Link
                    onClick={() => {
                        setActiveSection('Contact');
                        setTimeOfLastClick(Date.now());
                    }}
                    className='btn--animated btn__intro animated-arrow'
                    href='#contact'
                >
                    <span className='the-arrow -left'>
                        <span className='shaft'></span>
                    </span>
                    <span className='main'>
                        <span className='btn__hover-text'>View PDF</span>
                        <span className='absolute text particles'>Or Download</span>
                        <span className='the-arrow -right'>
                            {' '}
                            <span className='shaft'></span>
                        </span>
                    </span>
                    <div className='particles'></div>
                </Link>
            </button>
        </>
    );
}
// Example usage of ArrowBtn component
