'use client'
import React, { useState } from "react"
import { addDoc, collection } from "firebase/firestore"
import { toast } from "@/components/ui/use-toast"
import { db } from "@/utils/firebase"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

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
    <form onSubmit={handleSubmit}>
      <Input value={categoryName} onChange={e => setCategoryName(e.target.value)} placeholder="Category Name" />
      <Button type="submit" >Add category</Button>
    </form>
  )
}
