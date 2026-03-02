"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
    RefreshCcw,
    Hash,
    Lock,
    Database,
    ArrowDownUp,
    Unlock,
    KeySquare,
    Menu,
    Key,
    ShieldCheck,
    FileBadge,
    ChevronDown
} from "lucide-react"

const cryptoTools = [
    { name: "Token generator", href: "/token-generator", icon: RefreshCcw },
    { name: "Hash text", href: "/hash-text", icon: Hash },
    { name: "Bcrypt", href: "/bcrypt", icon: Lock },
    { name: "UUIDs generator", href: "/uuid-generator", icon: Database },
    { name: "ULID generator", href: "/ulid-generator", icon: ArrowDownUp },
    { name: "Encrypt / decrypt text", href: "/encrypt-decrypt", icon: Unlock },
    { name: "BIP39 passphrase gener...", href: "/bip39-generator", icon: KeySquare },
    { name: "Hmac generator", href: "/hmac-generator", icon: Menu },
    { name: "RSA key pair generator", href: "/rsa-generator", icon: Key },
    { name: "Password strength analy...", href: "/", icon: ShieldCheck },
    { name: "PDF signature checker", href: "/pdf-signature", icon: FileBadge },
]

export function Sidebar() {
    const pathname = usePathname()

    return (
        <aside className="w-[80px] h-screen bg-zinc-900 text-zinc-300 flex flex-col flex-shrink-0 items-center py-6 border-r border-zinc-700">
            <div className="flex flex-col items-center justify-center mb-8 relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/20 text-white font-bold text-xl">
                    Z
                </div>
            </div>

            <div className="flex-1 w-full overflow-y-auto custom-scrollbar flex flex-col items-center">
                <nav className="flex flex-col items-center w-full">
                    {cryptoTools.map((tool) => {
                        const isActive = pathname === tool.href
                        const Icon = tool.icon

                        return (
                            <Link
                                key={tool.name}
                                href={tool.href}
                                className={cn(
                                    "flex items-center justify-center w-12 h-12 mb-2 transition-all rounded-xl",
                                    isActive
                                        ? "bg-orange-600 text-white shadow-md shadow-orange-500/20"
                                        : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
                                )}
                                title={tool.name}
                            >
                                <Icon className="w-5 h-5" />
                            </Link>
                        )
                    })}
                </nav>
            </div>
        </aside>
    )
}
