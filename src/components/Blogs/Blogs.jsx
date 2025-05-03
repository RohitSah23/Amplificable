import React from "react";
import { Blog1, Blog2, BlogsBG } from "../../assets/assets";
import { motion } from "motion/react";

const Blogs = () => {
  const blogData = [
    {
      image: Blog1,
      title:
        "What is DePin or Decentralized Physical Infrastructure: DePin for dummies",
      summary: "Summary of Blog about DePin and how it works in simple terms.",
    },
    {
      image: Blog2,
      title:
        "The Role of Quality Resources in Blockchain Adoption: A Data-Driven Analysis",
      summary:
        "Summary of Blog analyzing how good resources impact blockchain adoption.",
    },
  ];

  return (
    <div
      className="py-16 text-center"
      style={{
        backgroundImage: `url(${BlogsBG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-xl md:text-2xl lg:text-3xl font-semibold text-center pt-8 mb-4 text-gray-800"
        >
          Latest Blogs{" "}
        </motion.div>
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-2xl text-center font-semibold text-neutral-400 mb-12 md:text-4xl lg:text-5xl"
        >
          Insights from Amplificable
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8">
          {blogData.map((blog, index) => (
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              key={index}
              className="flex flex-col items-center bg-neutral-200 lg:h-72 h-full rounded-lg shadow-lg p-6 basis-[90%] md:basis-[45%] max-w-md"
            >
              <div className="flex flex-col md:flex-row items-center w-full mb-4">
                <img
                  src={blog.image}
                  alt={`Blog ${index + 1}`}
                  className="h-full w-full md:h-24 md:w-24 object-cover rounded-lg shadow-md mb-4 md:mb-0 md:mr-4"
                />
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 text-left">
                  {blog.title}
                </h3>
              </div>

              <p className="text-sm sm:text-base md:text-lg text-gray-600 font-semibold text-left">
                {blog.summary}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
