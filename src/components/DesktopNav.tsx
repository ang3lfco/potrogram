import Link from "next/link";
import { Bell, Home, LayoutGrid, MessageSquareText, Search, SquarePlus, User } from "lucide-react";

export default function DesktopNav(){
    return(
        <div className="hidden lg:block w-60 sticky top-0 h-screen border-r border-r-gray-300 p-4">
            <div className="">
                <img className="" src="https://peach-gentle-xerinae-369.mypinata.cloud/ipfs/bafybeidfokam2ropi4ct34ryclrqrq277qeovj7zt24pwrllzun3xjfsmi" alt=""/>
                <div className="ml-1 flex flex-col gap-3 mt-0 *:flex *:gap-3">
                    <Link href={'/'} className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 transition">
                        <Home/>
                        Inicio
                    </Link>
                    <Link href={'/search'} className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 transition">
                        <Search/>
                        Búsqueda
                    </Link>
                    <Link href={'/browse'} className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 transition">
                        <LayoutGrid/>
                        Explorar
                    </Link>
                    <Link href={'/profile'} className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 transition">
                        <User/>
                        Perfil
                    </Link>
                    <Link href={'/create'} className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 transition">
                        <SquarePlus/>
                        Crear
                    </Link>
                    <Link href={'/messages'} className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 transition">
                        <MessageSquareText/>
                        Mensajes
                    </Link>
                    <Link href={'/notifications'} className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 transition">
                        <Bell/>
                        Notificaciones
                    </Link>
                </div>
            </div>
        </div>
    );
}