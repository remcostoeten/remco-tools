import { toast } from 'sonner';
import { initializeApp } from 'firebase/app';
import {
    createUserWithEmailAndPassword,
    getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup,
    updateProfile
} from 'firebase/auth';
import { collection, deleteDoc, doc, getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { useRouter } from 'next/navigation';
let storage: ReturnType<typeof getStorage> | undefined;

const firebaseConfig = {
    apiKey: "AIzaSyC6eh7Lqnb-LYKVsuXJuStbMe08xZjxoQs",
    authDomain: "test-ce067.firebaseapp.com",
    projectId: "test-ce067",
    storageBucket: "test-ce067.appspot.com",
    messagingSenderId: "8187414200",
    appId: "1:8187414200:web:8af3ba670436512f5c164d"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);
export const getStorageInstance = () => {
    if (!storage) {
        storage = getStorage(app);
    }
    return storage;
};

const SignInWithGoogle = () => {
    const router = useRouter();

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(`User ${user.displayName} logged in with Google.`);
                toast.success(`Welcome, ${user.displayName}!`);

                router.push('/productivity-tools');
            })
            .catch((error) => {
                console.error(error);
                toast.error('Error logging in with Google.');
            });
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


export { auth, db, storage, createUserWithEmailAndPassword, signInWithEmailAndPassword };
