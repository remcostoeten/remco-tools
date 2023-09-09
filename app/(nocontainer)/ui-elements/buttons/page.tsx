import ExpandButton from '@/components/core/ExpandableButton';
import React, { ReactNode } from 'react';

interface ExpandButtonProps {
  beforeContent: ReactNode;
  children: ReactNode;
}

export default function Page() {
  return (
    <>
      <div className='flex gap-4 flex-col'>
        <ExpandButton beforeContent='...'>Expand button</ExpandButton>
        <ExpandButton beforeContent='+'>Another content</ExpandButton>
        <ExpandButton
          beforeContent={
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 24 24'
              fill='currentColor'
              style={{ mixBlendMode: 'difference' }}
            >
              <path d='M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z' />
            </svg>
          }
        >
          Click me!
        </ExpandButton>
      </div>
    </>
  );
}
