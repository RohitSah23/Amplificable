const Card = ({ image, heading, text, className }) => {
  return (
    <div className="flex flex-col gap-4 border p-6 rounded-lg shadow-lg h-full bg-gradient-to-br from-orange-500/5 to-orange-300/5">
      <img
        src={image}
        alt={heading}
        className={`max-h-48 w-auto h-auto object-contain rounded-lg mx-auto ${className}`}
      />
      {heading && (
        <h3 className="text-center text-2xl md:text-3xl font-semibold text-neutral-100">
          {heading}
        </h3>
      )}
      <p className="text-center text-xl md:text-2xl text-neutral-200 leading-snug break-words px-2">
        {text}
      </p>
    </div>
  );
};

export default Card;
