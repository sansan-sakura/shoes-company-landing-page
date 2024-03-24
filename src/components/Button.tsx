export const Button = () => {
  return (
    <div className="flex flex-col gap-6">
      <input type="number" />
      <button
        type="submit"
        className="bg-orange px-14 py-4 rounded-lg flex gap-2 items-center text-white text-sm font-bold font-main shadow-sm"
      >
        <img src="/icon-cart.svg" className="w-4" />
        Add to Cart
      </button>
    </div>
  );
};
