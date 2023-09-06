"use client"

import React, { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

import { signUp } from "@/lib/firebase"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"

export default function RegisterPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleForm = async (event: React.FormEvent) => {
    event.preventDefault()

    const { result, error } = await signUp(name, email, password)

    if (error) {
      toast({
        title: "Registration failed!",
      })
      return console.log(error)
    }

    toast({
      title: "Registration successful!",
    })

    console.log(result)
    return router.push("/dashboard")
  }

  return (
    <div className="container grid h-screen w-screen flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
      <Link href="/login">Login</Link>
      <div className="hidden h-full bg-muted lg:block" />
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Create an account
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your email below to create your account
            </p>
          </div>
          <form className="flex flex-col gap-2">
            <Label className="sr-only" htmlFor="name">
              Name
            </Label>
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
            <button onClick={handleForm} type="submit">
              Sign up
            </button>
          </form>
          <p
            className="px-8 text           
-center text-sm text-muted-foreground"
          >
            By clicking continue, you agree to our{" "}
            <Link
              href="/terms"
              className="hover:text-brand underline underline-offset-4"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="hover:text-brand underline underline-offset-4"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
