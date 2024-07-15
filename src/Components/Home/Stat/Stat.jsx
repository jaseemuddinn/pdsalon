import React from "react";
import img from "../../../assets/img1.jpg";
import img3 from "../../../assets/img3.jpg";
import Circle from "./Circle";

function Stat() {
  return (
    
    
      
      <div className="flex flex-wrap justify-center gap-20 items-center mt-0 bg-gray-100">
        <div className="px-4 md:px-0">
          <p className="mb-10 md:mb-20 text-[#7b9e87] font-bold text-3xl md:text-5xl">
            Take a Deep Breath <br />
            Inhale Peace <br />
            Exhale Happiness
          </p>
          
          <div className="hidden md:block relative md:inset-x-3/4 z-20 rounded-xl shadow-2xl">
          
            <img
              className="rounded-xl shadow-2xl mb-20 hidden md:block"
              width={"400px"}
              src={img}
              alt="salon"
            />
          </div>
          <div className="flex flex-wrap mt-10 gap-10 md:gap-20 mr-10 font-semibold text-3xl">
            <div className="">
              <h1 className="font-bold">1000</h1>
              <p className="text-sm">Happy Clients</p>
            </div>
            <div>
              <h1 className="font-bold">2</h1>
              <p className="text-sm">Outlets</p>
            </div>
            <div>
              <h1 className="font-bold">20+</h1>
              <p className="text-sm">Services</p>
            </div>
          </div>
        </div>
        <div className="">
          <img src={img3} alt="" className="h-full object-cover rounded-lg hidden md:block" />
          <button className="mt-0 md:mt-10 mb-20 text-white font-bold rounded px-16 py-4 bg-[#7b9e87]">
            Book Now
          </button>
        </div>
      </div>
  );
}

export default Stat;
