import { HTMLAttributes } from "react";
import Logo from "../assets/tukaylogo.svg";
import FooterBanner from "../assets/footer-urgent-2k.svg";

interface ShellProps extends HTMLAttributes<HTMLElement> {}
export const Shell = ({
 className = "px-[120px]",
 children,
 ...rest
}: ShellProps) => {
 return (
  <section className={`container ${className}`} {...rest}>
   {children}
  </section>
 );
};

const navbarMenus = [
 {
  href: "/",
  title: "Home",
  active: true
 },
 {
  href: "#service",
  title: "Service"
 },
 {
  href: "#features",
  title: "Features"
 },
 {
  href: "#contact",
  title: "Contact"
 }
];
export const Navbar = () => {
 return (
  <header className="px-[120px] pt-[25px] font-sans">
   <div className="flex flex-col md:flex-row items-center justify-between">
    <span>
     <img src={Logo} alt="" />
    </span>
    <div className="flex items-center gap-[52px]">
     {navbarMenus.map((menu, i) => (
      <a
       className={`${
        menu.active ? "text-black" : "text-content"
       } font-medium text-lg`}
       href={menu.href}
       key={i}
      >
       {menu.title}
      </a>
     ))}
    </div>
    <div className="flex gap-[36px]">
     <button className="btn-primary">Login</button>
     <button className="btn-outline">Signup</button>
    </div>
   </div>
  </header>
 );
};

export const Footer = () => {
 return (
  <footer className="bg-secondary text-white">
   <div className="flex items-center gap-16">
    <img src={FooterBanner} alt="" />
    <div className="flex">
     <div className="flex">
      <div className="flex space-x-[33px]">
       <p>
        Urgent Tukay - the Notes. No cash, No wahala get our appllication and
        deal with Sapa
       </p>
       <div className="flex gap-[59.4px]">
        <div>App</div>
        <div>About</div>
        <div>Resources</div>
       </div>
      </div>
     </div>
    </div>
   </div>
  </footer>
 );
};
