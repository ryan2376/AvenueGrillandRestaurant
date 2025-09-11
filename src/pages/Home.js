// Home.js
import grilled from '../assets/grilled chicken and steak.png'
import dessert from '../assets/dessert.png'
import githeri from '../assets/githeri minji special.png'
import chicken from '../assets/chicken kienyeji.png'
import mukimo from '../assets/Mukimo.png'
import ugalifish from '../assets/Ugali with fried Tilapia and kachumbari..png'
import pilau from '../assets/pilau.png'
// import spicedchips from '../assets/spiced chips.png'
// import beefwetfry from '../assets/Beef Wet Fry with ugali..png'
// import fruitsalad from '../assets/fruit salad.png'
// import seafood from '../assets/sea food and vegetarian.png'


export default function Home() {
    return (
        <main>
            {/* Hero Section */}
            <section
                className="relative h-[80vh] bg-cover bg-center flex items-center justify-center"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1600&q=80')",
                }}
            >
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-3xl md:text-6xl font-bold mb-4">
                        Welcome to Avenue Grill
                    </h1>
                    <p className="text-base md:text-xl mb-6 max-w-2xl mx-auto">
                        Experience the finest grills and authentic flavors in town.
                    </p>
                    <a
                        href="/menu"
                        className="inline-block bg-orange-600 text-white px-6 py-3 rounded-full font-medium hover:bg-orange-400 transition"
                    >
                        Explore Menu
                    </a>
                </div>
            </section>

            {/* Specials Section */}
            <section className="max-w-6xl mx-auto px-4 py-16">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Our Specials</h2>
                <p className=" text-orange-500 text-center mb-6 ">
                    A taste of what we offer…
                </p>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                    <div className="bg-white shadow rounded-lg p-4 text-center">
                        <img
                            src={grilled}
                            alt="Grilled Steak"
                            className="rounded-lg mb-4 h-[500px] w-full object-cover"
                        />
                        <h3 className="font-semibold text-lg">Grilled Steak</h3>
                        <p className="text-gray-500 text-sm">Juicy, flame-grilled perfection.</p>
                    </div>
                    <div className="bg-white shadow rounded-lg p-4 text-center">
                        <img
                            src={chicken}
                            alt="chicken kienyeji"
                            className="rounded-lg mb-4 h-[500px] w-full object-cover"
                        />
                        <h3 className="font-semibold text-lg">Kienyeji Chicken</h3>
                        <p className="text-gray-500 text-sm">Served in rich, savoury soup with a burst of flavors.</p>
                    </div>
                    <div className="bg-white shadow rounded-lg p-4 text-center">
                        <img
                            src={dessert}
                            alt="Dessert"
                            className="rounded-lg mb-4 h-[500px] w-full object-cover"
                        />
                        <h3 className="font-semibold text-lg">Sweet Treat</h3>
                        <p className="text-gray-500 text-sm">The perfect ending to your meal.</p>
                    </div>
                </div>
            </section>

            {/* About Preview */}
            <section className="bg-gray-50 py-16">
                <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
                    <img
                        src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=600&q=80"
                        alt="About us"
                        className="rounded-lg shadow-lg w-full h-[500px] object-cover"
                    />
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">About Us</h2>
                        <p className="text-gray-600 mb-4">
                            At Avenue Grill & Restaurant, we believe every meal should be an
                            experience. From the freshest ingredients to our welcoming
                            atmosphere, we’re here to serve you the best.
                        </p>
                        <a
                            href="/about"
                            className="inline-block bg-orange-600 text-white px-6 py-3 rounded-full font-medium hover:bg-orange-400 transition"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </section>

            {/* Gallery Preview */}
            <section className="max-w-6xl mx-auto px-4 py-16">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Gallery</h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-6">
                    <img
                        src={githeri}
                        alt="githeri"
                        className="rounded-lg mb-4 h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] w-full object-cover"
                    />
                    <img
                        src={mukimo}
                        alt="Dish 2"
                        className="rounded-lg mb-4 h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] w-full object-cover"
                    />
                    <img
                        src={pilau}
                        alt="Dish 3"
                        className="rounded-lg mb-4 h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] w-full object-cover"
                    />
                    <img
                        src={ugalifish}
                        alt="Dish 4"
                        className="rounded-lg mb-4 h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] w-full object-cover"
                    />
                </div>
                <div className="text-center mt-8">
                    <a
                        href="/gallery"
                        className="inline-block bg-orange-600 text-white px-6 py-3 rounded-full font-medium hover:bg-orange-400 transition"
                    >
                        View Full Gallery
                    </a>
                </div>
            </section>

            {/* Contact Preview */}
            <section className="bg-gray-100 py-16">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Get in Touch</h2>
                    <p className="text-gray-600 mb-6">
                        Ready to reserve a table or have a question? Reach out to us today!
                    </p>
                    <a
                        href="/contact"
                        className="inline-block bg-orange-600 text-white px-6 py-3 rounded-full font-medium hover:bg-orange-400 transition"
                    >
                        Contact Us
                    </a>
                </div>
            </section>
        </main>
    )
}
