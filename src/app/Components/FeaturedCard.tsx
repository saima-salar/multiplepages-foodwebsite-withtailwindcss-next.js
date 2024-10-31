import Image from "next/image";
import React from 'react'
import Dash from "./Dash";

const FeaturedCard = () => {
  return (
    <div className="grid md:grid-cols-[1fr,37%,1fr] gap-16 mt-10">
    <div className="w-fit mx-auto self-end">
      <Image
        className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl"
        src="/grid__1.png"
        width={300}
        height={600}
        alt="grid image"
      />

      <div className="space-y-4">
        <Dash />
        <h2 className="font-medium text-xl">Shrimp Salad</h2>
        <p className="text-gray-700 text-[14px] xl:text-[16px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dignissimos, nesciunt distinctio.
        </p>
      </div>
    </div>
    <div className="w-fit mx-auto">
      <Image
        className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl"
        src="/grid__2.png"
        width={500}
        height={900}
        alt="grid image"
      />

      <div className="space-y-4">
        <Dash />
        <h2 className="font-medium text-xl">Baked apples</h2>
        <p className="text-gray-700 text-[14px] xl:text-[16px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dignissimos, nesciunt distinctio.
        </p>
      </div>
    </div>
    <div className="w-fit mx-auto self-end">
      <Image
        className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl"
        src="/grid__3.png"
        width={300}
        height={600}
        alt="grid image"
      />

      <div className="space-y-4">
        <Dash />
        <h2 className="font-medium text-xl">Cherries chicken</h2>
        <p className="text-gray-700 text-[14px] xl:text-[16px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dignissimos, nesciunt distinctio.
        </p>
      </div>
    </div>
  </div>
  )
}

export default FeaturedCard