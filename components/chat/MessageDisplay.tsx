import React from 'react';

interface IMessage {
    id?: string;
    timestamp: string;
    name: string;
    message: string;
    image: string;
}

interface MessageDisplayProps {
    data: IMessage[];
}

const MessageDisplay: React.FC<MessageDisplayProps> = ({ data }) => {
    return (
        <div className="flex flex-col p-4 space-y-4">
            {data.map((msg) => (
                <div key={msg.id || msg.timestamp} className="flex items-start">
                    <div className="flex-none mr-4 text-gray-600">{msg.timestamp}</div>
                    <div className="flex-grow bg-gray-100 p-2 rounded-lg">
                        <div className="font-bold">{msg.name}</div>
                        {msg.message && <div>{msg.message}</div>}
                        {msg.image && <img className="mt-2" src={msg.image} alt="message-related" />}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default MessageDisplay;