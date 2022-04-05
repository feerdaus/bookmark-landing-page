import "./footer2.css";
import { footerLogo, facebook, twitter } from "../icons";

const Footer2 = () => {
  return (
    <footer className="footer2 py-8 md:py-0">
      <div className="content container flex flex-col md:flex-row items-center justify-between mx-auto">
        <div className="attr w-1/2 h-3/4 justify-between items-center flex flex-col md:flex-row">
          <span className="footer-logo px-4">{footerLogo}</span>
          <ul className="pt-1 text-center text-white flex flex-col md:flex-row justify-between  footer-list">
            <li>FEATURES</li>
            <li>PRICING</li>
            <li>CONTACT</li>
          </ul>
        </div>
        <div className="flex text-white social-icons justify-between px-2">
          <span className="social-icon">{facebook} </span>
          <span className="social-icon">{twitter} </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
