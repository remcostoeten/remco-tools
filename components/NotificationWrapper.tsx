'use client';
import { useEffect, useState } from "react";

type ToastProps = {
  isHidden: boolean,
  onClose: () => void,
  children: React.ReactNode,
  style: any 
}

export default function NotificationWrapper({ isHidden, onClose, children, style }: ToastProps) {
  const [isClosed, setIsClosed] = useState(true);

  useEffect(() => {
    // Check if localStorage is available before using it
    if (typeof localStorage !== 'undefined') {
      setIsClosed(localStorage.getItem("hideMessage") === "false" ? true : false);
    }
  }, []);

  useEffect(() => {
    // Check if localStorage is available before using it
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem("hideMessage", isClosed.toString());
    }
  }, [isClosed]);

  const hideMessage = () => {
    setIsClosed(true);
    setTimeout(() => {
      onClose();
    }, 1000);
  }

  const SPACING = '24px';

  const position = {
    leftBottom: {
      left: SPACING,
      bottom: SPACING,
    },
    leftTop: {
      left: SPACING,
      top: SPACING,
    },
    rightBottom: {
      right: SPACING,
      bottom: SPACING,
    },
    rightTop: {
      right: SPACING,
      top: SPACING,
    }
  }
  return (
    <>
      {isClosed ? null : (
        <div
          style={{ ...position.leftBottom, ...style }}           className={`toast ${isHidden ? 'hide' : ''}`}
        >
          <div className="toast__inner">
            {children}
            <div className="toast__close" onClick={hideMessage}>
              Close
            </div>
          </div>
        </div>
      )}
    </>
  );
}
