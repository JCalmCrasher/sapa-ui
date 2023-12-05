interface CardProps {
 title: string;
 description: string;
 icon: string;
}
const Card = ({ title, description, icon }: CardProps) => {
 return (
  <div className="flex flex-col items-center justify-center bg-white px-[25.72px] text-center text-sm text-text-dark space-y-[26.24px] rounded-[20px] py-[59.05px] md:w-[364px] h-[342px]">
   <img src={icon} alt={icon} />
   <div className="space-y-[5.66px]">
    <h3 className="font-medium text-xl">{title}</h3>
    <p className="w-[258px] opacity-[0.8]">{description}</p>
   </div>
  </div>
 );
};

export { Card };
