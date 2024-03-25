import { useState } from "react";
import { ButtonMain } from "./ButtonMain";

export const Buttons = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="py-4 px-10 bg-lightGrayishBlue rounded-lg flex justify-between">
        <button onClick={() => (count > 0 ? setCount((prev) => prev - 1) : null)}>
          <img src="/icon-minus.svg" />
        </button>
        <p className="font-bold font-main text-base">{count}</p>
        <button onClick={() => setCount((prev) => prev + 1)}>
          <img src="/icon-plus.svg" />
        </button>
      </div>
      <ButtonMain>
        <img src="/icon-cart.svg" className="w-4" />
        Add to Cart
      </ButtonMain>
    </div>
  );
};
