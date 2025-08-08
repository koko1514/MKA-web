import { useState, useEffect } from "react";
import Logo from "../../Element/Logo";
import NavMenu from "../../Fragment/NavMenu";
import NavIcons from "../../Fragment/NavIcons";
import Button from "../../Element/Button";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        // Scroll Down
        setShowNavbar(false);
      } else {
        // Scroll Up
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <nav
      className={`font-lato fixed w-7/10 z-50 bg-white text-black px-4 py-2 rounded-full mt-4 flex items-center justify-between shadow-xl/30 left-1/2 transform -translate-x-1/2 transition-all duration-500 ease-in-out ${
        showNavbar
          ? "translate-y-0 opacity-100 blur-0"
          : "-translate-y-20 opacity-0 blur-md"
      }`}
    >
      <div className="flex items-center space-x-8">
        <Logo />
        <NavMenu />
      </div>
      <div className="flex items-center space-x-4">
        <NavIcons />
        <Button to="/contactus">Contact Us</Button>
      </div>
    </nav>
  );
};

export default Navbar;
