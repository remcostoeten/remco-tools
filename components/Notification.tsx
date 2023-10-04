'use client';
import { useState } from "react";
import InProgressIcon from "./core/icons/InProgressIcon";
import NotificationWrapper from "./NotificationWrapper";

type NotificationProps = {
  text?: string,
  subtext?: string,
}

export default function Notification({ text, subtext }: NotificationProps) {
  const [isHidden, setIsHidden] = useState(false);

  const handleClose = () => {
    setIsHidden(true);
  }




  return (
    <NotificationWrapper isHidden={isHidden} onClose={handleClose}>
      <InProgressIcon w='30' h='30' fill='white' />
      <div className="toast__title">
        {text}
        <span className="toast__alternate-title">
          {subtext}
        </span>
      </div>
    </NotificationWrapper>
  );
}