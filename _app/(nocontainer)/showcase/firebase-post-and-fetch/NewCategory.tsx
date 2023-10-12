'use client'
import React, { useState } from "react"
import { addDoc, collection } from "firebase/firestore"
import { toast } from "@/components/ui/use-toast"
import { db } from "@/utils/firebase"
import { Input } from "@/components/ui/input"
import { ReadMore } from "@/components/core/buttons/Buttons"

export function NewCategory() {
  const [categoryName, setCategoryName] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const newCategory = {
        name: categoryName,
      }

      await addDoc(collection(db, "categories"), newCategory)
      setCategoryName("")
      toast({
        title: "Category created successfully.",
        description: `with name ${categoryName}`,
      })
    } catch (error) {
      toast({
        title: "Something went wrong.",
        description: `Your request failed. Please try again. ${error}`,
        variant: "destructive",
      })
      console.error(error)
    }
  }

  return (
    <form  className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <Input value={categoryName} onChange={e => setCategoryName(e.target.value)} placeholder="Category Name" />
      <ReadMore text='Add Category' /> 
    </form>
  )
}
