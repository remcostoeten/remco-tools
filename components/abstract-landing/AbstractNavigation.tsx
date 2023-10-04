import React from "react";
import s from './styles/abstract.module.scss';
import { ArrowLeft, ArrowRight } from "lucide-react";


type AbstractNavigationProps = {
  children?: HTMLElement[];
  navigateBack?: () => void;
  navigateForward?: () => void;
};

export default function AbstractNavigation({ navigateBack, navigateForward }: AbstractNavigationProps) {
  const navigationItems = [
    {
      name: "python script gen",
      href: "python-script-generator",
    },
    {
      name: "HTML to JSX",
      href: "/html-to-isx",
    },
    {
      name: "Geolocation",
      href: "/geolocation",
    },
    {
      name: "Income",
      href: "/income",
    }
  ];

  return (
    <nav className="h-[5vh] flex items-center justify-between">
      <ul className="flex gap-1">
        {navigationItems.map((item) => (
          <li key={item.href} className={`${s.pill} ${s['pill']}`}>
            <a href={item.href}>{item.name}</a>
          </li>
        ))}
      </ul>

      <div className="navigation flex pr-4 gap-2 items-center">
        <button onClick={navigateBack} className="cursor-pointer">
          <ArrowLeft size={24} />
        </button>
        <button onClick={navigateForward} className="cursor-pointer">
          <ArrowRight size={24} />
        </button>
      </div>
    </nav>
  )
}