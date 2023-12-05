import { Card } from "./components/Card";
import { Footer, Navbar, Shell } from "./components/layout";
import AbegNa from "./assets/abeg-na.svg";
import TukayBanner from "./assets/tukay-banner.svg";
import TukayCurrencyBlue from "./assets/tukay-currency-blue.svg";
import TukayCurrencyRed from "./assets/tukay-currency-red.svg";
import NoMoreSapa from "./assets/no-more-sapa.svg";
import Beg from "./assets/beg.svg";
import SendMoney from "./assets/send-money.svg";

const stats = [
 {
  number: "20k+",
  label: "Active users"
 },
 {
  number: "30M+",
  label: "Download"
 }
];
const App = () => {
 return (
  <>
   <Navbar />
   <Shell className="pl-4 md:pl-[120px]">
    <div className="flex flex-col md:flex-row">
     <div className="w-full">
      <div className="space-y-[49px]">
       <div className="flex flex-col space-y-[14px] mt-[102px]">
        <h1 className="font-bold text-[64px] leading-[77px]">
         Get your urgent 2k
        </h1>
        <p className="text-2xl max-w-[600px]">
         No cash, No wahala get our appllication and deal with Sapa
        </p>
       </div>
       <div className="space-y-[25px]">
        <div className="flex font-sans gap-[70px]">
         {stats.map((stat, i) => (
          <Stat label={stat.label} number={stat.number} key={i} />
         ))}
        </div>
        <div className="flex gap-[23px] items-center">
         <button className="btn-primary">Get Started</button>
         <a href="#">
          <button className="btn-text">How it Work</button>
         </a>
        </div>
       </div>
      </div>
     </div>

     <img src={AbegNa} alt="abeg nau" />
    </div>
   </Shell>
   <Shell className="px-0 mb-[31px] py-[34px]">
    <div className="flex flex-col space-y-[26px]">
     <div className="flex flex-col space-y-[3.6px] pb-[26px]">
      <h2 className="font-medium text-center text-[40px]">
       What you stand to benefit.
      </h2>
      <p className="text-center">This is how our products works</p>
     </div>
     <div className="flex flex-col md:flex-row justify-center gap-[86px]">
      <Card
       title="No more Sapa"
       description={`In Nigerian Pidgin English, "Sapa" is sometimes used to describe financial hardship or running out of money.`}
       icon={NoMoreSapa}
      />
      <Card
       title="Beg"
       description={`In Nigerian Pidgin English, "Sapa" is sometimes used to describe financial hardship or running out of money.`}
       icon={Beg}
      />
      <Card
       title="Send money"
       description={`In Nigerian Pidgin English, "Sapa" is sometimes used to describe financial hardship or running out of money.`}
       icon={SendMoney}
      />
     </div>
    </div>
   </Shell>

   <Shell className="px-0">
    <div
     className="w-full h-[150px] sm:h-[300px] lg:h-[660px]"
     style={{
      background: `url(${TukayBanner})`,
      objectFit: "contain",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      // height: "660px"
     }}
    />
   </Shell>

   <Shell className="md:pl-[88px] px-4">
    <div className="flex flex-col md:flex-row items-center justify-between bg-primary pb-[180px]">
     <div className="flex flex-col space-y-[30px]">
      <h2 className="font-medium text-[40px]">Urgent Tukay - the Notes.</h2>
      <p className="text-2xl max-w-[600px]">
       No cash, No wahala get our appllication and deal with Sapa
      </p>
      <button className="btn-primary w-fit">Get Started</button>
     </div>
     <div>
      <img src={TukayCurrencyRed} alt="gimme tukay na" />
      <img
       className="absolute translate-y-[-300px] md:translate-x-[-11rem]"
       src={TukayCurrencyBlue}
       alt="gimme tukay na"
      />
     </div>
    </div>
   </Shell>
   <Footer />
  </>
 );
};

export default App;

interface StatProps {
 number?: string;
 label: string;
}
const Stat = ({ label, number = "0" }: StatProps) => {
 return (
  <div>
   <span className="block font-bold text-2xl">{number}</span>
   <small className="font-normal text-content text-xs">{label}</small>
  </div>
 );
};
