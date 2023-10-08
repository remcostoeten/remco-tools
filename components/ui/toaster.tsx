"use client"
import { useEffect, useState } from 'react';
import { delay, motion, useAnimation } from 'framer-motion';
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"
import Particles from "../Part";

interface ToasterProps {
  icon?: React.ReactNode;
  className?: string;
}

export function Toaster({ icon, className }: ToasterProps) {
  const { toasts, dismiss } = useToast();
  const toastControls = useAnimation();
  const [toastOpacity, setToastOpacity] = useState(1); // Add opacity state

  useEffect(() => {
    const hideToaster = async () => {
      await toastControls.start({ opacity: 0, y: -50 });
      await toastControls.start({ height: 0, margin: 0, padding: 0 });
    };
    const timeout = setTimeout(hideToaster, 3000);
    return () => clearTimeout(timeout);
  }, [toastControls]);


  const handleToastClick = () => {
    setToastOpacity(0);
  };

  return (
    <ToastProvider>
      <ToastViewport />
      {toasts.map(function ({ id, title, description, action }) {
        return (
          <motion.div
            key={id}
            className={`toast temp ${className || ''}`}
            initial={{ opacity: 0, y: 10 , scale: 0.95}}
            animate={{ opacity: 1, y: 0, scale:1 }}  
            exit={{ height: 0, margin: 0, y: 200, padding: 0 }}
            transition={{ duration: 2.5, delay: 3, stiffness: 5, type: 'tween '}}
            onClick={handleToastClick} 
          >
            {icon}
            <div className="toast__inner">
           {title && (
                <ToastTitle>
                  {title}
                  {description && (
                    <div className="toast__alternate-title">
                      <ToastDescription>{description}</ToastDescription>
                    </div>
                  )}
                </ToastTitle>
              )}
            </div>
            <div className="toast__close">
              
            </div>
            <Particles particleCount={100} />
          </motion.div>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
