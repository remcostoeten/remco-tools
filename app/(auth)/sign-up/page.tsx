

"use client"

import {
    browserLocalPersistence, GoogleAuthProvider, onAuthStateChanged,
    setPersistence,
    signInWithEmailAndPassword,
    signInWithPopup
} from "firebase/auth"
import { motion } from "framer-motion"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

import RemcoLogoIcon from "@/components/core/icons/remcostoeten-logo-icon"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"
import { auth } from "@/utils/firebase"
import { Checkbox } from "@/components/ui/checkbox"
import { GlowButton } from "@/components/core/buttons/CustomButtons"
import IntroButtons from "@/components/home/IntroButtons"
import { ReadMore } from "@/components/core/buttons/Buttons"

export default function LoginPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [isGoogleLoading, setIsGoogleLoading] = useState(false)
    const [rememberEmail, setRememberEmail] = useState(false)
    const [user, setUser] = useState(null)
    const router = useRouter()
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user as any);

        });

        return () => unsubscribe();
    }, []);

    //
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

                router.push('/');
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
        <div className="container relative flex flex-col items-center justify-center h-screen mt-32 bg-theme -translate-y-36">
            <Link href="/">
                <motion.div className="absolute left-0 flex items-center pl-8 align-middle top-22" initial={{ opacity: 0 }} animate={{ opacity: 1 }} whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }}>
                    <motion.div className="flex items-center pr-2" whileHover={{ x: 2, filter: 'blur(.2px)' }}>
                        <span className="pl-4 font-extralight">go back</span>
                    </motion.div>
                </motion.div>
            </Link>

            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                <div className="flex flex-col space-y-2 text-center">
                    <div className="mx-auto">
                        <RemcoLogoIcon fill={"white"} />
                    </div>
                    <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
                    <p className="text-sm text-muted-foreground">Enter your email and password to sign in to your account</p>
                </div>
                <form onSubmit={handleClick}>
                    <div className="grid gap-2">
                        <div className="grid gap-1">
                            <Label className="sr-only" htmlFor="email">
                                Email
                            </Label>
                            <Input id="email" placeholder="name@example.com" type="email" autoCapitalize="none" autoComplete="email" autoCorrect="off" onChange={(e) => setEmail(e.target.value)} value={email} />

                            <Label className="sr-only" htmlFor="password">
                                Password
                            </Label>
                            <Input id="password" placeholder="Password" type="password" autoCapitalize="none" autoComplete="current-password" autoCorrect="off" onChange={(e) => setPassword(e.target.value)} value={password} />

                            <div className="flex items-center mt-2 mb-2">
                                <Checkbox checked={rememberEmail} onChange={() => setRememberEmail(!rememberEmail)}>
                                    <Label className="ml-2">Remember email</Label>
                                </Checkbox>
                            </div>
                        </div>

                        <ReadMore customClassName="flex justify-center w-full mx-auto text-center">
                            Sign In with Email
                        </ReadMore>

                    </div>
                </form>
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="px-2 bg-background text-muted-foreground">Or continue with</span>
                    </div>
                </div>
                <ReadMore text=" Google" customClassName="flex justify-center w-full mx-auto scale-75 text-center" onClick={signInWithGoogle} disabled={isLoading || isGoogleLoading} />
                {isGoogleLoading ? (
                    <>Signing In...</>
                ) : (
                    <>
                        <div className="flex items-center justify-center align-center">google </div>
                    </>
                )}
                <p className="px-8 mx-auto text-sm text-center text-muted-foreground">
                    <Link href="/register" className="underline hover:text-brand underline-offset-4">
                        Don&apos;t have an account? Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
}
