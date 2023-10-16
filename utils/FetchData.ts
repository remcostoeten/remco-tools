import { getDownloadURL, ref } from "firebase/storage";
import { getStorageInstance } from "./firebase";

export const fetchChatData = async (filename: string) => {
    const storageInstance = getStorageInstance();
    const fileRef = ref(storageInstance, 'chats/' + filename);
    const url = await getDownloadURL(fileRef);

    const response = await fetch(url);
    const data = await response.json();

    console.log("Fetched data:", data);
    return data;
}
