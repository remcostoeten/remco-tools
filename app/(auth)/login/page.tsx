'use client';
import React, { useState } from 'react';
import { browserLocalPersistence, setPersistence, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/utils/firebase';
import { toast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false)
  const [rememberEmail, setRememberEmail] = useState(false)
  const router = useRouter();
  const handleClick = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsLoading(true);

    setPersistence(auth, browserLocalPersistence)
      .then(() => {
        return signInWithEmailAndPassword(auth, email, password);
      })
      .then((userCredential) => {
        toast({
          title: 'Login successful.',
          description: 'You have successfully signed in.',
        });
        router.push('/dashboard');

        const user = userCredential.user;
        console.log(`User ${user.email} logged in.`);

        if (rememberEmail) {
          localStorage.setItem('email', email);
          console.log('remember email');
        } else {
          localStorage.removeItem('email');
        }
      });
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleClick}>
        <label>
          Email:
          <input type="email" value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}