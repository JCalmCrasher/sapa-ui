import { ReactNode } from "react";

interface Card {
  title: string;
  description: string;
  icon: string;
}
const Card = ({ title, description, icon }: Card) => {
  return (
    <div className="flex flex-col items-center justify-center bg-white w-[264px] h-[342px] px-[26px] text-center text-sm text-text-dark md:w-[364px]" >
      <img src={icon} alt={icon} />
      <h3 className="mt-4 text-xl">{title}</h3>
      <p className="w-[258px]">{description}</p>
    </div>
  );
};

export { Card };
