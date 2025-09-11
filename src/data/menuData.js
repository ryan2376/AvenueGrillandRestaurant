// src/data/menuData.js
import grilled from "../assets/grilled chicken and steak.png";
import chicken from "../assets/chicken kienyeji.png";
import dessert from "../assets/dessert.png";
// import seafood from "../assets/sea food and vegetarian.png";
import fruitsalad from "../assets/fruit salad.png";
import beefwetfry from "../assets/Beef Wet Fry with ugali..png";
import mukimo from "../assets/Mukimo.png";
import ugalifish from "../assets/Ugali with fried Tilapia and kachumbari..png";
import pilau from "../assets/pilau.png";
import spicedchips from "../assets/spiced chips.png";
import githeri from "../assets/githeri minji special.png";

// NOTE: prices are null when not crystal-clear from the PDF.
// Please update prices using your Menu.pdf (I referenced it). :contentReference[oaicite:1]{index=1}

export const menuData = [
    {
        category: "Chicken",
        items: [
            { id: "ch1", name: "Grilled Chicken (Quarter/Half/Full)", price: 400, image: grilled, desc: "Grilled with BBQ marinade." },
            { id: "ch2", name: "Chicken Kienyeji (Full)", price: null, image: chicken, desc: "Traditional kienyeji chicken (wet fry or deep fry options)." },
            { id: "ch3", name: "Chicken Wings (4 pcs)", price: 400, image: grilled, desc: "Served with potato wedges." },
        ],
    },

    {
        category: "Beef & Goat",
        items: [
            { id: "bf1", name: "Pan Fried Beef (1/4) + Ugali", price: null, image: null, desc: "Tender pan-fried beef served with ugali." },
            { id: "bf2", name: "Beef Wet Fry (1/2 kg)", price: null, image: beefwetfry, desc: "Classic beef wet fry — great for sharing." },
            { id: "bf3", name: "Mbuzi (Goat) Portions / Stew", price: null, image: null, desc: "Goat served plain or wet fry." },
        ],
    },

    {
        category: "Fish & Seafood",
        items: [
            { id: "fs1", name: "Grilled Fish Fillet (Marinated)", price: 500, image: ugalifish, desc: "Marinated fish fillet, pan-grilled." },
            { id: "fs2", name: "Whole Tilapia (with Chips)", price: 600, image: ugalifish, desc: "Whole tilapia — served with chips." },
            { id: "fs3", name: "Whole Tilapia (with Ugali)", price: 550, image: ugalifish, desc: "Whole tilapia — served with ugali & kachumbari." },
            { id: "fs4", name: "Fish Fingers", price: 400, image: null, desc: "Crispy fish fingers with tartar sauce." },
            { id: "fs5", name: "Coconut Fish (with fries)", price: 500, image: null, desc: "Coconut-flavored fish with fries." },
        ],
    },

    {
        category: "Rice & Ugali",
        items: [
            { id: "r1", name: "Pilau (plain)", price: null, image: pilau, desc: "Aromatic spiced rice." },
            { id: "r2", name: "Pilau + Beef Stew", price: null, image: pilau, desc: "Pilau served with beef stew." },
            { id: "r3", name: "White Rice (portion)", price: null, image: null, desc: "Plain steamed white rice." },
            { id: "r4", name: "Ugali (portion)", price: null, image: null, desc: "Staple accompaniment." },
        ],
    },

    {
        category: "Vegetarian & Sides",
        items: [
            { id: "v1", name: "Mukimo (plain)", price: null, image: mukimo, desc: "Mashed potatoes + greens." },
            { id: "v2", name: "Spiced Chips", price: null, image: spicedchips, desc: "House spiced chips." },
            { id: "v3", name: "Githeri (Minji Special)", price: null, image: githeri, desc: "Hearty githeri special." },
            { id: "v4", name: "Potato Wedges", price: null, image: null, desc: "Seasoned potato wedges." },
        ],
    },

    {
        category: "Salads & Desserts",
        items: [
            { id: "s1", name: "Fruit Salad (plain)", price: null, image: fruitsalad, desc: "Seasonal fruit salad." },
            { id: "s2", name: "Chicken Caesar Salad", price: null, image: null, desc: "Classic Caesar with grilled chicken." },
            { id: "s3", name: "Sweet Treat / Dessert", price: null, image: dessert, desc: "Ask server for today's dessert." },
        ],
    },

    {
        category: "Hot Beverages",
        items: [
            { id: "hb1", name: "Tea (cup)", price: 50, image: null, desc: "Black tea." },
            { id: "hb2", name: "Black Coffee", price: 50, image: null, desc: "Fresh brewed coffee." },
            { id: "hb3", name: "Fresh Milk Cup", price: 100, image: null, desc: "Hot milk." },
        ],
    },

    {
        category: "Cold Beverages",
        items: [
            { id: "cb1", name: "Soda 300ml", price: 70, image: null, desc: "Assorted sodas." },
            { id: "cb2", name: "Fresh Juice (glass)", price: null, image: null, desc: "Mango / Passion / Banana." },
            { id: "cb3", name: "Water 500ml", price: null, image: null, desc: "Bottled water." },
        ],
    },
];

export default menuData;
