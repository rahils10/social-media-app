import Link  from "next/link";
import React from 'react'
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import { currentUser } from "@clerk/nextjs/server";
import { syncUser } from "@/actions/user.action";


async function Navbar() {

  const user = await currentUser();
  if (user) await syncUser(); // POST
  return (
    <nav className="sticky top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex items-center justify-between h-16 ml-auto gap-4">
        <div className="flex items-center">
          <Link  href="/" className="text-xl font-bold text-primary font-mono tracking-wider">
            Socially
          </Link>
        </div>
        <div className="ml-auto flex items-center gap-4">
            <DesktopNavbar />
            <MobileNavbar />
        </div>
      </div>
    </div>
  </nav>

  )
}

export default Navbar
