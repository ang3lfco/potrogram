import { auth } from "@/auth";
import { prisma } from "@/db";
import MessagesPageContent from "@/components/MessagesPageContent";

export default async function MessagesPage(){
    const session = await auth();
    if(!session?.user?.email) throw new Error("Not authenticated");
    
    const me = await prisma.profile.findUnique({
        where:{
            email: session.user.email
        }
    });
    if(!me) throw new Error("Profile not found");
    const chats = await prisma.chat.findMany({
        where:{
            members: {
                has: me?.id
            }
        },
        orderBy:{
            createdAt: "desc"
        },
    });

    const otherUsersIds = chats.map(chat => chat.members.find(id => id !== me.id)).filter(Boolean) as string[];
    const peopleInMyChats = await prisma.profile.findMany({
        where:{
            id:{ in: otherUsersIds}
        },
    });
    return(
        <MessagesPageContent people={peopleInMyChats}/>
    );
}