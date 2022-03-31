import "./footer1.css";

const Footer1 = () => {
  return (
    <footer className="py-12">
      <div className="up-footer container mx-auto text-center text-white ">
        <span className="num-joined ">35,000+ ALREADY JOINED</span>
        <h2 className="title px-8 mt-12">
          Stay up-to-date with what we’re doing
        </h2>
        <div className="input-container flex justify-between mx-auto mt-12 ">
          <label htmlFor="email"></label>
          <input
            id="email"
            placeholder="Enter your email address"
            className="input rounded pl-4 text-black "
          />
          <button className="contact-btn p-2 rounded ">Contact Us</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
