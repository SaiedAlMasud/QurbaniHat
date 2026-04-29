import React from 'react';
import Image from "next/image";
import bannerImage from "@/assets/banner-bg.jpg"

const Banner = () => {
    return (
        <div className="relative w-full h-125 rounded-lg overflow-hidden my-10 sm:mx-8">
            <Image
                src={bannerImage}
                alt="Banner background"
                fill
                className="object-cover rounded-lg"
                priority
                quality={100}
            />

            <div className="absolute inset-0 bg-black/40"></div>

            <div className="relative h-full flex flex-col justify-center items-start text-white ml-10 px-4 z-10 ">
                <div className="">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Secure Your Qurbani <br></br>
                        Simple,  Trusted,  Quality <br></br>
                        Livestock Booking
                    </h1>
                    <button className="bg-green-700 hover:bg-white hover:text-green-700 mt-10 text-white font-semibold px-8 py-3 rounded-lg">
                        Browse Animals
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;