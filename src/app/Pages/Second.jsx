import React, { useState, useEffect } from 'react';


const Second = () => {
    const [isClient, setIsClient] = useState(false);
    const [time, setTime] = useState(86400);

    useEffect(() => {
        setIsClient(true); // Ensure it's client-side
        const interval = setInterval(() => {
            setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    if (!isClient) return null;

    const formatTime = (seconds) => {
        const days = Math.floor(seconds / 86400).toString().padStart(2, '0');
        const hrs = Math.floor((seconds % 86400) / 3600).toString().padStart(2, '0');
        const mins = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
        return `${days}:${hrs}:${mins}`;
    };

    return (
        <div className="relative w-full overflow-hidden ">
            {/* Background Image */}
            <img src="/Group 81.png" alt="Background Element" className="w-full h-auto opacity-100 mt-50 relative z-10" />

            {/* Digital Clock Display */}
            <div className="absolute top-97 left-1/2 transform -translate-x-1/2 text-white text-[170px] z-1 font-bold px-4 py-2 rounded">
                {formatTime(time)}
            </div>
            <div className="absolute z-10 top-77 left-156 text-red-500 font-light flex flex-row text-6xl space-x-36 items-center">
                HURRY UP!
            </div>
            <div className="absolute z-10 top-89 left-130 text-white font-light flex flex-row text-6xl space-x-36 items-center">
                HACKING STARTS IN...
            </div>
            <div className="absolute z-10 top-137 left-116 text-red-500 font-light flex flex-row text-4xl space-x-36 items-center">
                <p>DAYS</p>
                <p>HOURS</p>
                <p>MINUTES</p>
            </div>

            {/* Rotating Elements */}
            <div className="overflow-hidden">
                <img src="/rotate=0.svg" className="h-340 w-340 absolute -top-13 left-1/2 transform -translate-x-1/2 z-2 spin overflow-hidden pt-8" />
                <img src="/rotate=120.png" className="h-260 w-260 absolute top-20 left-1/2 transform -translate-x-1/2 z-2 spin-slow overflow-hidden mt-7" />
                <img src="/rotate=0.svg" className="h-240 w-240 absolute top-20 left-1/2 transform -translate-x-1/2 z-2 spin overflow-hidden pt-4" />
            </div>

        </div>
    );
};

export default Second;