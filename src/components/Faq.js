import React from "react";

export default function Faq({ items = [], heading = "Frequently asked questions" }) {
  if (!items.length) return null;
  return (
    <section className="faq-section" id="faq">
      <h2 className="text-center">{heading}</h2>
      <div className="faq-list">
        {items.map((item) => (
          <div className="faq-item" key={item.q}>
            <h3 className="faq-question">{item.q}</h3>
            <p className="faq-answer">{item.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
