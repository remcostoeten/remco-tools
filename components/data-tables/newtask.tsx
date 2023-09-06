'use client';
import React, { useEffect, useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { toast } from "@/components/ui/use-toast";
import { auth, db } from "@/utils/firebase";
import { Drawer } from "vaul";
import { PlusSquare } from "lucide-react";
import { getAuth, signInAnonymously } from "firebase/auth";
import { auth as firebaseAuth } from "@/utils/firebase";

interface NewTaskProps {
  content?: string;
}

const initialThoughtState = {
  title: "",
  description: "",
  subject: "",
  label: "",
};

export function NewThought({ content }: NewTaskProps) {
  const [open, setOpen] = useState(false);
  const [task, setTask] = useState(initialThoughtState);
  const [date, setDate] = useState<Date | null>(null);
  const [loading, setLoading] = useState(false);
  const user = auth?.currentUser;
  const [markdownContent, setMarkdownContent] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("user", user);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const auth = getAuth();

    try {
        if (!firebaseAuth.currentUser) {
            // If the user is not logged in, sign them in anonymously
            const anonymousUserCredential = await signInAnonymously(auth);
            const anonymousUser = anonymousUserCredential.user;

            if (anonymousUser) {
                const newThought = {
                    ...task,
                    userId: anonymousUser.uid,
                    createdAt: serverTimestamp(),
                    selectedDate: date,
                };
  
                const docRef = await addDoc(collection(db, "thoughts"), newThought);
                newThought.id = docRef.id;

                setTask(initialThoughtState);
                setDate(null);
                setMarkdownContent("");

                toast({
                    title: "Thought created successfully.",
                    description: `with title ${newThought.title}`,
                });
            } else {
                throw new Error("Failed to authenticate anonymously");
            }
        } else {
            const newThought = {
                ...task,
                userId: firebaseAuth.currentUser.uid,
                createdAt: serverTimestamp(),
                selectedDate: date,
            };
  
            const docRef = await addDoc(collection(db, "thoughts"), newThought);
            newThought.id = docRef.id;

            setTask(initialThoughtState);
            setDate(null);
            setMarkdownContent("");

            toast({
                title: "Thought created successfully.",
                description: `with title ${newThought.title}`,
            });
        }
    } catch (error) {
        toast({
            title: "Something went wrong.",
            description: `Your request failed. Please try again. ${error}`,
            variant: "destructive",
        });
        console.error(error);
    } finally {
        setOpen(false);
    }
};
  

  const form = (
    <form className="flex flex-col gap-2 py-6" onSubmit={handleSubmit}>
      <input
        type="text"
        className="wysiwyg-input"
        placeholder="Title"
        value={task.title}
        onChange={(e) => setTask({ ...task, title: e.target.value })}
      />

      <input
        type="text"
        className="wysiwyg-input"
        placeholder="Label"
        value={task.label}
        onChange={(e) => setTask({ ...task, label: e.target.value })}
      />
      
      <div className="flex items-center gap-2">
        <div className="cursor-hover">
            <button>enw post</button>
         </div>
      </div>
    </form>
  );

  return (
    <>
      <div className="flex gap-1 w-full cursor-hover">
        <span className="pl-3 text-xl text-notes font-notes">All thoughts</span>
      </div>
      <Drawer.Root shouldScaleBackground>
        <Drawer.Trigger asChild onClick={() => setOpen(true)}>
          <span>
            <PlusSquare className="font-2xl w-[40px]" />
          </span>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/40" />
          <Drawer.Content className="fixed bottom-0 shadow-lg bg-[#0a0a0a] p-12 left-0 right-0 mt-24 flex h-[75vh] flex-col rounded-t-[10px] rounded-2xl">
            <div className="flex-1 rounded-t-[10px] [text-[#5D5C63] font-notes] p-4">
              <div className="mx-auto w-4/12">
                <Drawer.Title className="mb-4 font-medium text-4xl font-serif">
                  Add whatever is on your mind.
                </Drawer.Title>
                {form}
                <Drawer.Trigger onClick={() => setOpen(false)}>
                  <span>Close</span>
                </Drawer.Trigger>
              </div>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </>
  );
}
