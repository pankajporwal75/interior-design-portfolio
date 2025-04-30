"use client";
import Image from "next/image";
export default function CatalogueSection() {
    const items = [
        {
            id: "01",
            catagory: "BEDROOM SETUP",
            title: "Cossy Bedroom Setup",
            image: "/image/badroom.jpg",
            description: "family drowing room with a clean and comfortable design for your family.",
        },
        {
            id: "02",
            catagory: "KITCHEN SETUP",
            title: "Neat & Clean Kitchen",
            image: "/image/kitchen1.jpg",
            description: "family drowing room with a clean and comfortable design for your family.",
        },
        {
            id: "03",
            catagory: "DROWING SETUP",
            title: "Family Drowing Room",
            image: "/image/drowing.jpg",
            description: "family drowing room with a clean and comfortable design for your family.",
        },
        {
            id: "04",
            catagory: "LIVING SETUP",
            title: "Clean Family Room",
            image: "/image/living.jpg",
            description: "family drowing room with a clean and comfortable design for your family.",
        },
    ]

    return (
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
                  <p className="text-sm">{item.catagory}</p>
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
      );
}