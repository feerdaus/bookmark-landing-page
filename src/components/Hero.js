import "./hero.css";
import hero from "./images/hero1.png";
import heroMobile from "./images/hero-mobile.png";

const Hero = () => {
  return (
    <section className="py-12">
      <div className="hero container items-center mx-auto md:relative flex flex-col-reverse md:flex-row text-center md:text-left">
        <div className="hero-txt px-4">
          <h1>A Simple Bookmark Manager</h1>
          <p className="my-6">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <div className="inline">
            <button className="chrome-btn btn text-white rounded py-2 px-4 mr-4">
              Get it on Chrome
            </button>
            <button className="firefox-btn rounded py-2 px-4">
              Get it on Firefox
            </button>
          </div>
        </div>
        <div className="right-0 md:absolute mx-auto">
          <img
            className="hidden md:block"
            src={hero}
            alt="hero"
            width={600}
            height={400}
          />
          <img className="md:hidden" src={heroMobile} alt="hero" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
