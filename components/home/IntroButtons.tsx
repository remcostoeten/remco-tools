
import React from 'react';
import DownloadCV from './pdf';
import { Button, ReadMore } from '../core/buttons/Buttons';
import FramerMagnetic from '../effects/framer';

export default function IntroButtons() {
    return (
        <>
            <FramerMagnetic>
                <ReadMore
                    href="/dashboard"
                    text="Go to dashboard"
                    showLeftArrow={false}
                    customClassName="btn--semi-rounded"
                    showRightArrow={false}
                />
            </FramerMagnetic>
            <DownloadCV />
        </>
    );
}
