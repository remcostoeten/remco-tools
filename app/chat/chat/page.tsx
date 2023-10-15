'use client';

import MessageDisplay from "@/components/chat/MessageDisplay";
import { fetchChatData } from "@/utils/FetchData";
import { useState, useEffect } from "react";

export default function Home() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            const chatData = await fetchChatData('znew.json');
            setData(chatData);
            setLoading(false);
        };

        loadData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto">
            <MessageDisplay data={data} />
        </div>
    );
}
