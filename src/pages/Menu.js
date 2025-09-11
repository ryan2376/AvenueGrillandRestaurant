// src/pages/Menu.js
import { useState, useMemo } from "react";
import menuData from "../data/menuData";
import { useCart } from "../context/CartContext";
import toast from "react-hot-toast";

export default function Menu() {
    const { addItem } = useCart();
    const [activeCategory, setActiveCategory] = useState("All");
    const [query, setQuery] = useState("");
    const [selected, setSelected] = useState(null);

    // Build category list
    const categories = useMemo(() => {
        const cats = menuData.map((c) => c.category);
        return ["All", ...cats];
    }, []);

    // Flattened list for search/filter
    const filteredItems = useMemo(() => {
        const all = menuData.flatMap((c) =>
            c.items.map((i) => ({ ...i, category: c.category }))
        );

        return all.filter((it) => {
            const inCategory =
                activeCategory === "All" ? true : it.category === activeCategory;
            const matchesQuery =
                query.trim() === ""
                    ? true
                    : it.name.toLowerCase().includes(query.toLowerCase());
            return inCategory && matchesQuery;
        });
    }, [activeCategory, query]);

    return (
        <main className="max-w-7xl mx-auto px-4 py-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Menu</h1>
            <p className="text-gray-600 mb-8">
                Browse our categories and add items to your cart.
            </p>

            {/* Controls */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <div className="flex gap-2 flex-wrap">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-3 py-1 rounded-full text-sm border ${activeCategory === cat
                                ? "bg-orange-600 text-white border-orange-600"
                                : "bg-white text-gray-700"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="flex items-center gap-2">
                    <input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search dishes..."
                        className="border rounded-lg px-3 py-2 w-60"
                    />
                </div>
            </div>

            {/* Full Menu Preview + Download */}
            <section className="mb-12 text-center">
                <h2 className="text-2xl font-bold mb-4">Full Menu</h2>
                <p className="text-gray-600 mb-6">
                    Browse the designed version of our menu or download the PDF.
                </p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    <img
                        src={require("../assets/menu-page1.jpg")}
                        alt="Menu Page 1"
                        className="w-64 rounded-lg shadow-lg border"
                    />
                    <img
                        src={require("../assets/menu-page2.jpg")}
                        alt="Menu Page 2"
                        className="w-64 rounded-lg shadow-lg border"
                    />
                </div>
                <a
                    href="/menu.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-6 bg-orange-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-500 transition"
                >
                    📄 View / Download Full Menu (PDF)
                </a>
            </section>

            {/* Grid */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filteredItems.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white rounded-lg shadow p-4 flex flex-col h-full"
                    >
                        <div className="h-40 mb-3 overflow-hidden rounded">
                            {item.image ? (
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="w-full h-full bg-gray-100 grid place-items-center text-gray-400">
                                    No image
                                </div>
                            )}
                        </div>

                        <div className="flex-1">
                            <h3 className="font-semibold text-lg">{item.name}</h3>
                            {item.desc && (
                                <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                            )}
                        </div>

                        <div className="mt-4 flex items-center justify-between">
                            <div className="text-lg font-semibold">
                                {item.price ? (
                                    `Ksh ${item.price}`
                                ) : (
                                    <span className="text-gray-500 text-sm">Call for price</span>
                                )}
                            </div>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => setSelected(item)}
                                    className="px-3 py-1 rounded-md bg-gray-200 text-sm hover:bg-gray-300"
                                >
                                    View
                                </button>
                                <button
                                    onClick={() => {
                                        addItem(item);
                                        toast.success(`${item.name} added to cart ✅`);
                                    }}
                                    className="px-3 py-1 rounded-md bg-orange-600 text-white text-sm hover:bg-orange-500"
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Empty state */}
            {filteredItems.length === 0 && (
                <p className="text-center text-gray-600 mt-8">
                    No dishes match your search.
                </p>
            )}

            {/* Detail Modal */}
            {selected && (
                <div
                    className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
                    onClick={() => setSelected(null)}
                >
                    <div
                        className="bg-white rounded-lg shadow-lg max-w-2xl w-full p-6 relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-3 right-3 text-gray-700 text-2xl"
                            onClick={() => setSelected(null)}
                        >
                            ✕
                        </button>

                        <div className="grid md:grid-cols-2 gap-4 items-start">
                            <div>
                                {selected.image ? (
                                    <img
                                        src={selected.image}
                                        alt={selected.name}
                                        className="w-full h-72 object-cover rounded"
                                    />
                                ) : (
                                    <div className="w-full h-72 bg-gray-100 grid place-items-center text-gray-400">
                                        No image
                                    </div>
                                )}
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold mb-2">{selected.name}</h2>
                                <p className="text-gray-600 mb-4">{selected.desc}</p>
                                <p className="text-lg font-semibold mb-4">
                                    {selected.price ? `Ksh ${selected.price}` : "Call for price"}
                                </p>

                                <button
                                    onClick={() => {
                                        addItem(selected);
                                        toast.success(`${selected.name} added to cart ✅`);
                                        setSelected(null);
                                    }}
                                    className="inline-block bg-orange-600 text-white px-5 py-2 rounded-md hover:bg-orange-500"
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}
