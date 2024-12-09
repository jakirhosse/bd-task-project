import React from "react";
import Image from "next/image";

const ItemPage = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="flex justify-center">
          <Image
            src="/item.png" // Fixed path
            alt="Image 1"
            width={300}
            height={200}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="flex justify-center">
          <Image
            src="/item2.png" // Fixed path
            alt="Image 2"
            width={300}
            height={200}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
