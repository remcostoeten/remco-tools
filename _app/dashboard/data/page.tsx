
"use client"
import { Select, SelectValue } from "@radix-ui/react-select";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  serverTimestamp,
  updateDoc
} from "firebase/firestore";
import { useEffect, useState } from "react";

import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { auth, db } from "@/utils/firebase";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  title: string;
  userId: string;
  content: string;
  category: string;
  createdAt: any;
}

export default function Dashboard() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [editModeMap, setEditModeMap] = useState<{ [key: string]: boolean }>({});
  const password = process.env.NEXT_PUBLIC_PASSWORD!;
  const [enteredPassword, setEnteredPassword] = useState("");
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);

  const fetchMessages = async () => {
    const messagesCollection = collection(db, "messages");
    const snapshot = await getDocs(messagesCollection);
    const messages = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as Message[];
    setMessages(messages);
  };

  const user = auth.currentUser;

  useEffect(() => {
    fetchMessages();
  }, []);

  const categories = [
    { id: "1", name: "Pleio" },
    { id: "2", name: "Softhouse" },
    { id: "3", name: "Prive" },
  ];

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      fetchMessages();
    });

    return () => unsubscribe();
  }, []);

  const handleSubmit = async () => {
    try {
      const newMessage: Message = {
        title,
        userId: user?.uid!,
        content,
        category,
        createdAt: serverTimestamp(),
        id: "",
      };

      const docRef = await addDoc(collection(db, "messages"), newMessage);
      newMessage.id = docRef.id;

      setMessages((prevMessage) => [newMessage, ...prevMessage]);

      setCategory("");
      setTitle("");
      setContent("");
      toast({
        title: "message created successfully.",
        description: `In the category ${category} with title ${title}`,
      });
    } catch (error) {
      toast({
        title: "Something went wrong.",
        description: `Your sign-in request failed. Please try again. ${error}`,
        variant: "destructive",
      });
      console.error(error);
    }
  };

  const handleRemove = async (id: string) => {
    try {
      await deleteDoc(doc(db, "messages", id));
      setMessages((prevMessages) =>
        prevMessages.filter((message) => message.id !== id)
      );

      toast({
        title: "message removed successfully.",
      });
    } catch (error) {
      toast({
        title: "Couldn't remove message.",
        variant: "destructive",
      });
      console.error(error);
    }
  };

  const toggleEditMode = (id: string) => {
    setEditModeMap((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleEdit = async (message: Message) => {
    try {
      await updateDoc(doc(db, "messages", message.id), {
        title: message.title,
        content: message.content,
      });

      toggleEditMode(message.id);

      toast({
        title: "message updated successfully.",
      });
    } catch (error) {
      toast({
        title: "Couldn't update message.",
        variant: "destructive",
      });
      console.error(error);
    }
  };

  const handlePasswordSubmit = () => {
    if (enteredPassword === password) {
      setIsPasswordCorrect(true);
      toast({
        title: "Correct password.",
      });
    } else {
      toast({
        title: "Wrong password.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="max-w-3xl">
      {isPasswordCorrect ? (
        <div className="grid items-start gap-8">
          <div className="grid gap-1">
            <h1 className="text-3xl font-heading md:text-4xl">messages</h1>
            <p className="text-lg text-muted-foreground">
              Create and manage messages.
            </p>
          </div>
          <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
            <Input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Select onValueChange={setCategory} value={category}>
              <SelectTrigger>
                <SelectValue placeholder="Select a verified email to display" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.name}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Textarea
              placeholder="message content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <Button onClick={handleSubmit} className="inline-flex w-fit">
              New message
            </Button>
          </form>

          <div className="pb-2 ">
            {messages.map((message) => (
              <div
                key={message.id}
                className="border divide-y rounded-md divide-border"
              >
                <div className="flex flex-col content-center gap-2 px-8 py-4">
                  {editModeMap[message.id] ? (
                    <>
                      <Input
                        type="text"
                        value={message.title}
                        onChange={(e) =>
                          setMessages((prevMessages) =>
                            prevMessages.map((prevMessage) =>
                              prevMessage.id === message.id
                                ? { ...prevMessage, title: e.target.value }
                                : prevMessage
                            )
                          )
                        }
                      />
                      <Textarea
                        value={message.content}
                        onChange={(e) =>
                          setMessages((prevMessages) =>
                            prevMessages.map((prevMessage) =>
                              prevMessage.id === message.id
                                ? { ...prevMessage, content: e.target.value }
                                : prevMessage
                            )
                          )
                        }
                      />
                      <div className="flex gap-2">
                        <Button
                          onClick={() => handleEdit(message)}
                          className={cn(
                            buttonVariants({
                              // @ts-ignore
                              variant: "primary",
                              color: "success",
                              size: "sm",
                              width: "w-fit",
                            })
                          )}
                        >
                          Save
                        </Button>
                        <Button
                          onClick={() => toggleEditMode(message.id)}
                        >
                          Cancel
                        </Button>
                      </div>
                    </>
                  ) : (
                    <>
                      <a className="flex flex-col font-semibold hover:underline">
                        {message.title}
                        <small>{message.category}</small>
                      </a>
                      <p>{message.content}</p>{" "}
                      <div>
                        <p className="text-sm text-muted-foreground"></p>{" "}
                      </div>
                      <span onClick={() => handleRemove(message.id)}>
                        Delete
                      </span>
                      <Button
                        onClick={() => toggleEditMode(message.id)}
                      >
                        Edit
                      </Button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <Input
            type="password"
            placeholder="Enter the password"
            value={enteredPassword}
            onChange={(e) => setEnteredPassword(e.target.value)}
          />
          <Button onClick={handlePasswordSubmit}>Submit</Button>
        </div>
      )}
    </div>
  );
}