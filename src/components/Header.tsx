export const Header = () => {
  return (
    <header className="flex items-center justify-between px-10 py-6 *:flex *:items-center *:gap-4">
      <div>
        <img src="/icon-menu.svg" className="w-6" />
        <h1 className="text-4xl font-bold font-main text-darkBlue">sneakers</h1>
      </div>
      <div>
        <img src="/icon-cart.svg" className="invert" />
        <img src="/image-avatar.png" className="w-10" />
      </div>
    </header>
  );
};
