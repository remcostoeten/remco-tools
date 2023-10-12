import React from 'react';
import LogoIcon from '../core/icons/remcostoeten-logo-icon';
import { AltButtonTextOutside } from '../core/buttons/Buttons';
import { LeftAsideProps } from '@/utils/types';
import { DashmenuMap, DashmenuMapSub, DashmenuMapSubSub } from '@/config/data';

export function LeftAside({ }: LeftAsideProps) {
  return (
    <div className="text-cream">
      <div className="logo-section">
        <LogoIcon fill="#92C52A" />
      </div>
      {DashmenuMap.map((section, index) => (
        <div key={index} className="sub">
          <ul className="space-y-1 sub">
            {section.items.map((item: { text?: string; icon?: React.ReactNode; title?: string }) => (
              <li key={item.text}>
                <AltButtonTextOutside icon={item.icon}>
                  {item.text}
                </AltButtonTextOutside>
              </li>
            ))}
          </ul>
        </div>
      ))}
      {DashmenuMapSub.map((section, index) => (
        <div key={index} className="sub">
          <ul className="space-y-1 sub-sub">
          <h2 className="title pl-[20px]">Settings</h2>
            {section.items.map((item: { text?: string; icon?: React.ReactNode; title?: string }) => (
              <li key={item.text}>
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      ))}
         {DashmenuMapSubSub.map((section, index) => (
        <div key={index} className="sub">
          <ul className="space-y-1 sub-sub">
          <h2 className="title pl-[20px]">Settings</h2>
            {section.items.map((item: { text?: string; icon?: React.ReactNode; title?: string }) => (
              <li key={item.text}>
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
