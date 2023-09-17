// @ts-nocheck
export default function T({ t, italic = false }) {
    return (
        <span className={`gradient-text ${italic ? 'libre-italic' : ''}`}>
            {t}
        </span>
    );
}
