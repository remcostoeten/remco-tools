"use client"
import { useEffect } from 'react';
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
  const { toasts } = useToast();
  const toastControls = useAnimation();

  useEffect(() => {
    const hideToaster = async () => {
      await toastControls.start({ opacity: 0, y: -50 });
      await toastControls.start({ height: 0, margin: 0, padding: 0 });
    };
    const timeout = setTimeout(hideToaster, 3000);
    return () => clearTimeout(timeout);
  }, [toastControls]);

  return (
    <ToastProvider>
      {toasts.map(function ({ title, description, action }) {
        return (
          <motion.div
            className={`toast temp ${className || ''}`}
            initial={{ opacity: 1, y: 0 }}
            animate={toastControls}
            exit={{ height: 0, margin: 0, y: 200, padding: 0 }}
            transition={{ duration: 0.5, delay: 3, tween: 'easeOut' }}
          >
            <div className="gradient"></div>
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
            <div className="toast__close">{action}</div>
            <ToastClose />
            <Particles particleCount={100} />
          </motion.div>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}