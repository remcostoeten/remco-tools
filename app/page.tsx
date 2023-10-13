'use client'
import ChatMessage from '@/components/chat/ChatMessage';
import Pagination from '@/components/chat/Pagination';
// pages/chat/ChatPage.tsx
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const ChatPage = () => {
  const router = useRouter();
  const { chatId } = router.query; // Extract chat ID from the URL

  const [chatData, setChatData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Number of messages to display per page

  useEffect(() => {
    // Load chat data based on the chat ID from the JSON file
    const loadChatData = async () => {
      try {

        const response = await fetch(`/data/chat${chatId}.json`);
        const data = await response.json();
        setChatData(data);
      } catch (error) {
        console.error('Error loading chat data:', error);
      }
    };

    if (chatId) {
      loadChatData();
    }
  }, [chatId]);

  // Pagination logic
  const totalPages = Math.ceil(chatData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentMessages = chatData.slice(startIndex, endIndex);

  return (
    <div className="container mx-auto mt-4">
      <h1 className="text-2xl font-bold mb-4">Chat History</h1>
      <div className="space-y-4">
        {currentMessages.map((message, index) => (
          <ChatMessage key={index} message={message} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(newPage) => setCurrentPage(newPage)}
      />
    </div>
  );
};

export default ChatPage;
