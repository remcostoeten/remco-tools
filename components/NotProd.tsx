'use client';
import { toast } from 'sonner';

export default function NotProd() {
  toast('My toast', {
    description: 'This is not a production site.',
  });

  return (
    <></>
  )
}
