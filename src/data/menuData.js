// src/data/menuData.js
import grilled from "../assets/grilled chicken and steak.png";
import chicken from "../assets/chicken kienyeji.png";
import dessert from "../assets/dessert.png";
import fruitsalad from "../assets/fruit salad.png";
import beefwetfry from "../assets/Beef Wet Fry with ugali..png";
import mukimo from "../assets/Mukimo.png";
import ugalifish from "../assets/Ugali with fried Tilapia and kachumbari..png";
import pilau from "../assets/pilau.png";
import spicedchips from "../assets/spiced chips.png";
import githeri from "../assets/githeri minji special.png";
import panfriedbeef from "../assets/Pan Fried Beef with Ugali.png";
import mbuzi from "../assets/Mbuzi (Goat) Portions Stew.png";
import potatoWedges from "../assets/Potato Wedges.png";
import soda from "../assets/Soda 300ml.png";
import ugali from "../assets/Ugali(portion).png";
import whiteRice from "../assets/White Rice(portion).png";
import wholeTilapiaChips from "../assets/Whole Tilapia(with Chips).png";
import blackCoffee from "../assets/Black Coffee.png";
import chickenCaesar from "../assets/Chicken Caeser Salad.png";
import chickenWings from "../assets/chicken wings.png";
import freshJuice from "../assets/Fresh fruit Juice.png";
import freshMilk from "../assets/Fresh milk cup.png";
import fishFingers from "../assets/Fish Fingers.png";
import water from "../assets/Bottled Water.png"
import chai from "../assets/Chai(african tea).png"
import chapati from "../assets/chapati stew.png"
import avocado from "../assets/avocado.png"
import pilaubeef from "../assets/Pilau Beef.png"

export const menuData = [
    {
        category: "Chicken",
        items: [
            { id: "ch1", name: "Grilled Chicken (Quarter/Half/Full)", price: 400, image: grilled, desc: "Grilled with BBQ marinade." },
            { id: "ch2", name: "Chicken Kienyeji (Full)", price: null, image: chicken, desc: "Traditional kienyeji chicken (wet fry or deep fry options)." },
            { id: "ch3", name: "Chicken Wings (4 pcs)", price: 400, image: chickenWings, desc: "Served with potato wedges." },
        ],
    },
    {
        category: "Chapati",
        items: [
            { id: "ch1", name: "Chapati Served with Beef Stew", price: 400, image: chapati, desc: "perfectly cooked chapati with a stew of your choice." },
        ],
    },

    {
        category: "Beef & Goat",
        items: [
            { id: "bf1", name: "Pan Fried Beef (1/4) + Ugali", price: null, image: panfriedbeef, desc: "Tender pan-fried beef served with ugali." },
            { id: "bf2", name: "Beef Wet Fry (1/2 kg)", price: null, image: beefwetfry, desc: "Classic beef wet fry — great for sharing." },
            { id: "bf3", name: "Mbuzi (Goat) Portions / Stew", price: null, image: mbuzi, desc: "Goat served plain or wet fry." },
        ],
    },

    {
        category: "Fish & Seafood",
        items: [
            { id: "fs1", name: "Grilled Fish Fillet (Marinated)", price: 500, image: ugalifish, desc: "Marinated fish fillet, pan-grilled." },
            { id: "fs2", name: "Whole Tilapia (with Chips)", price: 600, image: wholeTilapiaChips, desc: "Whole tilapia — served with chips." },
            { id: "fs3", name: "Whole Tilapia (with Ugali)", price: 550, image: ugalifish, desc: "Whole tilapia — served with ugali & kachumbari." },
            { id: "fs4", name: "Fish Fingers", price: 400, image: fishFingers, desc: "Crispy fish fingers with tartar sauce." },
        ],
    },

    {
        category: "Rice & Ugali",
        items: [
            { id: "r1", name: "Pilau (plain)", price: null, image: pilau, desc: "Aromatic spiced rice." },
            { id: "r2", name: "Pilau + Beef Stew", price: null, image: pilaubeef, desc: "Pilau served with beef stew." },
            { id: "r3", name: "White Rice (portion)", price: null, image: whiteRice, desc: "Plain steamed white rice." },
            { id: "r4", name: "Ugali (portion)", price: null, image: ugali, desc: "Staple accompaniment." },
        ],
    },

    {
        category: "Vegetarian & Sides",
        items: [
            { id: "v1", name: "Mukimo (plain)", price: null, image: mukimo, desc: "Mashed potatoes + greens." },
            { id: "v2", name: "Spiced Chips", price: null, image: spicedchips, desc: "House spiced chips." },
            { id: "v3", name: "Githeri (Minji Special)", price: null, image: githeri, desc: "Hearty githeri special." },
            { id: "v4", name: "Potato Wedges", price: null, image: potatoWedges, desc: "Seasoned potato wedges." },
            { id: "v5", name: "Avocado", price: 50, image: avocado, desc: "ripe avocado." },
        ],
    },

    {
        category: "Salads & Desserts",
        items: [
            { id: "s1", name: "Fruit Salad (plain)", price: null, image: fruitsalad, desc: "Seasonal fruit salad." },
            { id: "s2", name: "Chicken Caesar Salad", price: null, image: chickenCaesar, desc: "Classic Caesar with grilled chicken." },
            { id: "s3", name: "Sweet Treat / Dessert", price: null, image: dessert, desc: "Ask server for today's dessert." },
        ],
    },

    {
        category: "Hot Beverages",
        items: [
            { id: "hb1", name: "Tea (cup)", price: 50, image: chai, desc: "Black tea." },
            { id: "hb2", name: "Black Coffee", price: 50, image: blackCoffee, desc: "Fresh brewed coffee." },
            { id: "hb3", name: "Fresh Milk Cup", price: 100, image: freshMilk, desc: "Hot milk." },
        ],
    },

    {
        category: "Cold Beverages",
        items: [
            { id: "cb1", name: "Soda 300ml", price: 70, image: soda, desc: "Assorted sodas." },
            { id: "cb2", name: "Fresh Juice (glass)", price: null, image: freshJuice, desc: "Mango / Passion / Banana." },
            { id: "cb3", name: "Water 500ml", price: null, image: water, desc: "Bottled water." },
        ],
    },
];

export default menuData;
