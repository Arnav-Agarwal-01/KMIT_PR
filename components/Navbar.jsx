import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="w-full bg-transparent shadow-none">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-row flex-wrap justify-between items-center py-4 gap-4">
          <Link href="/" className="text-2xl font-extrabold text-yellow-300 hover:text-yellow-200 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            KMIT
          </Link>
          <div className="flex flex-row flex-wrap items-center gap-6 text-base font-semibold">
            <Link href="/about" className="text-yellow-300 hover:text-yellow-200 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">About</Link>
            <Link href="/departments" className="text-yellow-300 hover:text-yellow-200 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">Departments</Link>
            <Link href="/admissions" className="text-yellow-300 hover:text-yellow-200 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">Admissions</Link>
            <Link href="/placements" className="text-yellow-300 hover:text-yellow-200 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">Placements</Link>
            <Link href="/contact" className="text-yellow-300 hover:text-yellow-200 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
