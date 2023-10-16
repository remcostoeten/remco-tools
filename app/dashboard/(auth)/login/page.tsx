'use client';
import MiniSpinner from '@/components/effects/MiniSpinner';
import Sprinkle from '@/components/effects/Sprinkle';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { auth } from '@/utils/firebase';
import {
    browserLocalPersistence,
    GoogleAuthProvider,
    onAuthStateChanged,
    setPersistence,
    signInWithEmailAndPassword,
    signInWithPopup,
} from 'firebase/auth';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);
    const [isGoogleLoading, setIsGoogleLoading] = useState(false);
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
        });

        if (user) {
            router.push('/dashboard'); // Redirect to dashboard if user is already logged in
        }

        return () => unsubscribe();
    }, [router, user]);


    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();

        setIsGoogleLoading(true);

        signInWithPopup(auth, provider)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(`User ${user.displayName} logged in with Google.`);

                router.push('/dashboard');
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                setIsGoogleLoading(false);
            });
    };

    const handleClick = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setIsGoogleLoading(false);
        const [email, password] = (e.target as HTMLFormElement).elements;
        const emailValue = (email as HTMLInputElement).value;
        const passwordValue = (password as HTMLInputElement).value;

        setIsLoading(true);

        setPersistence(auth, browserLocalPersistence)
            .then(() => {
                return signInWithEmailAndPassword(auth, emailValue, passwordValue);
            })
            .then((userCredential) => {
                toast.success('Login successful.');
                router.push('/dashboard');

                const user = userCredential.user;
                console.log(`User ${user.email} logged in.`);
            })
            .catch((error) => {
                console.error(error);

                toast.error('Login failed. Please try again.');
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <>
            <div className='w-full p-8 mt-4 grid place-items-center'>
                <h1 className='text-2xl font-semibold tracking-tight'>Welcome back</h1>
                <p className='text-sm text-muted-foreground'>
                    Enter your email and password to sign in to your account
                </p>
            </div>
            <form onSubmit={handleClick} className='mt-8'>
                <div className='grid gap-2'>
                    <div className='grid gap-1'>
                        <Label className='sr-only' htmlFor='email'>
                            Email
                        </Label>
                        <Input
                            id='email'
                            placeholder='name@example.com'
                            type='email'
                            autoCapitalize='none'
                            autoComplete='email'
                            autoCorrect='off'
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />

                        <Label className='sr-only' htmlFor='password'>
                            Password
                        </Label>
                        <Input
                            id='password'
                            placeholder='Password'
                            type='password'
                            autoCapitalize='none'
                            autoComplete='current-password'
                            autoCorrect='off'
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                    </div>

                    <button
                        className='cta-sprinkle flex justify-center  mx-auto text-center'
                        onClick={() => setIsLoading(true)}
                    >
                        {isLoading ? <MiniSpinner absolute /> : null}
                        <Sprinkle className='py-2 w-16'>Sign in</Sprinkle>
                    </button>

                </div>
            </form>
            <div className='relative mt-8'>
                <div className='relative flex justify-center text-xs uppercase'>
                    <span className='px-2 bg-background text-muted-foreground'>
                        Or continue with
                    </span>
                </div>
            </div>
            <div className='flex flex-col gap-2 mt-4'>
                {isGoogleLoading ? <MiniSpinner /> : null}
                <button
                    className='cta-sprinkle flex justify-center mx-auto text-center'
                    onClick={signInWithGoogle}
                >
                    <Sprinkle className='py-2 w-16'>Google</Sprinkle>
                </button>
            </div>
        </>
    );
}