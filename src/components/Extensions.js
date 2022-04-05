import "./extensions.css";
import chrome from "./images/chrome.png";
import firefox from "./images/firefox.png";
import opera from "./images/opera.png";
import { dots } from "./icons";

const Extensions = () => {
  return (
    <section className="container px-4 py-12 mx-auto">
      <div className="ext">
        <div className="ext-txt mx-auto text-center">
          <h2 className="mb-4">Download the extension</h2>
          <p>
            We’ve got more browsers in the pipeline. Please do let us know if
            you’ve got a favourite you’d like us to prioritize.
          </p>
        </div>
        <div className="ext-container flex flex-col lg:flex-row lg:space-x-8 mx-auto mt-12 relative">
          <div>
            <div className="ext-div">
              <img
                className="mx-auto mt-4 my-8"
                src={chrome}
                alt="chrome logo"
              />
              <h4 className="mb-2">Add to chrome</h4>
              <div className="mb-12">Minimum version 62</div>
              <span>{dots} </span>
              <button className="ext-btn px-4 py-2 rounded mt-8">
                Add & Install Extension
              </button>
            </div>
          </div>
          <div className="pt-12">
            <div className="ext-div ">
              <img
                className="mx-auto mt-4 my-8"
                src={firefox}
                alt="chrome logo"
              />
              <h4 className="mb-2">Add to firefox</h4>
              <div className="mb-12">Minimum version 55</div>
              <span>{dots} </span>
              <button className="ext-btn px-4 py-2 rounded mt-8">
                Add & Install Extension
              </button>
            </div>
          </div>
          <div className="sm:pt-24 pt-14">
            <div className="ext-div ">
              <img
                className="mx-auto mt-4 my-8"
                src={opera}
                alt="chrome logo"
              />
              <h4 className="mb-2">Add to opera</h4>

              <div className="mb-12">Minimum version 46</div>
              <span>{dots} </span>
              <button className="ext-btn px-4 py-2 rounded mt-6">
                Add & Install Extension
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Extensions;
