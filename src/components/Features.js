import React, { useState } from "react";
import "./features.css";
import pic1 from "./images/slide1.png";
import pic2 from "./images/slide2.png";
import pic3 from "./images/slide3.png";

const slides = [
  {
    image: pic1,
    heading: "Bookmark in one click",
    content:
      "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
  },
  {
    image: pic2,
    heading: "Intelligent Search",
    content:
      "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
  },
  {
    image: pic3,
    heading: "Bookmark in one click",
    content:
      "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
  },
];

const Features = () => {
  const [panel, setPanel] = useState(0);

  return (
    <section className="py-12">
      <div className="container mx-auto">
        <div className="text-center px-4 title mx-auto">
          <h2 className="mb-4">Features</h2>
          <p>
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
          <div className="features-links md:justify-around my-12 flex flex-col md:flex-row">
            <p
              className={panel === 0 ? "link" : ""}
              onClick={() => setPanel(0)}
            >
              Simple Bookmarking
            </p>
            <p
              className={panel === 1 ? "link" : ""}
              onClick={() => setPanel(1)}
            >
              Speedy Searching
            </p>
            <p
              className={panel === 2 ? "link" : ""}
              onClick={() => setPanel(2)}
            >
              Easy Sharing
            </p>
          </div>
        </div>

        <div>
          {slides.map((slide, index) => {
            return (
              <div
                className={` flex flex-col md:flex-row items-center ${
                  panel === index ? "block" : "hidden"
                }`}
              >
                <div>
                  <img
                    src={slide.image}
                    alt="features"
                    width={600}
                    height={400}
                  />
                </div>
                <div className="bookmark px-4 text-center mx-auto md:text-left mt-16 md:mt-0">
                  <h2>{slide.heading}</h2>
                  <p className="my-4">{slide.content}</p>
                  <button className="info-btn rounded py-4 px-6">
                    More info
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
