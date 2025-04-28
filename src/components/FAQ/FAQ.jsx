import { motion } from "motion/react";

import React, { useState } from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "What Amplificabe Do?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis. Lorem ipsum dolor venenatis.",
    },
    {
      question: "How can I contribute to Flowspark?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis. Lorem ipsum dolor venenatis.",
    },
    {
      question: "How can I contribute to Flowspark?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis. Lorem ipsum dolor venenatis.",
    },
    {
      question: "How can I contribute to Flowspark?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis. Lorem ipsum dolor venenatis.",
    },
    {
      question: "How can I contribute to Flowspark?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis. Lorem ipsum dolor venenatis.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);
  const toggleAccordion = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="bg-white  flex items-center py-20">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row px-6 md:px-12 gap-12">
        {/* Left side */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 flex flex-col justify-start"
        >
          <h1 className="text-5xl font-bold text-black mb-6">General FAQs</h1>
          <p className="text-xl text-neutral-500 font-semibold">
            Use premium webflow components to ship your product faster to your
            customers. Build better and faster with Flowspark.
          </p>
        </motion.div>

        {/* Right side */}
        <div className="flex-1 flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              key={index}
              className={`w-full rounded-lg shadow-sm border border-gray-200 ${
                openIndex === index ? "bg-white" : "bg-gray-50"
              }`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left py-4 px-6 text-lg cursor-pointer font-medium flex justify-between items-center "
              >
                <span
                  className={`${
                    openIndex === index ? "text-[#7b61ff]" : "text-black"
                  }`}
                >
                  {faq.question}
                </span>
                <span className="text-2xl">
                  {openIndex === index ? "-" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-600 text-base">
                  {faq.answer}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
