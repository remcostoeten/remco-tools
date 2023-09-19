import React from 'react';
import ArrowButton from '../core/buttons/ArrowBtn';
import DownloadCV from './pdf';

export default function IntroButtons() {
    return (
        <>
                <ArrowButton text='Or download'  hoverText='View CV'/>
            <DownloadCV />
        </>
    );
}
