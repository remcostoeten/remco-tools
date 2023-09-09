import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth';
import { collection, deleteDoc, doc, getFirestore } from 'firebase/firestore';
import { FC, useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from '@/components/ui/use-toast';

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

const SignInWithGoogle = () => {
  const router = useRouter();

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();

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
  };

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

export const deleteItem = async (itemId: string) => {
  try {
    // Assuming you have a collection named 'tasks' in Firestore
    const taskRef = doc(collection(db, 'tasks'), itemId);

    // Delete the document from Firestore
    await deleteDoc(taskRef);

    // You can also update your local data source here, if needed
    // For example, remove the item from your DisplayTasks array
    // const updatedDisplayTasks = DisplayTasks.filter((task) => task.id !== itemId);
    // Update your state or data source with the updatedDisplayTasks

    // Add any additional logic you need after successful deletion
    console.log(`Item with ID ${itemId} deleted successfully.`);
  } catch (error) {
    // Handle any errors that occur during deletion
    console.error(`Error deleting item with ID ${itemId}:`, error);
  }
};

export {
  auth,
  db,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
};
