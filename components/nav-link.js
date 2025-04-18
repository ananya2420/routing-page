"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({href,children}){

    const path = usePathname();
    return <Link
    href={href}
    className={`${path.startsWith(href) ? 'text-gray-400' : ''} hover:text-gray-400 transition duration-300`}
>
    {children}
</Link>
}