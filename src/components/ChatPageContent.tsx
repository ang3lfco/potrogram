'use client';
import { useEffect, useState } from "react";
import { getMessagesWith, sendMessage } from "@/actions";

type Message = {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  createdAt: string | Date;
};

type User = {
    id: string;
    username: string | null;
    name: string | null;
    avatar: string | null;
};

export default function ChatPageContent({otherUser}:{otherUser: User;}){
    const [messages, setMessages] = useState<Message[]>([]);
    const [text, setText] = useState("");

    useEffect(() => {
        const fetchMessages = async () => {
        const msgs = await getMessagesWith(otherUser.id);
        setMessages(msgs);
        };
        fetchMessages();
    }, [otherUser.id]);

    const handleSend = async() => {
        if(!text.trim()) return;
        await sendMessage(otherUser.id, text);
        setText("");
        
        const msgs = await getMessagesWith(otherUser.id);
        setMessages(msgs);
    };

    return(
        <div className="flex flex-col h-full">
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-2">
                {messages.map((msg) => (
                    <div key={msg.id} className={`mb-2 p-2 rounded-lg max-w-xs ${msg.senderId === otherUser.id ? "bg-gray-200 self-start" : "bg-blue-500 text-white self-end"}`}>
                        {msg.content}
                    </div>
                ))}
            </div>
            <div className="p-3 flex gap-2 border-t">
                <input className="border px-3 py-2 flex-1 rounded" value={text} onChange={(e) => setText(e.target.value)} placeholder="Type a message..." />
                <button onClick={handleSend} className="bg-blue-500 text-white px-4 py-2 rounded">Send</button>
            </div>
        </div>
    );
}