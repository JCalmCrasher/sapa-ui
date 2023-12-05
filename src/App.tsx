import { Card } from "./components/Card";
import { Navbar, Shell } from "./components/layout";

const App = () => {
 return (
  <>
   <Navbar />
   <Shell>
    <div className="flex">
     <div className="w-full">
      <div className="space-y-[36px]">
       <div>
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
      <div className="flex gap-[23px]">
       <button>Get Started</button>
       <button>How it Work</button>
      </div>
     </div>
     <div className="w-full">image goes here</div>
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
  </>
 );
};

export default App;
