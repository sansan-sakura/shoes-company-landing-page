export const Detail = () => {
  return (
    <div className="flex flex-col items-center gap-6  p-2  align-start pt-10 font-sans">
      <p className="text-orange uppercase font-bold w-full">Sneaker company</p>
      <h3 className="font-bold text-3xl font-main">Fall Limited Edition Sneakders</h3>
      <p className="text-darkGrayishBlue text-base">
        These low-profile sneakers are your perfect casual wear companion. Featuring a durable
        rubber outer sole, they'll withstand everything the weather can offer.
      </p>
      <div className="flex items-center justify-between w-full">
        <span className="flex  items-center gap-4">
          <h4 className="text-3xl font-bold">$125.00</h4>
          <span className="text-base font-bold bg-orange/20 px-2 py-0.5 text-orange rounded">
            50%
          </span>
        </span>

        <p className="text-xl text-grayishBlue font-bold">$250.00</p>
      </div>
    </div>
  );
};
