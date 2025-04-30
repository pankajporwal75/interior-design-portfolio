"use client";
import Image from "next/image";
import { TbArrowUpRight } from "react-icons/tb";
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


export default function CatalogSwiperSection() {

    return (
        <div className="py-8 lg:py-28">
            <div className="container grid pb-8 lg:grid-cols-2">
                <div className="text-left ">
                <h1 className="py-4 text-3xl font-semibold leading-tight text-gray-800 lg:text-5xl" href="">MODERN CLASSICS</h1>
                </div>
                <div>
                    <h2 className="pb-6 text-xl font-semibold tracking-wider">LUXURY DECOR TO CREATE COMFORT IN OUR HOME</h2>
                    <div className="grid grid-cols-2 text-gray-700 gap-x-8">
                        <div>
                            <p>
                                With our passion for design and decor, we have created a collection of furniture and accessories that will help you create a comfortable and stylish home.
                            </p>
                        </div>
                        <div>
                            <p>
                                We create distinctive and unique designs that are inspired by the latest trends in interior design and fashion.
                            </p>
                        </div>
                        <a href="/gallery" className="inline-flex items-center pt-4 text-lg font-bold text-black underline">View Gallery <TbArrowUpRight /> </a>
                    </div>
                </div>
            </div>

            <Swiper
                loop={true}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                autoplay={{ delay: 1500, disableOnInteraction: false }}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={1}
                coverflowEffect={{
                   rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Image src="/image/swiper1.jpg" alt="LOGO" width={520} height={240} className="w-full" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/image/swiper2.jpg" alt="LOGO" width={520} height={220} className="w-full" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/image/swiper3.jpg" alt="LOGO" width={520} height={220} className="w-full" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/image/swiper4.jpg" alt="LOGO" width={520} height={220} className="w-full" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/image/swiper5.jpg" alt="LOGO" width={520} height={220} className="w-full" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}