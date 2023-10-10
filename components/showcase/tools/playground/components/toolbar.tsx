import React from 'react';
import { presets } from '../data/presets';
import { CodeViewer } from './code-viewer';
import { PresetActions } from './preset-actions';
import { PresetSave } from './preset-save';
import { PresetSelector } from './preset-selector';
import { PresetShare } from './preset-share';

export default function Toolbar() {
    return (
        <>
            {' '}
            <div className='ml-auto my-4 flex w-full space-x-2 sm:justify-end'>
                <PresetSelector presets={presets} />
                <PresetSave />
                <div className='hidden space-x-2 md:flex'>
                    <CodeViewer />
                    <PresetShare />
                </div>
                <PresetActions />
            </div>
        </>
    );
}
