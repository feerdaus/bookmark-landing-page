import "./footer2.css";
import { footerLogo, facebook, twitter } from "../icons";

const Footer2 = () => {
  return (
    <section className="footer2 py-8 md:py-0">
      <div className="content container flex flex-col md:flex-row items-center justify-between max-w-screen-lg mx-auto">
        <div className=" w-1/2 h-3/4 justify-between items-center flex flex-col md:flex-row">
          <span className="footer-logo px-4">{footerLogo} </span>
          <ul className="pt-1 text-center text-white flex flex-col md:flex-row justify-between  footer-list">
            <li className="footer-ls px-4">FEATURES</li>
            <li className="footer-ls px-4">PRICING</li>
            <li className="footer-ls px-4">CONTACT</li>
          </ul>
        </div>
        <div className="flex text-white social-icons justify-between">
          <span className="social-icon">{facebook} </span>
          <span className="social-icon">{twitter} </span>
        </div>
      </div>
    </section>
  );
};

export default Footer2;
