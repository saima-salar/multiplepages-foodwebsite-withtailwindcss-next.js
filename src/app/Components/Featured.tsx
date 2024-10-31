
import React from "react";
import Dash from "./Dash";

const Featured = () => {
  return (
    <div className="container pt-0 my-0 mx-2">
   
      <h2 className="text-6xl font-bold">Our</h2>
      <h2 className="text-6xl font-bold pt-2">
        Featured <span className="text-accent">Food</span>
      </h2>

      <p className="max-w-[550px] pt-10 text-gray-700">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa placeat
        repellat expedita tempore hic iste. Laborum odit illo ex nostrum! Lorem
        ipsum dolor sit amet.
      </p>

      <Dash />
   
      
    </div>
  );
};

export default Featured;