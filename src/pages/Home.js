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
<h1 className="text-4xl md:text-6xl font-bold mb-4">
Welcome to Avenue Grill
</h1>
<p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
Experience the finest grills and authentic flavors in town.
</p>
<a
href="/menu"
className="inline-block bg-red-600 text-white px-6 py-3 rounded-full font-medium hover:bg-red-700 transition"
>
Explore Menu
</a>
</div>
</section>


{/* Placeholder for rest of content */}
<section className="max-w-6xl mx-auto px-4 py-16">
<h2 className="text-2xl font-bold mb-4">Our Specials</h2>
<p className="text-gray-600">More content coming soon...</p>
</section>
</main>
);
}