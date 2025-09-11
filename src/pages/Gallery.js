import { useState } from "react";

import grilled from "../assets/grilled chicken and steak.png";
import dessert from "../assets/dessert.png";
import seafood from "../assets/sea food and vegetarian.png";
import fruitsalad from "../assets/fruit salad.png";
import chicken from "../assets/chicken kienyeji.png";
import beefwetfry from "../assets/Beef Wet Fry with ugali..png";
import mukimo from "../assets/Mukimo.png";
import ugalifish from "../assets/Ugali with fried Tilapia and kachumbari..png";
import pilau from "../assets/pilau.png";
import spicedchips from "../assets/spiced chips.png";
import githeri from "../assets/githeri minji special.png";

// // Placeholder ambience images (replace later with real ones)
// import pilau from "../assets/pilau.png";
// import spicedchips from "../assets/spiced chips.png";
// import githeri from "../assets/githeri minji special.png";

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null);

    const foodImages = [
        { src: grilled, alt: "Grilled Steak" },
        { src: chicken, alt: "Kienyeji Chicken" },
        { src: dessert, alt: "Dessert" },
        { src: seafood, alt: "Seafood & Vegetarian" },
        { src: fruitsalad, alt: "Fruit Salad" },
        { src: beefwetfry, alt: "Beef Wet Fry with Ugali" },
        { src: mukimo, alt: "Mukimo" },
        { src: ugalifish, alt: "Ugali with Tilapia & Kachumbari" },
        { src: pilau, alt: "Pilau" },
        { src: spicedchips, alt: "Spiced Chips" },
        { src: githeri, alt: "Githeri Minji Special" },
    ];

    const ambienceImages = [
        { src: pilau, alt: "Restaurant Interior" },
        { src: spicedchips, alt: "Outdoor Dining Area" },
        { src: githeri, alt: "Chef at Work" },
    ];

    return (
        <main className="max-w-6xl mx-auto px-4 py-16">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
                Our Gallery
            </h1>
            <p className="text-gray-600 text-center mb-10">
                Explore highlights of our dishes and ambience.
            </p>

            {/* Food Section */}
            <h2 className="text-2xl font-semibold mb-6">🍲 Food Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
                {foodImages.map((img, index) => (
                    <div
                        key={index}
                        className="relative group cursor-pointer overflow-hidden rounded-lg shadow"
                        onClick={() => setSelectedImage(img)}
                    >
                        <img
                            src={img.src}
                            alt={img.alt}
                            className="w-full h-60 object-cover transform group-hover:scale-105 transition duration-300"
                        />
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                            <p className="text-white text-lg font-semibold">{img.alt}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Divider */}
            <hr className="my-12 border-gray-300" />

            {/* Ambience Section */}
            <h2 className="text-2xl font-semibold mb-6">🏛️ Restaurant & Ambience</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {ambienceImages.map((img, index) => (
                    <div
                        key={index}
                        className="relative group cursor-pointer overflow-hidden rounded-lg shadow"
                        onClick={() => setSelectedImage(img)}
                    >
                        <img
                            src={img.src}
                            alt={img.alt}
                            className="w-full h-60 object-cover transform group-hover:scale-105 transition duration-300"
                        />
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                            <p className="text-white text-lg font-semibold">{img.alt}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-3xl w-full px-4">
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            className="w-full max-h-[80vh] object-contain rounded-lg shadow-lg"
                        />
                        <p className="text-center text-white mt-4 text-lg">
                            {selectedImage.alt}
                        </p>
                        <button
                            className="absolute top-2 right-2 text-white text-2xl"
                            onClick={() => setSelectedImage(null)}
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}
        </main>
    );
}
