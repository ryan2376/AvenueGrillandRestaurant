// src/pages/Contact.js
import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message sent! (We’ll hook this up later to backend/email service)");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <main>
            {/* Hero Section */}
            <section
                className="relative h-[50vh] bg-cover bg-center flex items-center justify-center"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1600&q=80')",
                }}
                
            >
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-3xl md:text-6xl font-bold mb-4">
                        Contact Us
                    </h1>
                    <p className="text-base md:text-xl mb-6 max-w-2xl mx-auto">
                        Experience the finest grills and authentic flavors in town.
                    </p>
                
                </div>
            </section>

            {/* Contact Info + Form */}
            <section className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div>
                    <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                    <p className="mb-4 text-gray-600">
                        We’d love to hear from you! Reach us using the details below or
                        send us a quick message.
                    </p>
                    <ul className="space-y-4 text-gray-700">
                        <li><strong>📞 Phone:</strong> +254 700 123 456</li>
                        <li><strong>📧 Email:</strong> info@avenuegrill.com</li>
                        <li><strong>📍 Address:</strong>  Located on 1st floor of Avenue Mall, above Selenite Supermarket along the Meru-Nairobi highway!</li>
                    </ul>

                    {/* Google Maps */}
                    <div className="mt-6">
                        <iframe
                            title="Google Maps"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17766.41746675639!2d37.650978335177065!3d0.044585443695301465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x178821d2c7265cd7%3A0xa9ca854b6a0bc0c8!2sAvenue%20Grill%20and%20Restaurant%2C%20Gitimbine!5e0!3m2!1sen!2ske!4v1757584345677!5m2!1sen!2ske" 
                            width="100%"
                            height="250"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>

                {/* Contact Form */}
                <div>
                    <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-4 bg-white shadow-lg rounded-lg p-6"
                    >
                        <div>
                            <label className="block mb-2 font-medium">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 font-medium">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 font-medium">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="5"
                                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="bg-orange-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-400 transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </section>
        </main>
    );
}
