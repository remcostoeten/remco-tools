'use client';
import React, { useEffect } from "react";
import InProgressIcon from "./core/icons/InProgressIcon";
import NotificationWrapper from "./NotificationWrapper";
import { toast, useToast } from "./ui/use-toast";

type NotificationProps = {
  text?: string;
  subtext?: string;
  children?: React.ReactNode;
};

export default function Notification({ text, subtext, children }: NotificationProps) {
  const {  dismiss } = useToast(); 
  const [isOpen, setIsOpen] = React.useState(true);

  useEffect(() => {
    const { id } = toast({
      title: text,
      description: subtext,
      icon: <InProgressIcon />,
    });
    
    const handleClose = () => {
      dismiss(id);
      setIsOpen(false);
    };
  }, []);

  return (
 <></>
  );
}
