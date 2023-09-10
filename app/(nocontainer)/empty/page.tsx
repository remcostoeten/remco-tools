import PageLoader from '@/components/core/PageLoader';
import { Separator } from '@radix-ui/react-select';
import { Loader2 } from 'lucide-react';
import React from 'react';

export default function Page() {
  return (
    <>
      <div className="framer-1413v1x">
        <div
          className="framer-ei6scr"
          data-framer-name="Ideation to Implementation"
          style={{
            outline: 'none',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            flexShrink: 0,
            transform: 'none',
          }}
          data-framer-component-type="RichTextContainer"
        >
          <p
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '50px',
              fontWeight: 600,
              lineHeight: '54px',
              textAlign: 'center',
              color: 'rgb(255, 255, 255)',
            }}
            className="framer-text"
          >
            <span
              data-text-fill="true"
              style={{
                backgroundImage:
                  'radial-gradient(54.4% 50% at 50% 50%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.5) 100%)',
              }}
              className="framer-text"
            >
              Hello!
            </span>
          </p>
        </div>
        <div
          className="framer-114mnb6"
          data-framer-name="15 YEARS OF EXPERIENCE"
          style={{
            outline: 'none',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            flexShrink: 0,
            transform: 'none',
          }}
          data-framer-component-type="RichTextContainer"
        >
          <p
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '28px',
              fontWeight: 600,
              lineHeight: '50px',
              textAlign: 'center',
            }}
            className="framer-text"
          >
            <span
              data-text-fill="true"
              style={{
                backgroundImage:
                  'linear-gradient(90deg, var(--token-95cb6b62-8529-4fbb-852f-80715463fa28, rgb(255, 56, 83)) 0%, var(--token-bc5dbd43-19d2-4b05-915d-01b76c8a2254, rgb(255, 210, 46)) 100%)',
              }}
              className="framer-text"
            >
              I'm Hunter Hastings
            </span>
          </p>
        </div>
      </div>

      <Separator/>

              <Loader2/>
              <PageLoader/> 
    </>
  );
}
