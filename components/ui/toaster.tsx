"use client"
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

  return (
    <ToastProvider>
      {toasts.map(function ({ title, description, action }) {
        return (
          <div className={`toast temp ${className || ''}`}>
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
          <Particles particleCount={100
          }/></div>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}