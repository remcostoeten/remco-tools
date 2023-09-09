const ExpandButton = ({ children, beforeContent }) => {
    return (
        <span className='buttons--expand'>
            <div className="before-content">{beforeContent}</div>
            <span>{children}</span>
        </span>
    );
};

export default ExpandButton;
