import React, { useState } from "react";
import { showMore, showLess } from "./icons";
import "./faqItem.css";

const FaqItem = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="faq-item flex justify-between items-center py-4">
        <p className="faq-title cursor-pointer font-medium">{props.title} </p>
        {isOpen ? (
          <span className="py-auto " onClick={() => setIsOpen(false)}>
            {showLess}
          </span>
        ) : (
          <span className="py-auto " onClick={() => setIsOpen(true)}>
            {showMore}
          </span>
        )}
      </div>
      {isOpen ? <p className="faq-content my-4">{props.content}</p> : null}
    </div>
  );
};

export default FaqItem;
