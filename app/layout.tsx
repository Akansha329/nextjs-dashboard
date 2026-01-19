"use client";

import "./globals.css";
import Link from "next/link";
import { useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <html lang="en">
      <body>
        <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md text-white">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Akansha</h1>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/skills">Skills</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/contact">Contact</Link>
            </div>

            {/* Mobile Button */}
            <button
              className="md:hidden text-2xl"
              onClick={() => setOpen(!open)}
            >
              ☰
            </button>
          </div>

          {/* Mobile Menu */}
          {open && (
            <div className="md:hidden flex flex-col text-center space-y-4 pb-4">
              <Link href="/" onClick={() => setOpen(false)}>Home</Link>
              <Link href="/about" onClick={() => setOpen(false)}>About</Link>
              <Link href="/skills" onClick={() => setOpen(false)}>Skills</Link>
              <Link href="/projects" onClick={() => setOpen(false)}>Projects</Link>
              <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
            </div>
          )}
        </nav>

        <main>{children}</main>
      </body>
    </html>
  );
}