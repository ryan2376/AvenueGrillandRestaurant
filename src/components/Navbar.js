import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext"; // ✅ import cart context
import logo from "../assets/logo.png";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { items } = useCart(); // ✅ access cart
    const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);

    const linkBase =
        "px-3 py-2 text-sm font-medium transition-colors hover:text-orange-500";
    const activeLink = "text-orange-600 font-semibold";

    // Optional: close menu when resizing to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) setIsOpen(false);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <header className="sticky top-0 z-50 bg-white shadow">
            <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
                {/* ✅ Logo */}
                <Link to="/" className="flex items-center space-x-2">
                    <img src={logo} alt="Avenue Grill Logo" className="h-10 w-auto" />
                    <span className="font-bold text-sm text-orange-500">
                        Avenue Grill & Restaurant
                    </span>
                </Link>

                {/* ✅ Desktop Nav */}
                <nav className="hidden md:flex gap-4 items-center">
                    <NavLink to="/" className={({ isActive }) =>
                        `${linkBase} ${isActive ? activeLink : ""}`}>Home</NavLink>
                    <NavLink to="/menu" className={({ isActive }) =>
                        `${linkBase} ${isActive ? activeLink : ""}`}>Menu</NavLink>
                    <NavLink to="/reservations" className={({ isActive }) =>
                        `${linkBase} ${isActive ? activeLink : ""}`}>Reservations</NavLink>
                    <NavLink to="/about" className={({ isActive }) =>
                        `${linkBase} ${isActive ? activeLink : ""}`}>About</NavLink>
                    <NavLink to="/gallery" className={({ isActive }) =>
                        `${linkBase} ${isActive ? activeLink : ""}`}>Gallery</NavLink>
                    <NavLink to="/contact" className={({ isActive }) =>
                        `${linkBase} ${isActive ? activeLink : ""}`}>Contact</NavLink>

                    {/* ✅ Cart link with badge */}
                    <NavLink
                        to="/cart"
                        className={({ isActive }) =>
                            `relative ${linkBase} ${isActive ? activeLink : ""}`
                        }
                    >
                        🛒 Cart
                        {itemCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs font-bold rounded-full px-2 py-0.5">
                                {itemCount}
                            </span>
                        )}
                    </NavLink>
                </nav>

                {/* ✅ Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-gray-700 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* ✅ Mobile Menu */}
            <div
                className={`md:hidden bg-white border-t overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96" : "max-h-0"}`}
            >
                <nav className="flex flex-col px-4 py-2">
                    <NavLink to="/" className={({ isActive }) =>
                        `${linkBase} ${isActive ? activeLink : ""}`} onClick={() => setIsOpen(false)}>Home</NavLink>
                    <NavLink to="/menu" className={({ isActive }) =>
                        `${linkBase} ${isActive ? activeLink : ""}`} onClick={() => setIsOpen(false)}>Menu</NavLink>
                    <NavLink to="/reservations" className={({ isActive }) =>
                        `${linkBase} ${isActive ? activeLink : ""}`} onClick={() => setIsOpen(false)}>Reservations</NavLink>
                    <NavLink to="/about" className={({ isActive }) =>
                        `${linkBase} ${isActive ? activeLink : ""}`} onClick={() => setIsOpen(false)}>About</NavLink>
                    <NavLink to="/gallery" className={({ isActive }) =>
                        `${linkBase} ${isActive ? activeLink : ""}`} onClick={() => setIsOpen(false)}>Gallery</NavLink>
                    <NavLink to="/contact" className={({ isActive }) =>
                        `${linkBase} ${isActive ? activeLink : ""}`} onClick={() => setIsOpen(false)}>Contact</NavLink>
                    <NavLink to="/cart" className={({ isActive }) =>
                        `${linkBase} ${isActive ? activeLink : ""}`} onClick={() => setIsOpen(false)}>
                        🛒 Cart {itemCount > 0 && `(${itemCount})`}
                    </NavLink>
                </nav>
            </div>
        </header>
    );
}
