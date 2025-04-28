const Card = ({ image, heading, text }) => {
    return (
      <div className="flex flex-col bg-white p-6 rounded-lg shadow-lg h-full">
        <img
          src={image}
          alt={image}
          className="h-full object-contain rounded-lg "
        />
        {heading && <h3 className="text-xl font-semibold mb-2 text-gray-700">{heading}</h3>}
        <p className="text-gray-600">{text}</p>
      </div>
    );
  };
  export default Card;