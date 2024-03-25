import { useState } from "react";

import { ButtonMain } from "./ButtonMain";

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  const menuLIsts = ["Collections", "Men", "Women", "About", "Contact"].map((item) => (
    <li
      className="py-4 md:py-0 hover:text-black transition duration-200  border-0 border-b-4 border-solid hover:border-b-orange border-b-transparent"
      key={item}
    >
      <a href="#" className="block pb-10">
        {item}
      </a>
    </li>
  ));

  return (
    <>
      <header className="flex items-center justify-between px-10 md:px-4 py-8 md:pt-10 md:pb-0  *:flex *:items-center *:gap-4 z-10 relative border-0 border-b-2 border-solid border-b-stone-200">
        <div className="h-full">
          <button onClick={() => setOpenMenu((prev) => !prev)} className="md:hidden">
            <img src="/icon-menu.svg" className="w-6" />
          </button>

          <h1 className="text-4xl lg:text-5xl font-bold font-main text-darkBlue ml-4 md:ml-0 md:mr-6 pb-10">
            sneakers
          </h1>
          <ul className="hidden md:flex font-main font-bold gap-6 items-end mt-auto text-gray-500 ">
            {menuLIsts}
          </ul>
        </div>
        <div>
          <div>
            <button onClick={() => setOpenCart((prev) => !prev)}>
              <img src="/icon-cart.svg" className="invert" />
            </button>
          </div>

          <img src="/image-avatar.png" className="w-10 ml-4" />
        </div>
      </header>
      {openMenu && (
        <div className="z-[100] fixed top-0 left-0 bg-slate-600/50 w-screen">
          <div className="bg-white min-h-screen w-fit px-10 py-28 relative">
            <button onClick={() => setOpenMenu((prev) => !prev)}>
              <img src="/icon-close.svg" className="absolute top-10 left-10 w-5" />
            </button>
            <ul className="font-main text-xl font-bold mr-28">{menuLIsts}</ul>
          </div>
        </div>
      )}
      {openCart && (
        <div className="bg-white absolute top-28 left-0 right-0 z-[100] shadow-2xl w-[90%] md:w-[400px] md:left-auto md:right-16 md:top-36  mx-auto rounded-xl">
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
