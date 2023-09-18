import React from 'react';
import ArrowBtn from '../core/buttons/ArrowBtn';

export default function IntroButtons() {
    return (
        <>
            <ArrowBtn
                text='Click Me'
                anchor='#destination'
                onClick={() => console.log('Button clicked!')}
                className='custom-class'
                showParticles={true}
            />
        </>
    );
}
