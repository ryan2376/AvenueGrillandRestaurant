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
            <section className="relative h-[40vh] bg-orange-600 flex items-center justify-center text-white">
                <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
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
                        <li><strong>📍 Address:</strong> Meru, Kenya</li>
                    </ul>

                    {/* Google Maps */}
                    <div className="mt-6">
                        <iframe
                            title="Google Maps"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.672776748895!2d37.6502!3d0.0463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18256389c0a0e2c5%3A0x9f0f1df676a9a65a!2sMeru!5e0!3m2!1sen!2ske!4v1694160000000!5m2!1sen!2ske"
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
