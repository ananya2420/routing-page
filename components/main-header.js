

import Link from "next/link";
import NavLink from "./nav-link";
//import { usePathname } from "next/navigation";

export default function MainHeader() {
    //const path = usePathname();
    return (
        <header className="bg-gray-900 text-white py-4 shadow-md">
            <nav className="container mx-auto">
                <ul className="flex justify-center space-x-6">
                    <li>
                        <Link href="/" className="hover:text-gray-400 transition duration-300">Home</Link>
                    </li>
                    <li>
                    <NavLink href='/news'>News</NavLink>
                    </li>
                    <li>
                     <NavLink href='/archive'>Archive</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}