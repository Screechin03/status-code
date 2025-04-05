"use client";
import { useEffect, useState, useRef } from "react";
import Head from "next/head";
import { Inter, Tiny5 } from "next/font/google";
import Navbar from "./Navbar";
import Second from "./Second";
import Third from "./Third";
import Prizes from "./Prizes";
import Tracks from "./Tracks";



const inter = Inter({ subsets: ["latin"] });
const tiny = Tiny5({ subsets: ["latin", "greek"], weight: "400" });

export default function Home() {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.5;
        }
    }, []);
    return (
        <div className="relative flex flex-col gap-3 bg-blue-700 min-h-screen w-screen bg-cover bg-center"

            style={{
                background: "linear-gradient(to bottom, #063254 0%, #004484 29%, #004484 71%, #01193D 96%)",
            }}
        >
            {/* 🎥 Background Video */}
            <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-1  opacity-100 mix-blend-screen"
            >
                <source src="/537d97592d242580cfeedf0083ac44a75d06f8e4.mp4" type="video/mp4" />
            </video>

            {/* 🔹 Optional Overlay for Stronger Blue Effect */}
            <div className="absolute top-0 left-0 w-full h-full bg-[#063254]/70 z-[1] pointer-events-none"></div>

            {/* 🔹 Background Floating Elements */}
            <img src="/Group 85.png" alt="Background Element" className="w-8 absolute top-35 left-28 h-8 z-[2]" />
            <img src="/Group 87.png" alt="Background Element" className="w-7 absolute top-75 right-67 h-7 z-[2]" />
            <img src="/Group 86.png" alt="Background Element" className="w-6 absolute top-103 right-157 h-6 z-[2]" />
            <img src="/Comet.svg" alt="Background Element" className="w-34 absolute top-20 right-24 h-34 z-[2]" />
            <img src="/Group 129.svg" alt="Background Element" className="w-10 absolute top-140 right-24 h-10 opacity-80 z-[2]" />

            {/* Navbar */}
            <div className="relative z-[3]">
                <Navbar />
            </div>

            {/* Main Content */}
            <div className="relative flex flex-col items-center justify-center min-h-screen text-white font-ticketing mt-19 z-[3] pb-32">

                <Head>
                    <title>Status Code 2</title>
                </Head>

                <img src="/Vector (1).svg" className="mb-4" />
                <p className="mt-2 text-2xl bg-gradient-to-r from-[#BAF7FF] to-white text-transparent bg-clip-text">
                    Code with Purpose & Innovate, Collaborate, Dominate
                </p>

                {/* CTA Button */}
                <button className="mt-4 relative z-[3]">
                    <img
                        src="/Cta Button.png"
                        alt="Call to Action"
                        className="w-74 h-15 transition-transform duration-300 hover:scale-105"
                    />
                </button>

                {/* Floating Ghost + More Elements */}
                <div className="-mt-25 relative flex flex-col items-center justify-center w-full z-[3]">
                    <div className="absolute inset-0 w-full h-full z-[2]">
                        <img src="/Group 58.png" alt="Background Element" className="w-full absolute top-74 h-auto opacity-50" />
                        <img src="/Group 56.png" alt="Background Element" className="w-37 h-37 absolute top-70 left-42 opacity-90" />
                        <img src="/Group 131.png" alt="Background Element" className="w-23 h-30 absolute top-80 right-97 opacity-80" />
                        <img src="/Group 134.svg" alt="Background Element" className="w-34 h-34 absolute top-53 right-122 opacity-100" />
                        <img src="/Group 136.png" alt="Background Element" className="w-25 h-20 absolute top-98 right-110 opacity-80" />
                        <img src="/Group 56.png" alt="Background Element" className="w-20 h-15 absolute top-84 left-110 opacity-80" />
                        <img src="/Group 57.png" alt="Background Element" className="w-32 h-32 absolute top-84 right-30 mix-blend-difference opacity-80 " />

                        <p className="mt-128 bg-gradient-to-r from-[#A5FECB] to-[#A5FECB] via-[#92EFFD] text-transparent bg-clip-text text-xl font-ticketing mx-34 text-center opacity-100 absolute z-10 ">
                            Unleash your creativity and join Status Code 2, the ultimate 36-hour hackathon extravaganza! Compete across diverse categories, showcasing your skills, ingenuity, and collaborative spirit alongside like-minded individuals. Discover the perfect platform to challenge yourself.
                        </p>


                    </div>

                    {/* Levitating Ghost */}
                    <img
                        src="/Levitaing Ghost.svg"
                        alt="Levitating Ghost"
                        className="w-135 h-130 animate-[wiggle_5s_ease-in-out_infinite] relative z-[3]"
                    />
                </div>

            </div>

            <Second />

            <Third />

            <Prizes />

            <Tracks />


        </div >
    );
}
