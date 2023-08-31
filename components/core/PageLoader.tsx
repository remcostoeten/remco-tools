import React from 'react';

export default function PageLoader() {
    return (
        <>
            <div className="w-screen h-screen grid place-items-center page-loader">
                <div className="jumping-dots-loader">
                    <span></span> <span></span> <span></span>{' '}
                </div>
                <div className="moving-gradient"></div>
            </div>
        </>
    );
}
