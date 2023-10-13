// components/ChatMessage.tsx
const ChatMessage = ({ message }) => {
  return (
    <div className="flex items-center mb-4">
      <div className="w-10 h-10 rounded-full bg-gray-300 mr-2"></div>
      <div className="bg-blue-100 p-2 rounded-md">
        <p className="text-gray-700">{message.name}</p>
        <p>{message.message}</p>
        {message.image && (
          <img src={message.image} alt="Attached Image" className="mt-2 max-w-full" />
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
