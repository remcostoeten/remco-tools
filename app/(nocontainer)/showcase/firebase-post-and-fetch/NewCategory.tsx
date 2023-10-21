'use client'
import React, { useState } from "react"
import { addDoc, collection } from "firebase/firestore"
import { db } from "@/utils/firebase"
import { Input } from "@/components/ui/input"
import { ReadMore } from "@/components/core/buttons/Buttons"
import { toast } from 'sonner';
export function NewCategory() 1{
    const [categoryName, setCategoryName] = useState("")

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            const newCategory = {
                name: categoryName,
            }
            await addDoc(collection(db, "categories"), newCategory)
            setCategoryName("")
            toast.success("Category added!")
        } catch (error) {
            toast.error("Something went wrong!")
            console.error(error)
        }
    }

    return (
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
            <Input value={categoryName} onChange={e => setCategoryName(e.target.value)} placeholder="Category Name" />
            <ReadMore text='Add Category' />
        </form>
    )
}
