import Link from "next/link";
export default function Sidebar()
{
    return(
        <aside className="w-60 bg-gray-100 border-r p-4 h-screen">
  <h1 className="font-bold text-lg mb-4">Dashboard</h1>

  <Link
    href="/dashboard"
    className="block p-2 rounded hover:bg-gray-300"
  >
    Home
  </Link>
</aside>

    );
}