'use client';
import React, { memo } from 'react';
import LogoIcon from '../core/icons/remcostoeten-logo-icon';
import { AltButtonTextOutside } from '../core/buttons/Buttons';
import { DashmenuMap, DashmenuMapSub, DashmenuMapSubSub } from '@/config/data';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Pencil } from 'lucide-react';
import { useAuth } from '@/context/authContext';
import { auth, db } from '@/utils/firebase';
import { signOut } from 'firebase/auth';
import { PencilIcon } from '@heroicons/react/solid';
import  Sprinkle from '../effects/Sprinkle';

export default function LeftAside() {
  const currentRoute = usePathname().toLowerCase();
  const user = auth?.currentUser

  const loginMenuItem = () => {
    {
      user ? (
        <button className='cta' onClick={() => signOut(auth)}>
          Logout
        </button>
      ) : (
        <Link className='cta' href="/login">Login</Link>
      )
    }
  }


  return (
    <div className='flex flex-col justify-between h-screen'>
      <div className="text-cream mt-[50px] mb-[40px] flex flex-col">
        <div className="logo-section">
          <LogoIcon fill="#92C52A" />
        </div>
        {DashmenuMap.map((section, index) => (
          <div key={index} className="sub">
            <ul className="space-y-1 sub grandparent">
              {section.items.map((item: { text?: string; icon?: React.ReactNode; title?: string }, index: number) => {
                if (item.text) {
                  return (
                    <li key={item.text} className={currentRoute === `/${item.text.toLowerCase()}` ? "active" : ""}>
                      <AltButtonTextOutside icon={item.icon}>
                        <Link href={`dashboard/${item.text.toLowerCase()}`}>
                          {item.text}
                        </Link>
                      </AltButtonTextOutside>
                    </li>
                  );
                } else {
                  return null;
                }
              })}
            </ul>
          </div>
        ))}

        {DashmenuMapSub.map((section, index) => (
          <div key={index} className="sub ">
            <ul className="space-y-1 sub-sub parent">
              <h2 className="title pl-[10px]">Settings</h2>
              {section.items.map((item: { text?: string; icon?: React.ReactNode; title?: string }, index: number) => {
                if (item.text) {
                  return (
                    <li key={item.text} className={currentRoute === `/${item.text.toLowerCase()}` ? "active" : ""}>
                      <Link href={`dashboard/${item.text.toLowerCase()}`}>
                        {item.text}
                      </Link>
                    </li>
                  );
                } else {
                  return null;
                }
              })}
            </ul>
          </div>
        ))}
        {DashmenuMapSubSub.map((section, index) => (
          <div key={index} className="sub ">
            <ul className="space-y-1 sub-sub child ">
              <h2 className="title pl-[10px]">Settings</h2>
              {section.items.map((item: { text?: string; icon?: React.ReactNode; title?: string }, index: number) => {
                if (item.text) {
                  return (
                    <li key={item.text} className={currentRoute === `/${item.text.toLowerCase()}` ? "active" : ""}>
                      <Link href={`dashboard/${item.text.toLowerCase()}`}>
                        {item.text}
                      </Link>
                    </li>
                  );
                } else {
                  return null;
                }
              })}
            </ul>
          </div>
        ))}
      </div>
      <div className='footer flex flex-col justify-end gap-[24px]'>
        <div className='flex gap flex-col'>
          <h3>Got a question?</h3>
          <p className='text-xs leading-5'>Or just want to share some feedback? I'd be happy to hear. </p>
        </div>
        {user ? (
          <button className='cta' onClick={() => signOut(auth)}>
            <Pencil color='#8BB928' />
              <span>Logout</span>
          </button>
        ) : (
          <Link className='cta' href="/login">            <Pencil color='#8BB928' />
            <span>Login</span></Link>
        )}
        <Sprinkle t1='test' t2='test' t3='test' />
      </div>
    </div >
  );
}

