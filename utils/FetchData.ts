import { getDownloadURL, ref } from 'firebase/storage';
import { getStorageInstance } from './firebase'; // assuming you have the getStorageInstance function

export const fetchChatData = async (filename: string) => {
    const storageInstance = getStorageInstance();
    const fileRef = ref(storageInstance, 'chats/' + filename);
    const url = await getDownloadURL(fileRef);

    const response = await fetch(url);
    return response.json();
}
