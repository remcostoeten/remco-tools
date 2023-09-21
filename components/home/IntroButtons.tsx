import React from 'react';
import DownloadCV from './pdf';
import { RoundedButton } from '../core/buttons/ArrowBtn';

export default function IntroButtons() {
    return (
        <>
            <RoundedButton text="Get in contact" showLeftArrow={false} customClassName="btn--rounded" showRightArrow={false} hoverText="say hiiiiiiiii" />
            <DownloadCV />
        </>
    );
}
