'use client'
import React, { useState, useEffect } from "react"
import { addDoc, collection, onSnapshot } from "firebase/firestore"
import { db } from "@/utils/firebase"
import { Input } from "@/components/ui/input"
import { SelectContent, SelectTrigger, SelectValue, Select, SelectItem } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"

export function NewItemInCategory() {
  const [categories, setCategories] = useState([])
  const [selectedCategoryId, setSelectedCategoryId] = useState("")
  const [itemName, setItemName] = useState("")
  const [itemPrice, setItemPrice] = useState<number | null>(null)
  const [itemUrl, setItemUrl] = useState("")

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "categories"), (snapshot) => {
      const fetchedCategories = []
      snapshot.forEach((doc) => {
        const category = doc.data()
        category.id = doc.id
        fetchedCategories.push(category)
      })
      setCategories(fetchedCategories)
    })
    return (): void => unsubscribe()
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const newItem = {
        name: itemName,
        price: itemPrice,
        url: itemUrl,
        categoryId: selectedCategoryId,
      }

      await addDoc(collection(db, "items"), newItem)
      setItemName("")
      setItemPrice(null)
      setItemUrl("")
      setSelectedCategoryId("")
      toast({
        title: "Item created successfully.",
        description: `with name ${itemName}`,
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
    <form className="flex gap-2 flex-col" onSubmit={handleSubmit}>
      <Select value={selectedCategoryId} onChange={e => setSelectedCategoryId(e.target.value)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          {categories.map(category => (
            <SelectItem key={category.id} value={category.id}>
              {category.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Input
        value={itemName} onChange={e => setItemName(e.target.value)} placeholder="Item Name" />
      <Input
        type="number" value={itemPrice} onChange={e => setItemPrice(Number(e.target.value))} placeholder="Price" />
      <Input
        value={itemUrl} onChange={e => setItemUrl(e.target.value)} placeholder="Item URL" />
      <Button type="submit" >Add item</Button>  </form >
  )
}
