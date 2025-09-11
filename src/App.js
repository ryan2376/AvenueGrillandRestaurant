// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { CartProvider } from "./context/CartContext";
import { Toaster } from "react-hot-toast";

export default function App() {
    return (
        <CartProvider>
            <Router>
                <div className="min-h-screen flex flex-col">
                    <Navbar />
                    <div className="flex-1">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/menu" element={<Menu />} />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/gallery" element={<Gallery />} />
                            <Route path="/contact" element={<Contact />} />
                        </Routes>
                    </div>
                    <Footer />
                </div>
                <Toaster position="top-right" />
            </Router>
        </CartProvider>
    );
}
