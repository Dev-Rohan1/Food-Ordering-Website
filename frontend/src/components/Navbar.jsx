import { Menu, ShoppingBasket, Sun, X } from "lucide-react";
import { useState } from "react";
import { assets } from "../assets/assets";
import { Button } from "./ui/button";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="border-b sticky top-0 bg-white z-50">
      <nav className="flex items-center justify-between py-4">
        {/* Logo */}
        <div>
          <img
            className="w-[120px] md:w-[150px]"
            src={assets.logo}
            alt="logo"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center space-x-8">
          {/* {navLinks.map((id) => (
            <li
              key={id}
              onClick={() => setMenu(id)}
              className={getNavItemClasses(id)}
            >
              {id.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
            </li>
          ))} */}
          <li onClick={() => setMenu("home")}>
            <a
              className={`text-gray-700 hover:text-red-500 transition-colors ${
                menu === "home"
                  ? "text-red-500 font-medium after:content-[''] after:block after:h-[2px] after:rounded-full after:bg-red-500 after:transition-all after:w-full"
                  : ""
              } cursor-pointer`}
              href="#home"
            >
              Home
            </a>
          </li>
          <li onClick={() => setMenu("our-menu")}>
            <a
              className={`text-gray-700 hover:text-red-500 transition-colors ${
                menu === "our-menu"
                  ? "text-red-500 font-medium after:content-[''] after:block after:h-[2px] after:rounded-full after:bg-red-500 after:transition-all after:w-full"
                  : ""
              } cursor-pointer`}
              href="#our-menu"
            >
              Our Menu
            </a>
          </li>
          <li onClick={() => setMenu("foods")}>
            <a
              className={`text-gray-700 hover:text-red-500 transition-colors ${
                menu === "foods"
                  ? "text-red-500 font-medium after:content-[''] after:block after:h-[2px] after:rounded-full after:bg-red-500 after:transition-all after:w-full"
                  : ""
              } cursor-pointer`}
              href="#foods"
            >
              Foods
            </a>
          </li>
          <li onClick={() => setMenu("about-us")}>
            <a
              className={`text-gray-700 hover:text-red-500 transition-colors ${
                menu === "about-us"
                  ? "text-red-500 font-medium after:content-[''] after:block after:h-[2px] after:rounded-full after:bg-red-500 after:transition-all after:w-full"
                  : ""
              } cursor-pointer`}
              href="#about-us"
            >
              About Us
            </a>
          </li>
          <li onClick={() => setMenu("contact-us")}>
            <a
              className={`text-gray-700 hover:text-red-500 transition-colors ${
                menu === "contact-us"
                  ? "text-red-500 font-medium after:content-[''] after:block after:h-[2px] after:rounded-full after:bg-red-500 after:transition-all after:w-full"
                  : ""
              } cursor-pointer`}
              href="#contact-us"
            >
              Contact Us
            </a>
          </li>
        </ul>

        {/* Desktop Right Icons */}
        <div className="hidden lg:flex items-center space-x-4">
          <Sun className="cursor-pointer" />
          <ShoppingBasket className="cursor-pointer" />
          <Button className="cursor-pointer px-5" variant="outline">
            Login
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <span className="lg:hidden cursor-pointer z-50">
          <Menu
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            size={22}
          />
        </span>
      </nav>

      {/* Mobile Sidebar Menu */}
      <div
        className={`lg:hidden fixed top-0 left-0 h-full w-64 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } border-r`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <img className="w-[120px]" src={assets.logo} alt="logo" />
          <span
            className="w-9 h-9 rounded flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X size={20} />
          </span>
        </div>

        <ul className="flex flex-col px-6 py-6 space-y-6">
          <li onClick={() => setMenu("home")}>
            <a
              className={`text-gray-700 hover:text-red-500 transition-colors ${
                menu === "home"
                  ? "text-red-500 font-medium after:content-[''] after:block after:h-[2px] after:rounded-full after:bg-red-500 after:transition-all after:w-full"
                  : ""
              } cursor-pointer`}
              href="#home"
            >
              Home
            </a>
          </li>
          <li onClick={() => setMenu("our-menu")}>
            <a
              className={`text-gray-700 hover:text-red-500 transition-colors ${
                menu === "our-menu"
                  ? "text-red-500 font-medium after:content-[''] after:block after:h-[2px] after:rounded-full after:bg-red-500 after:transition-all after:w-full"
                  : ""
              } cursor-pointer`}
              href="#our-menu"
            >
              Our Menu
            </a>
          </li>
          <li onClick={() => setMenu("foods")}>
            <a
              className={`text-gray-700 hover:text-red-500 transition-colors ${
                menu === "foods"
                  ? "text-red-500 font-medium after:content-[''] after:block after:h-[2px] after:rounded-full after:bg-red-500 after:transition-all after:w-full"
                  : ""
              } cursor-pointer`}
              href="#foods"
            >
              Foods
            </a>
          </li>
          <li onClick={() => setMenu("about-us")}>
            <a
              className={`text-gray-700 hover:text-red-500 transition-colors ${
                menu === "about-us"
                  ? "text-red-500 font-medium after:content-[''] after:block after:h-[2px] after:rounded-full after:bg-red-500 after:transition-all after:w-full"
                  : ""
              } cursor-pointer`}
              href="#about-us"
            >
              About Us
            </a>
          </li>
          <li onClick={() => setMenu("contact-us")}>
            <a
              className={`text-gray-700 hover:text-red-500 transition-colors ${
                menu === "contact-us"
                  ? "text-red-500 font-medium after:content-[''] after:block after:h-[2px] after:rounded-full after:bg-red-500 after:transition-all after:w-full"
                  : ""
              } cursor-pointer`}
              href="#contact-us"
            >
              Contact Us
            </a>
          </li>
        </ul>

        {/* Bottom Section */}
        <div className="absolute bottom-0 left-0 right-0 py-5 border-t border-gray-200 px-6">
          <div className="flex items-center justify-center gap-4">
            <Sun className="cursor-pointer" />
            <ShoppingBasket className="cursor-pointer" />
            <Button className="cursor-pointer px-4" variant="outline">
              Login
            </Button>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {isMobileMenuOpen && (
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 backdrop-blur-[2px] z-30 lg:hidden"
        />
      )}
    </header>
  );
};

export default Navbar;
