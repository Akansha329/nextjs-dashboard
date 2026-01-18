import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>

        <nav className="absolute top-0 left-0 w-full z-50 flex justify-between items-center px-10 py-6 bg-transparent text-white">
          <h1 className="text-2xl font-bold">Akansha</h1>
          <div className="space-x-6">
            <Link href="/" className="hover:text-blue-400">Home</Link>
            <Link href="/about" className="hover:text-blue-400">About</Link>
            <Link href="/skills" className="hover:text-blue-400">Skills</Link>
            <Link href="/projects" className="hover:text-blue-400">Projects</Link>
            <Link href="/contact" className="hover:text-blue-400">Contact</Link>
          </div>
        </nav>

        <main>
          {children}
        </main>

      </body>
    </html>
  );
}