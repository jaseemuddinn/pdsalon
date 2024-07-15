import React from "react";
import img1 from "../../../assets/img1.jpg";

function Hero() {
  return (
    <div>
      <div className="bg-gray-200 min-h-screen flex items-center justify-center">
        <div className="relative flex items-center justify-center w-full h-screen bg-[#d2d0bb]">
          <div className="absolute left-10 md:left-20 md:top-1/5 top-1/4 z-10">
            <p>WELCOME</p>
            <h1 className="md:text-8xl text-5xl font-bold leading-tight">
              Your <br />
              PD's <br />
              Salon
            </h1>
            <button className="mt-8 bg-[#7b9d87] font-bold text-white py-4 px-8 rounded">
              Check Availability
            </button>
          </div>
          
          <div className="hidden md:block">
            <div className="absolute inset-x-1/3 bottom-40 w-80 h-80 z-20">
              <img
                src={img1}
                alt="Decor"
                className="object-cover w-full h-full shadow-lg"
              />
            </div>
            <img
              src={img1}
              alt="Background"
              className="absolute right-0 top-0 w-1/2 h-full object-cover z-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
