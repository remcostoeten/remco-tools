'use client';
import { toast } from 'sonner';

export default function NotProd() {

  toast('My toast', {
    className: 'my-classname',
    description: 'My dedwdwdwscription',
    duration: 5000,
  });
  return <></>;
}
