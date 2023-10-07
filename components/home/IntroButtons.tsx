
import React from 'react';
import DownloadCV from './pdf';
import { Button, ReadMore } from '../core/buttons/Buttons';
import FramerMagnetic from '../effects/framer';

export default function IntroButtons() {
    return (
        <>
            <FramerMagnetic>
                <ReadMore
                    text="Get in contact"
                    showLeftArrow={false}
                    customClassName="btn--semi-rounded" // Updated to "btn--semi-rounded"
                    showRightArrow={false}
                    hoverText="say hiiiiiiiii"
                />
            </FramerMagnetic>
            <DownloadCV />
        </>
    );
}
