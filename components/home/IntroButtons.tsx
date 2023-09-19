import React from 'react';
import ArrowButton from '../core/buttons/ArrowBtn';
import DownloadCV from './pdf';

export default function IntroButtons() {
    return (
        <>
            <ArrowButton
                text='Get in contact'
                showLeftArrow={false}
                showRightArrow={false}
                hoverText='say hiiiiiiiii'
            />
            <DownloadCV />
        </>
    );
}
