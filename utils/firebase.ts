import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { FC, useState } from 'react';
import { useRouter } from 'next/router';
import { toast } from '@/components/ui/use-toast';
import { Sign } from 'crypto';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

const SignInWithGoogle: FC = () => {
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const router = useRouter();

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();

    setIsGoogleLoading(true);

    signInWithPopup(auth, provider)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(`User ${user.displayName} logged in with Google.`);

        toast({
          title: 'Google login successful.',
          description: `Welcome, ${user.displayName}!`,
        });

        router.push('/productivity-tools');
      })
      .catch((error) => {
        console.error(error);

        toast({
          title: 'Google login failed.',
          description: 'Failed to sign in with Google. Please try again.',
          variant: 'destructive',
        });
      })
      .finally(() => {
        setIsGoogleLoading(false);
      });
  };

  return <button onClick={signInWithGoogle} disabled={isGoogleLoading}>Sign In with Google</button>;
};

export default SignInWithGoogle;

export const signUp = async (name: string, email: string, password: string) => {
  let result = null;
  let error = null;
  try {
    result = await createUserWithEmailAndPassword(auth, email, password);
    if (result?.user) {
      await updateProfile(result.user, {
        displayName: name,
      });
    }
  } catch (e) {
    error = e;
  }

  return { result, error };
};

export {
  auth,
  db,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
};
