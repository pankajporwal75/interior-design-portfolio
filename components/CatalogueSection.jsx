"use client";
import Image from "next/image";
export default function CatalogueSection() {
  const items = [
    {
        id: "01",
        category: "BEDROOM SETUP",
        title: "Cosy Bedroom Setup",
        image: "/image/badroom.jpg",
        description: "A warm and inviting bedroom setup designed for relaxation, privacy, and comfort with stylish accents.",
    },
    {
        id: "02",
        category: "KITCHEN SETUP",
        title: "Neat & Clean Kitchen",
        image: "/image/kitchen1.jpg",
        description: "An elegant kitchen setup with modern appliances and a clean layout for seamless cooking experiences.",
    },
    {
        id: "03",
        category: "DRAWING SETUP",
        title: "Family Drawing Room",
        image: "/image/drowing.jpg",
        description: "A stylish and spacious drawing room that combines comfort and elegance—perfect for hosting guests or relaxing with family.",
    },
    {
        id: "04",
        category: "LIVING SETUP",
        title: "Clean Family Room",
        image: "/image/living.jpg",
        description: "A cozy and well-lit living room featuring contemporary decor, ideal for family gatherings and entertainment.",
    },
]


    return (
        <div>
          <h1 className="py-10 text-center text-3xl font-semibold leading-tight text-gray-800 lg:text-5xl">PLAN YOUR PERFECT HOME</h1>
          <div className="grid gap-8 divide-gray-300 lg:divide-x lg:gap-0 lg:grid-cols-4 md:grid-cols-2">
            {items.map((item) => (
              <div key={item.id} className="relative overflow-hidden group">
                {/* Image */}
                <Image
                  src={item.image}
                  width={380}
                  height={100}
                  alt=""
                  className="w-full transition duration-500 group-hover:scale-105"
                />
      
                {/* Overlay + Card - visible by default, hidden on hover */}
                <div className="absolute bottom-0 p-8 m-12 bg-white bg-opacity-60 backdrop-blur transition-opacity duration-500 group-hover:opacity-0 group-hover:pointer-events-none">
                  <div className="flex justify-between pb-4">
                    <p className="text-sm">{item.category}</p>
                    <span className="text-sm">{item.id}</span>
                  </div>
                  <a className="block text-xl font-semibold" href="">
                    {item.title}
                  </a>
                  <p className="py-4 text-gray-500">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
}