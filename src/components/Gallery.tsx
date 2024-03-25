import { useState } from "react";

const images = [
  "/image-product-1-thumbnail.jpg",
  "/image-product-2-thumbnail.jpg",
  "/image-product-3-thumbnail.jpg",
  "/image-product-4-thumbnail.jpg",
];

export const Gallery = () => {
  const [activeImage, setActiveImage] = useState(1);
  return (
    <div className="hidden md:flex flex-col gap-10 w-[500px]">
      <div className="p-4">
        <img src={`/image-product-${activeImage}.jpg`} className="w-full rounded-lg" />
      </div>
      <div className="grid grid-cols-4 gap-4 w-full *:w-full *:rounded-lg ">
        {images.map((image, index) => (
          <img
            src={image}
            className="hover:blur-[1px] cursor-pointer"
            key={image}
            onClick={() => {
              if (index === 1) return;
              setActiveImage(index + 1);
            }}
          />
        ))}
      </div>
    </div>
  );
};
