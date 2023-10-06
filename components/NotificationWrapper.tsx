'use client'; import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface ToastProps {
  title?: string;
  description?: string;
  action?: React.ReactNode;
  icon?: React.ReactNode;
  onClose?: () => void;
  children?: React.ReactNode;
  isHidden?: boolean;
  style?: React.CSSProperties;
}

export default function NotificationWrapper({ title, description, action, icon, onClose, children, ...rest }: ToastProps) {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsOpen(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    if (onClose) {
      onClose();
    }
  };

  const variants = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    exit: { y: 100, opacity: 0 },
  };

  return (
    <motion.div
      className='toast tempw'
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onAnimationComplete={handleClose}
    >
      {icon && <div className="toast__icon">{icon}</div>}
      <div className="toast__content">
        {title && <div className="toast__title">{title}</div>}
        {description && <div className="toast__description">{description}</div>}
      </div>
      {children}
      {action && <div className="toast__action">{action}</div>}
    </motion.div>
  );
};