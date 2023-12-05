import { Card } from "./components/Card";
import { Footer, Navbar, Shell } from "./components/layout";
import AbegNa from "./assets/abeg-na.svg";
import TukayBanner from "./assets/tukay-banner.svg";
import TukayCurrencyBlue from "./assets/tukay-currency-blue.svg";
import TukayCurrencyRed from "./assets/tukay-currency-red.svg";

const App = () => {
 return (
  <>
   <Navbar />
   <Shell className="pl-[120px]">
    <div className="flex">
     <div className="w-full">
      <div className="space-y-[36px]">
       <div className="mt-[102px]">
        <h1>Get your urgent 2k</h1>
        <p>No cash, No wahala get our appllication and deal with Sapa</p>
       </div>
       <div className="flex gap-[84px]">
        <div>
         <span className="block">20k+</span>
         <small>Active users</small>
        </div>
        <div>
         <span className="block">30M+</span>
         <small>Download</small>
        </div>
       </div>
      </div>
      <div className="flex gap-[23px] items-center">
       <button className="btn-primary">Get Started</button>
       <a href="#">
        <button className="btn-text">How it Work</button>
       </a>
      </div>
     </div>
     <div className="w-full">
      <img src={AbegNa} alt="" />
     </div>
    </div>
   </Shell>
   <Shell>
    <div className="flex flex-col space-y-[26px]">
     <div className="flex flex-col space-y-[3.6px]">
      <h2>What you stand to benefit.</h2>
      <p>This is how our products works</p>
     </div>
     <div className="flex gap-[86px]">
      <Card
       title="No more Sapa"
       description={`In Nigerian Pidgin English, "Sapa" is sometimes used to describe financial hardship or running out of money.`}
      />
      <Card
       title="Beg"
       description={`In Nigerian Pidgin English, "Sapa" is sometimes used to describe financial hardship or running out of money.`}
      />
      <Card
       title="Send money"
       description={`In Nigerian Pidgin English, "Sapa" is sometimes used to describe financial hardship or running out of money.`}
      />
     </div>
    </div>
   </Shell>

   <section>
    <div
     className="w-full"
     style={{
      background: `url(${TukayBanner})`,
      objectFit: "contain",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "660px"
     }}
    />
   </section>

   <Shell>
    <div className="flex bg-primary">
     <div>
      <h2>Urgent Tukay - the Notes.</h2>
      <p>No cash, No wahala get our appllication and deal with Sapa</p>
     </div>
     <div>
      <img src={TukayCurrencyRed} alt="" />
      <img src={TukayCurrencyBlue} alt="" />
     </div>
    </div>
   </Shell>
   <Footer />
  </>
 );
};

export default App;
