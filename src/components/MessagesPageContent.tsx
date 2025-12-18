'use client'
import { Avatar } from "@radix-ui/themes";
import { useState } from "react";
import ChatPageContent from "./ChatPageContent";
import { findProfileByUsername } from "@/actions";

type User={
    id: string;
    username: string | null;
    name: string | null;
    avatar: string | null;
}

export default function MessagesClient({meId, people}:{meId: string; people: User[];}){
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    
    const [profileSearched, setProfileSearched] = useState("");
    const handleStart = async() => {
        const profile = await findProfileByUsername(profileSearched);
        setSelectedUser(profile);
    }
    return(
        <div className="flex w-full h-[200%] md:h-[calc(100vh-50px)] flex-col md:flex-row">
            {/* left */}
            <div className={`md:w-1/3 w-full border-r border-gray-300 overflow-y-auto p-4 ${selectedUser ? "hidden md:block" : "block"}`}>
                <h1 className="text-3xl font-extrabold ">Inbox</h1>
                <div className="border-t mt-4 mb-4">
                    <p className="mt-4 text-[14px] mb-1">Start a new chat: </p>
                    <div className="flex gap-2 ">
                        <input className="border px-3 py-2 flex-1 rounded" placeholder="Type username..." value={profileSearched} onChange={(e) => setProfileSearched(e.target.value)} />
                        <button onClick={handleStart} className="bg-ig-blue text-white px-4 py-2 rounded">Start</button>
                    </div>
                </div>
                {people.map(p => (
                    <button key={p.id} onClick={() => setSelectedUser(p)} className={`w-full flex items-center gap-2 p-2 rounded-lg text-left ${selectedUser?.id === p.id ? "bg-gray-200" : "hover:bg-gray-100"}`}>
                        <Avatar size="5" radius="full" src={p.avatar ? `/api/image/${p.avatar}` : "/default-avatar.png"} fallback="avatar"/>
                        <div className="ml-2">
                            <h3 className="font-bold">{p.name ?? "Unknown"}</h3>
                            <p className="text-sm text-gray-600">@{p.username}</p>
                        </div>
                    </button>
                ))}
            </div>

            {/* right */}
            <div className={`md:w-2/3 w-full flex flex-col ${selectedUser ? "block" : "hidden md:flex"}`}>
                {selectedUser ? (
                    <>
                        <div className="md:hidden p-3 border-b">
                            <button onClick={() => setSelectedUser(null)} className="text-sm text-blue-600 font-medium">← Back</button>
                        </div>
                        <ChatPageContent meId={meId} otherUser={selectedUser}/>
                    </>
                ) : (
                    <div className="h-full flex items-center justify-center text-gray-500">
                        Select a conversation
                    </div>
                )}
            </div>
        </div>
    );
}