import React from "react";
function About() {
  return (
    <div className="bg-gray-100 flex items-center justify-center md:px-32">
      <div className="w-full md:w-4/5 flex flex-col md:flex-row items-center justify-center p-5 text-justify md:p-16 md:gap-20  rounded-lg">
        <div className="hidden md:block justify-center">
          <img
            className="md:hidden rounded-xl hidden lg:block w-[2000px]"
            src="https://images.nightcafe.studio/jobs/QjHFjQJFXSkk11LXBZ8m/QjHFjQJFXSkk11LXBZ8m--1--d2krz.jpg?tr=w-1600,c-at_max"
            alt="salon"
          />
        </div>
        <div className="">
          <p className="text-center md:text-left text-green-900 font-semibold">You Own Salon</p>
          <h2 className="text-center md:text-left text-4xl font-bold">Welcome to PD Salon</h2>
          <h1 className="text-justify text-sm">
            <br /><br />
            IRADA Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            reiciendis omnis officia natus in illo? Architecto minus quos fugiat,
            <br /><br />
            accusantium repellendus laboriosam cum excepturi, alias rerum nesciunt
            dolorum deserunt earum. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. 
          </h1>
        </div>
      </div>
    </div>
  );
}

export default About;
