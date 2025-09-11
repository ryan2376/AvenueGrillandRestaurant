import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Reservations from "./pages/Reservations";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart"; // ✅ import Cart page
import { Toaster } from "react-hot-toast";

export default function App() {
    return (
        <Router>
            <div className="min-h-screen flex flex-col">
                <Navbar />
                <div className="flex-1">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/menu" element={<Menu />} />
                        <Route path="/reservations" element={<Reservations />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/gallery" element={<Gallery />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/cart" element={<Cart />} /> {/* ✅ new route */}
                    </Routes>
                </div>
                <Footer />
                <Toaster position="top-center" />
            </div>
        </Router>
    );
}
