"use client"
import { useEffect, useState } from 'react';
import { ToastTitle } from '@/components/ui/toast';

interface ToasterProps {
  icon?: React.ReactNode;
  className?: string;
  text: string;
  subtext?: string;
  variant?: 'default' | 'success' | 'warning';
}

export function Toaster({
  icon,
  className,
  text,
  subtext,
  variant = 'default',
}: ToasterProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(
    () => JSON.parse(localStorage.getItem('toastClosed') || 'false')
  );

  useEffect(() => {
    if (!isClosed) {
      setTimeout(() => {
        setIsVisible(true);
      }, 3000);

      setTimeout(() => {
        setIsVisible(false);
      }, 80050);
    }
  }, [isClosed]);

  useEffect(() => {
    if (isClosed) {
      localStorage.setItem('toastClosed', JSON.stringify(true));
    }
  }, [isClosed]);

  const handleClose = () => {
    setIsVisible(false);
    setIsClosed(true);
  };

  let variantClass = '';

  if (variant === 'success') {
    variantClass = 'toast--success';
  } else if (variant === 'warning') {
    variantClass = 'toast--warning';
  }

  return (
    <div className={`toast ${variantClass} ${className}`} style={{
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
      transition: 'opacity transform 1s cubic-bezier(0.25, 1, 0.5, 1)',
      marginTop: '1rem',
    }}>
      <span className='block translate-y-1'>
        {icon}
      </span>
      <div className="toast__inner">
        <ToastTitle>
          {text}
        </ToastTitle>
        <span className="toast__alternate-title">
          {subtext}
        </span>
      </div>
      <div className="toast__close" onClick={handleClose}>
        Close
      </div>
    </div>
  );
}

// Usage


// <Toaster
// variant="warning"
// text="This is not a production site"
// subtext="Strictly a testing site"
// icon={<WarningIcon fill="white"
//     w="24"
//     h="24" />}

// />  <Toaster
// variant="success"
// text="This is not a production site"
// subtext="Strictly a testing site"
// icon={<SuccesIcon fill="white" w="24" h="24" />}
// />