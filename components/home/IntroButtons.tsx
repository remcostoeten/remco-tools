import React from 'react';
import RoundedButton from '../core/buttons/ArrowBtn';
import DownloadCV from './pdf';

export default function IntroButtons() {
    return (
        <>
            <RoundedButton text="Get in contact" showLeftArrow={false} customClassName="btn--rounded" showRightArrow={false} hoverText="say hiiiiiiiii" />
            <DownloadCV />
        </>
    );
}
