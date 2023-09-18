import { Arrow } from '@radix-ui/react-popover';
import React from 'react';
import ArrowButton from '../core/buttons/ArrowBtn';
import ArrowBtn from '../core/buttons/ArrowBtn';

export default function IntroButtons() {
    const handleDownloadPdf = () => {
        window.open('/resume.pdf', '_blank');
    };

    return (
        <>
            <ArrowButton
                onClick={handleDownloadPdf} // Set the onClick handler to trigger PDF download
                hoverText='Download PDF' // Set hoverText to "Download PDF"
            >
                Show PDF
            </ArrowButton>{' '}
        </>
    );
}
