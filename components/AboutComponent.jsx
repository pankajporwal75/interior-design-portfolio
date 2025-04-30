import Image from "next/image";

export default function AboutComponent() {
    return (
        <div className="container py-16">
            <div className="flex items-center justify-between pb-4">
                <h1 className="py-4 text-3xl font-semibold leading-tight text-gray-800 lg:text-5xl" href="">OUR GOAL</h1>
            </div>
            <div className="grid lg:grid-cols-2 place-items-center ">
                <div>
                    <Image src="/image/aboutfront.png" width={900} height={500} alt="" className="max-md:hidden" />
                </div>

                <div className="items-center">
                    <p className="px-12 pb-4 text-gray-700">
                        We believe that great design transforms spaces and elevates everyday living. With a passion for aesthetics and a commitment to functionality, we specialize in creating interiors that reflect your personality, meet your lifestyle needs, and inspire comfort and creativity.
                    </p>

                    <p className="px-12 pb-4 text-gray-700">
                        From cozy bedrooms to dynamic living areas, elegant kitchens to inviting drawing rooms, our designs blend timeless style with modern sensibilities.
                    </p>

                    <p className="px-12 pb-4 text-gray-700">
                        Our team brings a keen eye for detail, a deep understanding of spatial harmony, and a dedication to quality craftsmanship.
                    </p>

                    <p className="px-12 pb-4 text-2xl font-bold text-gray-700">
                        Let’s design something beautiful together.
                    </p>
                </div>
            </div>
        </div>
    );
}