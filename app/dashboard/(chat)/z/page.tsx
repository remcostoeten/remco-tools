'use client';

import ChatSearch from "@/components/chat/ChatSearch";
import MessageDisplay from "@/components/chat/MessageDisplay";
import MiniSpinner from "@/components/effects/MiniSpinner";
import { fetchChatData } from "@/utils/FetchData";
import { useState, useEffect } from "react";

export default function Home() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');  // State to hold current search term

    useEffect(() => {
        const loadData = async () => {
            const chatData = await fetchChatData('znew.json');
            setData(chatData);
            setLoading(false);
        };

        loadData();
    }, []);

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    const handleJumpTo = (index) => {
        const element = document.getElementById(data[index].id || data[index].timestamp);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    if (loading) {
        return <div><MiniSpinner /></div>;
    }

    return (
        <div className="container mx-auto">
            <ChatSearch
                onSearch={handleSearch}
                chatHistory={data}
                onJumpTo={handleJumpTo} searchResults={[]} />
            <MessageDisplay data={data} searchTerm={searchTerm} />
        </div>
    );
}