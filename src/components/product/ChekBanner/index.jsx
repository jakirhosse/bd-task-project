import Image from "next/image";
import React from "react";

const Chckbannar = () => {
  return (
    <div className="relative w-full h-40 md:h-66 lg:h-[200px] overflow-hidden">
      <Image
        src="/checkout-banner.png"
        alt="Checkout Banner"
        layout="fill" // Image will fill the container
        objectFit="contain" // Ensures the image fits without cropping
        priority // Optimizes image loading
      />
    </div>
  );
};

export default Chckbannar;
