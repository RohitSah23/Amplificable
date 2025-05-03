const Card = ({ image, heading, text,className }) => {
    return (
      <div className="flex flex-col bg-white p-6 rounded-lg shadow-lg h-full">
        <img
          src={image}
          alt={image}
          className={` object-contain rounded-lg md:h-full lg:h-full h-52 w-100 ${className}`}
        />
        {heading && <h3 className="mb-2  text-xl md:text-3xl font-semibold text-gray-700">{heading}</h3>}
        <p className="text-gray-600  text-base md:text-2xl  leading-snug break-words">{text}</p>
      </div>
    );
  };
  export default Card;