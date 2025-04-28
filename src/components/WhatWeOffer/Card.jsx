const Card = ({ image, heading, text,className }) => {
    return (
      <div className="flex flex-col  border  p-6 rounded-lg shadow-lg h-full bg-gradient-to-br from-orange-500/5  to-orange-300/5">
        <img
          src={image}
          alt={image}
          className={`h-full object-contain rounded-lg  ${className}`}
        />
        {heading && <h3 className="text-center text-3xl font-semibold mb-2 text-neutral-100 mt-2">{heading}</h3>}
        <p className="text-center text-2xl text-neutral-200 px-2">{text}</p>
      </div>
    );
  };
  export default Card;