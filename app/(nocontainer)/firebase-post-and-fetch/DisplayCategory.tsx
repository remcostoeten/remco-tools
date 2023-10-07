'use client';
import React, { useState, useEffect } from "react";
import { onSnapshot, doc, updateDoc, deleteDoc, collection } from "firebase/firestore";
import { db } from "@/utils/firebase";
import { toast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { ReadMore } from "@/components/core/buttons/Buttons";

type Category = {
  id: string;
  name: string;
}

export function CategoriesList() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [editingCategoryId, setEditingCategoryId] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "categories"), (snapshot) => {
      const fetchedCategories: Category[] = [];
      snapshot.forEach((doc) => {
        const category = doc.data() as Category;
        category.id = doc.id;
        fetchedCategories.push(category);
      });
      setCategories(fetchedCategories);
    });

    return () => unsubscribe();
  }, []);

  const handleDelete = async (categoryId: string) => {
    try {
      await deleteDoc(doc(db, "categories", categoryId));
      toast({ title: "Category deleted successfully." });
    } catch (error) {
      toast({
        title: "Something went wrong.",
        description: `Your request failed. Please try again. ${error}`,
        variant: "destructive",
      });
      console.error(error);
    }
  };

  return (
    <div className=" flex flex-col gap-2">
      {categories.map(category => (
        <div key={category.id}>
          <span>{category.name}</span>
          <div className="flex gap-2 mt-1">
            <Button text='Edit' onClick={() => setEditingCategoryId(category.id)} />
            <Button text='Delete' onClick={() => handleDelete(category.id)} />
          </div></div>
      ))}
      {editingCategoryId && (
        <EditCategory
          categoryId={editingCategoryId}
          onClose={() => setEditingCategoryId(null)}
        />
      )}
    </div>
  );
}

interface EditCategoryProps {
  categoryId?: string;
  onClose?: () => void;
}

export default function EditCategory({ categoryId, onClose }: EditCategoryProps) {
  const [categoryName, setCategoryName] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await updateDoc(doc(db, "categories", categoryId), {
        name: categoryName,
      });
      toast({ title: "Category updated successfully." });
      onClose();
    } catch (error) {
      toast({
        title: "Something went wrong.",
        description: `Your request failed. Please try again. ${error}`,
        variant: "destructive",
      });
      console.error(error);
    }
  };

  return (
    <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
      <Input
        value={categoryName}
        onChange={e => setCategoryName(e.target.value)}
        placeholder="Category Name"
      />
      <ReadMore text='Update category' />
    </form>
  );
}

interface RoundedButtonProps {
  text: string;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
}

export function Button({ text, onClick, type = "button" }: RoundedButtonProps) {
  return (
    <button
      type={type}
      className="px-4 py-2 rounded-md bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
      onClick={onClick}
    >
      {text}
    </button>
  );
}