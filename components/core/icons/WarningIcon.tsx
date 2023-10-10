import React from "react";

type InProgressIconProps = {
    w?: string;
    h?: string;
    fill?: string;
}

export default function WarningIcon({ w,h,fill }: InProgressIconProps) {
    return <><svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 100 125">
    <path d="M18 91.4h63.8c10.5 0 17.1-11.5 11.9-20.5l-32-55.4c-5.2-9.2-18.4-9.2-23.6 0l-32 55.4C1 80 7.5 91.4 18 91.4zm32-12.3c-2.8 0-5.1-2.3-5.1-5.1s2.3-5.1 5.1-5.1 5.1 2.3 5 5.2c.1 2.7-2.3 5-5 5zm-1.3-46c2.4-.6 4.9.6 5.9 2.9.3.8.5 1.6.5 2.5-.1 2.5-.3 5.1-.5 7.6-.2 3.9-.5 7.9-.7 11.8-.1 1.3-.1 2.4-.1 3.7-.1 2.1-1.7 3.7-3.8 3.7-2.1 0-3.7-1.5-3.8-3.6-.3-6.1-.7-12.2-1-18.3-.1-1.6-.2-3.2-.3-4.9-.1-2.5 1.4-4.7 3.8-5.4z"></path>
    <text
      y="115"
      fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
      fontSize="5"
      fontWeight="bold"
    >
      Created by Gregor Cresnar
    </text>
  
  </svg></>;
}
