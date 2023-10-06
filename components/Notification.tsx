'use client';
import { useState } from "react";
import InProgressIcon from "./core/icons/InProgressIcon";
import NotificationWrapper from "./NotificationWrapper";

type NotificationProps = {
  text?: string,
  subtext?: string,
  children?: React.ReactNode
}

export default function Notification({ text, subtext, children }: NotificationProps) {
  const [isHidden, setIsHidden] = useState(false);

  const handleClose = () => {
    setIsHidden(true);
  }

  return (
    <NotificationWrapper
      isHidden={isHidden}
      onClose={handleClose}
      style={{ opacity: isHidden ? 0 : 1, scale: isHidden ? 0 : 1 }}
    >
      {children}
      <div className="toast__title">
        {text}
        <span className="toast__alternate-title">
          {subtext}
        </span>
      </div>
    </NotificationWrapper>
  );
}
