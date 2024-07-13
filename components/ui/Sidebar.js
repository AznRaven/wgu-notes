'use client';
import Link from "next/link";
import React from "react";
import { ModeToggle } from "./ModeToggle";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  
  const navLinks = [
    {
      href: "/",
      name: "Home",
    },
    {
      href: "/D315",
      name: "D315 - Network and Security - Foundations",
    },
    {
      href: "/python",
      name: "Python",
    },
  ];

  return (
    <nav className="flex flex-col px-4 py-2 space-y-2 items-center">
      <ModeToggle />
      <div className="flex flex-col">
        {navLinks.map((x, i) => (
          <Link href={x.href} key={i} className={`border-r-2 hover:border-red-400 px-4 py-1 ${pathname === x.href ? 'border-red-400' : ''}`}>
            {x.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Sidebar;
