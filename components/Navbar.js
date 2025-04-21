import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-green-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold hover:text-green-200 transition-colors">
          Cassava Wetting Method
        </Link>
      </div>
    </nav>
  );
}
