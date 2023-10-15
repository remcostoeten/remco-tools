import { IMessage } from "@/utils/types";

interface MessageDisplayProps {
    data: IMessage[];
    searchTerm: string;
}

const MessageDisplay: React.FC<MessageDisplayProps> = ({ data, searchTerm }) => {
    const highlightSearch = (message) => {
        if (!searchTerm) return message;

        const parts = message.split(new RegExp(`(${searchTerm})`, 'gi'));
        return (
            <span className="text-black">
                {parts.map((part, i) =>
                    part.toLowerCase() === searchTerm.toLowerCase() ?
                        <strong key={i} className="bg-yellow-300">{part}</strong> :
                        part
                )}
            </span>
        );
    }

    return (
        <div className="flex flex-col p-4 space-y-4">
            {data.map((msg) => (
                <div key={msg.id || msg.timestamp} className="flex items-start" id={msg.id || msg.timestamp}>
                    <div className="flex-grow bg-gray-100 p-2 rounded-lg resize-none">
                        <div className="font-bold">{msg.name}</div>
                        {msg.message && <div>{highlightSearch(msg.message)}</div>}
                        {msg.image && <img className="mt-2" src={msg.image} alt="message-related" />}
                        <div className="dash-badge absolute right-0 top-0 flex-none mr-4 text-black">{msg.timestamp}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default MessageDisplay;
