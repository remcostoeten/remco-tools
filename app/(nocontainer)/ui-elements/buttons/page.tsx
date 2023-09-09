import React from 'react';

export default function Page() {
    return (
        <>
            <div>
                <a href="javascript:void(0);" className="button">Check it out</a>
                <a href="" className="button-readmore"><span>Case Study</span></a>
            </div>
            <div className='link-container'>
                <a className='link link--has-anchor-animation' href='#'>
                    <span className='link__text'>
                        Get Started
                        <aside>
                            <span>→</span>
                            <span>→</span>
                        </aside>
                    </span>
                </a>
            </div>
        </>
    );
}
