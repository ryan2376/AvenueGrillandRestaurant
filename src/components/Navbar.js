import { Link, NavLink } from "react-router-dom";
import { useState } from "react";


export default function Navbar() {
const [isOpen, setIsOpen] = useState(false);


const linkBase =
"px-3 py-2 text-sm font-medium transition-colors hover:text-red-500";


return (
<header className="sticky top-0 z-50 bg-white shadow">
<div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
{/* Logo */}
<Link to="/" className="font-bold text-xl text-red-600">
Avenue Grill
</Link>


{/* Desktop Nav */}
<nav className="hidden md:flex gap-4">
<NavLink to="/" className={linkBase}>Home</NavLink>
<NavLink to="/menu" className={linkBase}>Menu</NavLink>
<NavLink to="/reservations" className={linkBase}>Reservations</NavLink>
<NavLink to="/about" className={linkBase}>About</NavLink>
<NavLink to="/gallery" className={linkBase}>Gallery</NavLink>
<NavLink to="/contact" className={linkBase}>Contact</NavLink>
</nav>


{/* Mobile Toggle */}
<button
className="md:hidden p-2 text-gray-700"
onClick={() => setIsOpen(!isOpen)}
>
☰
</button>
</div>


{/* Mobile Menu */}
{isOpen && (
<div className="md:hidden bg-white border-t">
<nav className="flex flex-col px-4 py-2">
<NavLink to="/" className={linkBase} onClick={() => setIsOpen(false)}>Home</NavLink>
<NavLink to="/menu" className={linkBase} onClick={() => setIsOpen(false)}>Menu</NavLink>
<NavLink to="/reservations" className={linkBase} onClick={() => setIsOpen(false)}>Reservations</NavLink>
<NavLink to="/about" className={linkBase} onClick={() => setIsOpen(false)}>About</NavLink>
<NavLink to="/gallery" className={linkBase} onClick={() => setIsOpen(false)}>Gallery</NavLink>
<NavLink to="/contact" className={linkBase} onClick={() => setIsOpen(false)}>Contact</NavLink>
</nav>
</div>
)}
</header>
);
}