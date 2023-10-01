'use client'
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { db } from "@/utils/firebase";
import { collection, deleteDoc, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

export function DisplayCategories() {
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);
  const [editingItemId, setEditingItemId] = useState(null);
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemUrl, setItemUrl] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      const categoryQuery = collection(db, "categories");
      const categorySnapshot = await onSnapshot(categoryQuery, snapshot => {
        const catData = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
        setCategories(catData);
      });
    };

    const fetchItems = async () => {
      const itemQuery = collection(db, "items");
      const itemSnapshot = await onSnapshot(itemQuery, snapshot => {
        const itemData = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
        setItems(itemData);
      });
    };

    fetchCategories();
    fetchItems();
  }, []);

  const handleEdit = (item) => {
    setEditingItemId(item.id);
    setItemName(item.name);
    setItemPrice(item.price);
    setItemUrl(item.url);
  };

  const handleSave = async (itemId) => {
    try {
      const itemRef = doc(db, "items", itemId);
      await updateDoc(itemRef, {
        name: itemName,
        price: itemPrice,
        url: itemUrl
      });
      toast({
        title: "Item saved.",
        description: "Item has been saved."
      });
      setEditingItemId(null);
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };

  const handleDelete = async (itemId) => {
    try {
      const itemRef = doc(db, "items", itemId);
      await deleteDoc(itemRef);
      toast({
        title: "Item deleted.",
        description: "Item has been deleted.",
        variant: "destructive"
      });
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  return (
    <div>
      {categories.map(category => (
        <Card key={category.id}>
          <h2 className="text-black">{category.name}</h2>
          <ul>
            {items.filter(item => item.categoryId === category.id).map(item => (
              <li key={item.id}>
                {editingItemId === item.id ? (
                  <>
                    <Input value={itemName} onChange={e => setItemName(e.target.value)} />
                    <Input type="number" value={itemPrice} onChange={e => setItemPrice(e.target.value)} />
                    <Input value={itemUrl} onChange={e => setItemUrl(e.target.value)} />
                    <button onClick={() => handleSave(item.id)}>Save</button>
                    <button onClick={() => setEditingItemId(null)}>Cancel</button>
                  </>
                ) : (
                  <>
                    {item.name} - ${item.price} - <a href={item.url} target="_blank" rel="noopener noreferrer">Link</a>
                    <button onClick={() => handleEdit(item)}>Edit</button>
                    <button onClick={() => handleDelete(item.id)}>Delete</button>
                  </>
                )}
              </li>
            ))}
          </ul>
        </Card>
      ))}
    </div>
  );
}
