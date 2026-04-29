"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
    const pathname = usePathname();
    const isActive = pathname === href;
    
    return (
        <Link 
            href={href}
            className={isActive ? "underline " : "text-gray-600"}
        >
            {children}
        </Link>
    );
};

export default NavLink;