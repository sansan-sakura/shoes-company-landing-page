import { useCallback, useEffect, useRef, useState } from "react";

export const Slider = () => {
  const slideParentRef = useRef<HTMLDivElement>(null);
  const slideRef = useRef<HTMLLIElement>(null);

  const [itemWidth, setItemWidth] = useState(0);

  const getWidth = useCallback(() => {
    if (!slideRef.current) return;
    setItemWidth(slideRef.current?.offsetWidth);
  }, [slideRef]);

  useEffect(() => {
    getWidth();
  }, [slideRef, getWidth]);
  console.log(slideParentRef.current?.scrollLeft, itemWidth);

  const onNextSlide = () => {
    if (slideParentRef.current === null) return;
    slideParentRef.current.scrollBy({
      left: -itemWidth,
    });
  };

  const onPrevSlide = () => {
    if (slideParentRef.current === null) return;
    slideParentRef.current.scrollBy({
      left: itemWidth,
    });
  };
  return (
    <div className="relative">
      <button
        className="bg-white w-10 h-10 rounded-full z-10 absolute top-[50%] left-3"
        onClick={onNextSlide}
      >
        <img
          src="/icon-previous.svg"
          className="absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%]"
        />
      </button>
      <button
        onClick={onPrevSlide}
        className="bg-white w-10 h-10 rounded-full z-10 absolute top-[50%] right-3"
      >
        <img
          src="/icon-previous.svg"
          className="absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] rotate-180"
        />
      </button>
      <div
        className="overflow-scroll z-0 snap-mandatory snap-x relative w-screen"
        ref={slideParentRef}
      >
        <ul className="flex w-fit *:w-screen z-0">
          <li className="snap-center" ref={slideRef}>
            <img src="/image-product-1.jpg" />
          </li>
          <li className="snap-center">
            <img src="/image-product-4.jpg" />
          </li>
          <li className="snap-center">
            <img src="/image-product-3.jpg" />
          </li>
        </ul>
      </div>
    </div>
  );
};
