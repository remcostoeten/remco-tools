import Link from "next/link";
import Image from "next/image";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import DashboardIcon from '@mui/icons-material/Dashboard';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeSwitcher from "./DarkModeSwitcher";
import DropdownMessage from "./DropdownMessage";
import DropdownNotification from "./DropdownNotification";
import DropdownUser from "./DropdownUser";
import { useState } from "react";

interface HeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (sidebarOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = (props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <header className="items-center justify-between  border-b-[color:var(--black-10,rgba(255,255,255,0.10))] flex gap-5 px-5 border-b border-solid max-md:flex-wrap p-4">
        <div className="items-start self-stretch flex justify-between gap-5">
          <div className="items-start content-center flex-wrap self-stretch flex justify-between gap-4 rounded-lg">
            <DashboardIcon />
            <StarBorderIcon />
          </div>
          <div className="items-start content-center flex-wrap self-stretch flex gap-4 rounded-lg max-md:justify-center">
            <div className="self-stretch text-white text-opacity-40 text-center text-sm leading-[142.86%]">
              Dashboards
            </div>
            <div className="self-stretch text-white text-opacity-20 text-sm leading-[142.86%]">/</div>
            <div className="self-stretch text-white text-center text-sm leading-[142.86%]">Default</div>
          </div>
        </div>
        <div className="hidden sm:flex  h-1/3">
          <form action="https://formbold.com/s/unique_form_id" method="POST">
            <div className="relative">
              <button className="absolute left-0 top-1/2 -translate-y-1/2">
                <svg
                  className="fill-body hover:fill-primary dark:fill-bodydark dark:hover:fill-primary"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.16666 3.33332C5.945 3.33332 3.33332 5.945 3.33332 9.16666C3.33332 12.3883 5.945 15 9.16666 15C12.3883 15 15 12.3883 15 9.16666C15 5.945 12.3883 3.33332 9.16666 3.33332ZM1.66666 9.16666C1.66666 5.02452 5.02452 1.66666 9.16666 1.66666C13.3088 1.66666 16.6667 5.02452 16.6667 9.16666C16.6667 13.3088 13.3088 16.6667 9.16666 16.6667C5.02452 16.6667 1.66666 13.3088 1.66666 9.16666Z"
                    fill=""
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.2857 13.2857C13.6112 12.9603 14.1388 12.9603 14.4642 13.2857L18.0892 16.9107C18.4147 17.2362 18.4147 17.7638 18.0892 18.0892C17.7638 18.4147 17.2362 18.4147 16.9107 18.0892L13.2857 14.4642C12.9603 14.1388 12.9603 13.6112 13.2857 13.2857Z"
                    fill=""
                  />
                </svg>
              </button>

              <input
                type="text"
                placeholder="Type to search..."
                className="w-full bg-transparent pl-9 pr-4 font-medium focus:outline-none xl:w-125"
              />
            </div>
          </form>
          <div className="flex items-center gap-3 2xsm:gap-7">
            <ul className="flex items-center gap-2 2xsm:gap-4">
              <DarkModeSwitcher />
              <DropdownNotification />
              <DropdownMessage />
            </ul>

            <DropdownUser />
          </div>
        </div>
      
      </header>

    </>
  );
};

export default Header;