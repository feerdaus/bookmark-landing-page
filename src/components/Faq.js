import React from "react";
import "./faq.css";
import FaqItem from "./FaqItem";

const faqs = [
  {
    title: "What is Bookmark?",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit harum illum sint. Provident quisquam harum amet esse ex molestiae saepe magni laudantium modi, sit ut optio veritatis magnam. Temporibus",
  },
  {
    title: "How can I request a new browser?",
    content:
      "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
  },
  {
    title: "Is there a mobile app?",
    content:
      "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis augue massa, ultricies non ligula. Suspendisse imperdiet.",
  },
  {
    title: "What about other Chromium browsers?",
    content:
      "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis augue massa, ultricies non ligula. Suspendisse imperdiet.",
  },
];

const Faq = () => {
  return (
    <section>
      <div className="faq px-8 py-8">
        <div className="mx-auto faq-heading text-center my-12">
          <h2>Frequently Asked Questions</h2>
          <p>
            Here are some of our FAQs. If you have any other questions you’d
            like answered please feel free to email us.
          </p>
        </div>

        <div className="mx-auto questions">
          {faqs.map((faq, index) => {
            return (
              <FaqItem
                key={`${faq.title}-${index}`}
                title={faq.title}
                content={faq.content}
                index={index}
              />
            );
          })}
        </div>
        <button className="faq-btn mt-8 rounded py-2 px-4 block mx-auto">
          More info
        </button>
      </div>
    </section>
  );
};

export default Faq;
