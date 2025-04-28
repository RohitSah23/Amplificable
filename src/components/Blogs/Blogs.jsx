import React from "react";
import { Blog1, Blog2, BlogsBG } from "../../assets/assets";

const Blogs = () => {
  const blogData = [
    {
      image: Blog1,
      title: "What is DePin or Decentralized Physical Infrastructure: DePin for dummies",
      summary: "Summary of Blog about DePin and how it works in simple terms."
    },
    {
      image: Blog2,
      title: "The Role of Quality Resources in Blockchain Adoption: A Data-Driven Analysis",
      summary: "Summary of Blog analyzing how good resources impact blockchain adoption."
    }
  ];

  return (
    <>
      <div
        className="h-152 px-6 md:px-12 lg:px-40 py-16 text-center"
        style={{
          backgroundImage: `url(${BlogsBG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-neutral-500 text-3xl mb-8">Latest Blogs</h1>
        <div className="text-5xl font-semibold mb-12 text-gray-800">
          Insights from Amplificable
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {blogData.map((blog, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-neutral-200 h-72 rounded-lg shadow-lg p-6 basis-[90%] md:basis-[45%] max-w-md"
            >
              <div className="flex items-center mb-4">
                <img
                  src={blog.image}
                  alt={`Blog ${index + 1}`}
                  className="h-24 w-24 object-cover rounded-lg shadow-md mr-4"
                />
                <h3 className="text-lg font-semibold text-gray-800 text-left">
                  {blog.title}
                </h3>
              </div>

              <p className="text-gray-600 font-semibold text-left">
                {blog.summary}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blogs;
