import { useState } from "react";
import "./header.css";
import {
  headerLogo,
  navLogo,
  openNav,
  closeNav,
  facebook,
  twitter,
} from "../icons";

const Drawer = ({ setIsOpen }) => {
  return (
    <div className="w-full md:hidden absolute top-0 mobile-nav p-8">
      <div className="container mx-auto">
        <div className="flex justify-between pb-8">
          <span>{navLogo}</span>
          <span onClick={() => setIsOpen(false)}>{closeNav}</span>
        </div>
        <div className="text-center text-white">
          <div>
            <a className="block nav-link">FEATURES</a>
            <a className="block nav-link">PRICING</a>
            <a className="block nav-link">CONTACT</a>
            <a className="block nav-link">
              <button className="btn btn-outlined btn-transparent w-full">
                LOGIN
              </button>
            </a>
          </div>
          <div className="flex justify-between mx-auto social-icons mt-44">
            <span className="social-icon">{facebook}</span>
            <span className="social-icon">{twitter}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="py-8">
      {isOpen ? <Drawer setIsOpen={setIsOpen} /> : null}
      <nav className="container mx-auto px-4 flex justify-between items-center md:pl-36">
        <span>{headerLogo}</span>
        <div onClick={() => setIsOpen(true)} className="md:hidden">
          {openNav}
        </div>
        <div className="header-links hidden md:flex justify-between items-center w-2/3">
          <a>FEATURES</a>
          <a>PRICING</a>
          <a>CONTACT</a>
          <button className="btn btn-red btn-large">LOGIN</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
