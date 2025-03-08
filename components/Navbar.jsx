import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-row flex-wrap justify-between items-center py-4 gap-4">
          <Link href="/" className="text-xl font-bold">
            KMIT
          </Link>
          <div className="flex flex-row flex-wrap items-center gap-4 text-sm">
            <Link href="/about" className="hover:text-blue-600">About</Link>
            <Link href="/departments" className="hover:text-blue-600">Departments</Link>
            <Link href="/admissions" className="hover:text-blue-600">Admissions</Link>
            <Link href="/placements" className="hover:text-blue-600">Placements</Link>
            <Link href="/contact" className="hover:text-blue-600">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
