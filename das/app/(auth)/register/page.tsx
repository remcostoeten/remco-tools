'use client';
import MiniSpinner from '@/components/effects/MiniSpinner';
import Sprinkle from '@/components/effects/Sprinkle';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { auth } from '@/utils/firebase';
import {
    browserLocalPersistence,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    setPersistence, signInWithPopup,
    updateProfile
} from 'firebase/auth';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

export default function LoginPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);
    const [isGoogleLoading, setIsGoogleLoading] = useState(false);
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });

        return () => unsubscribe();
    }, []);

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();

        setIsGoogleLoading(true);

        signInWithPopup(auth, provider)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(`User ${user.displayName} logged in with Google.`);

                toast.success("Welcome aboard" + user.displayName + "!");

                router.push('/');
            })
            .catch((error) => {
                console.error(error);
                toast.error("Failed to sign in with Google. Please try again.");
            })
            .finally(() => {
                setIsGoogleLoading(false);
            });
    };

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        const [nameInput, emailInput, passwordInput] = (e.target as HTMLFormElement).elements;
        const nameValue = (nameInput as HTMLInputElement).value;
        const emailValue = (emailInput as HTMLInputElement).value;
        const passwordValue = (passwordInput as HTMLInputElement).value;

        try {
            await setPersistence(auth, browserLocalPersistence);

            const userCredential = await createUserWithEmailAndPassword(auth, emailValue, passwordValue);

            await updateProfile(userCredential.user, { displayName: nameValue });
            toast.success("Welcome aboard" + user.displayName + "!");

            router.push('/');
        } catch (error) {
            console.error(error);
            toast.error("Failed to register. Please try different credentials.");
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <>
            <div className='w-full p-8 mt-4 grid place-items-center'>
                <h1 className='text-2xl font-semibold tracking-tight'>Welcome back</h1>
                <p className='text-sm text-muted-foreground'>
                    Enter your email and password to sign in to your account
                </p>
            </div>
            <form onSubmit={handleRegister} className='mt-8'>
                <div className='grid gap-2'>
                    <div className='grid gap-1'>
                        <Input
                            id="name"
                            placeholder="Jan Jansma"
                            type="name"
                            autoCapitalize="none"
                            autoComplete="name"
                            autoCorrect="off"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />

                        <Label className="sr-only" htmlFor="email">
                            Email
                        </Label>
                        <Input
                            id="email"
                            placeholder="name@example.com"
                            type="email"
                            autoCapitalize="none"
                            autoComplete="email"
                            autoCorrect="off"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />

                        <Label className="sr-only" htmlFor="password">
                            Password
                        </Label>
                        <Input
                            id="password"
                            placeholder="Password"
                            type="password"
                            autoCapitalize="none"
                            autoComplete="current-password"
                            autoCorrect="off"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                    </div>

                    <button
                        className='cta-sprinkle flex justify-center  mx-auto text-center'
                        onClick={() => setIsLoading(true)}
                    >
                        <Sprinkle className='py-2 w-16'>
                            Sign in</Sprinkle>
                    </button>

                    {isLoading ? <MiniSpinner /> : null}
                </div>
            </form >
            <div className='relative mt-8'>
                <div className='relative flex justify-center text-xs uppercase'>
                    <span className='px-2 bg-background text-muted-foreground'>
                        Or continue with
                    </span>
                </div>
            </div>
            <button
                className='cta cta--semi-rounded animbtn flex justify-center w-full mx-auto scale-75 text-center sm:w-min'
                onClick={signInWithGoogle}
            >google</button>
            {isGoogleLoading ? <MiniSpinner /> : null}
            <p className='px-8 flex smx-auto mt-8 text-sm text-center text-muted-foreground'>
                <Link href='/register' className='text-center  mx-auto underline hover:text-brand underline-offset-4'>
                    Don&apos;t have an account? Sign Up
                </Link>
            </p>
        </>
    );
}