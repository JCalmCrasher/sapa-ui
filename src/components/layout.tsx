import { HTMLAttributes } from "react";

interface ShellProps extends HTMLAttributes<HTMLElement> {}
export const Shell = ({
 className = "mx-[120px]",
 children,
 ...rest
}: ShellProps) => {
 return (
  <section className={className} {...rest}>
   {children}
  </section>
 );
};

const navbarMenus = [
 {
  href: "/",
  title: "Home"
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
  <div className="flex items-center justify-between mx-[120px] mt-[52px]">
   <span>logo</span>
   <div className="flex items-center gap-[52px]">
    {navbarMenus.map((menu, i) => (
     <a href={menu.href} key={i}>
      {menu.title}
     </a>
    ))}
   </div>
   <div className="flex gap-[36px]">
    <button>Login</button>
    <button>Signup</button>
   </div>
  </div>
 );
};
