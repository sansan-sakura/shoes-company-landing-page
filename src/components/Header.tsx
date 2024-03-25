import { useState } from "react";

import { ButtonMain } from "./ButtonMain";

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  return (
    <>
      <header className="flex items-center justify-between px-10 py-6 *:flex *:items-center *:gap-4 z-10 relative border border-black">
        <div>
          <button onClick={() => setOpenMenu((prev) => !prev)}>
            <img src="/icon-menu.svg" className="w-6" />
          </button>

          <h1 className="text-4xl font-bold font-main text-darkBlue">sneakers</h1>
        </div>
        <div>
          <button onClick={() => setOpenCart((prev) => !prev)}>
            <img src="/icon-cart.svg" className="invert" />
          </button>
        </div>

        <img src="/image-avatar.png" className="w-10" />
      </header>
      {openMenu && (
        <div className="z-[100] fixed top-0 left-0 bg-slate-600/50 w-screen">
          <div className="bg-white min-h-screen w-fit px-10 py-28 relative">
            <button onClick={() => setOpenMenu((prev) => !prev)}>
              <img src="/icon-close.svg" className="absolute top-10 left-10 w-5" />
            </button>
            <ul className="font-main text-xl font-bold mr-28">
              <li className="py-4">
                <a href="#">Colections</a>
              </li>
              <li className="py-4">
                <a href="#">Men</a>
              </li>
              <li className="py-4">
                <a href="#">Women</a>
              </li>
              <li className="py-4">
                <a href="#">About</a>
              </li>
              <li className="py-4">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      )}
      {openCart && (
        <div className="bg-white absolute top-28 left-0 right-0 z-[100] shadow-2xl w-[90%] mx-auto rounded-xl">
          <div className="px-10 pt-4">
            <h4 className="font-main font-bold text-lg mb-6 ">Cart</h4>
          </div>

          <div className="border-0 border-t border-solid border-b-gray-500">
            <div className="px-4 py-6 ">
              <div className="py-6 flex gap-6">
                <img src="/image-product-1-thumbnail.jpg" className="w-24 rounded-md" />
                <div className="font-main flex flex-col gap-3 text-lg mx-auto">
                  <p className="text-xl">Fall Limited Edition Sneakders</p>
                  <p className="text-gray-400 flex justify-between">
                    $125.00 x 3 <span className="text-gray-800">$375.00</span>
                  </p>
                </div>
                <button>
                  <img src="/icon-delete.svg" className="w-5 mr-6" />
                </button>
              </div>
              <ButtonMain>Checkout</ButtonMain>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
