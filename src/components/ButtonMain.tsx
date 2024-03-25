import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const ButtonMain = ({ children }: Props) => {
  return (
    <button
      type="submit"
      className="bg-orange px-14 py-4 rounded-lg flex justify-center gap-2 items-center text-white text-sm font-bold font-main shadow-sm w-full "
    >
      {children}
    </button>
  );
};
