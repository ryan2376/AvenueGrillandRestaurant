// src/pages/Cart.js
import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function Cart() {
    const { items, updateQuantity, removeItem, clearCart } = useCart();
    const [customerName, setCustomerName] = useState("");
    const [customerPhone, setCustomerPhone] = useState("");

    // Calculate total
    const total = items.reduce((sum, i) => {
        return sum + (i.price || 0) * i.quantity;
    }, 0);

    // Build WhatsApp message
    const buildMessage = () => {
        let message = `🛒 New Order from Avenue Grill Website\n\n`;
        message += `Name: ${customerName || "N/A"}\n`;
        message += `Phone: ${customerPhone || "N/A"}\n\n`;
        message += `Order:\n`;

        items.forEach((i) => {
            message += `- ${i.quantity}x ${i.name} - Ksh ${i.price || "?"}\n`;
        });

        message += `\nTotal: Ksh ${total}\n`;
        return encodeURIComponent(message);
    };

    const whatsappNumber = "254790928660"; // Replace with your restaurant's WhatsApp

    return (
        <main className="max-w-5xl mx-auto px-4 py-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Your Cart</h1>

            {items.length === 0 ? (
                <p className="text-gray-600">Your cart is empty.</p>
            ) : (
                <>
                    {/* Cart Items */}
                    <div className="space-y-6 mb-10">
                        {items.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center gap-4 bg-white p-4 rounded-lg shadow"
                            >
                                <div className="w-20 h-20 bg-gray-100 rounded overflow-hidden">
                                    {item.image ? (
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full grid place-items-center text-gray-400">
                                            No image
                                        </div>
                                    )}
                                </div>

                                <div className="flex-1">
                                    <h3 className="font-semibold text-lg">{item.name}</h3>
                                    <p className="text-gray-600">
                                        {item.price ? `Ksh ${item.price}` : "Call for price"}
                                    </p>
                                </div>

                                {/* Quantity controls */}
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() =>
                                            updateQuantity(item.id, Math.max(1, item.quantity - 1))
                                        }
                                        className="px-2 py-1 bg-gray-200 rounded"
                                    >
                                        -
                                    </button>
                                    <span className="w-8 text-center">{item.quantity}</span>
                                    <button
                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                        className="px-2 py-1 bg-gray-200 rounded"
                                    >
                                        +
                                    </button>
                                </div>

                                <button
                                    onClick={() => removeItem(item.id)}
                                    className="ml-4 text-red-500 hover:underline"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Customer Info */}
                    <div className="bg-gray-50 p-6 rounded-lg shadow mb-10">
                        <h2 className="text-xl font-bold mb-4">Your Details</h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                value={customerName}
                                onChange={(e) => setCustomerName(e.target.value)}
                                className="border rounded-lg px-3 py-2 w-full"
                            />
                            <input
                                type="text"
                                placeholder="Your Phone Number"
                                value={customerPhone}
                                onChange={(e) => setCustomerPhone(e.target.value)}
                                className="border rounded-lg px-3 py-2 w-full"
                            />
                        </div>
                    </div>

                    {/* Summary + Checkout */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <h3 className="text-xl font-semibold">
                            Total: <span className="text-orange-600">Ksh {total}</span>
                        </h3>

                        <div className="flex gap-3">
                            <a
                                href={`https://wa.me/${whatsappNumber}?text=${buildMessage()}`}
                                target="_blank"
                                rel="noreferrer"
                                className="bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-500"
                            >
                                Send Order via WhatsApp
                            </a>
                            <button
                                onClick={clearCart}
                                className="bg-gray-200 px-5 py-2 rounded-md hover:bg-gray-300"
                            >
                                Clear Cart
                            </button>
                        </div>
                    </div>
                </>
            )}
        </main>
    );
}
