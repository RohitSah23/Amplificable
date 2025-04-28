const IndustryCard = ({ image, heading, subHeading, description, className }) => {
    return (
      <div className={`flex flex-col md:flex-row items-center p-4  h-full ${className}`}>
        
        <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
          <img
            src={image}
            alt={heading}
            className="h-40 w-40 object-fill bg-white p-2 rounded-lg shadow-xl"
          />
        </div>
  
        <div className="text-center md:text-left">
          {heading && (
            <h3 className="text-2xl font-semibold mb-2 text-gray-800">
              {heading}
            </h3>
          )}
          {subHeading && (
            <h4 className="text-xl font-medium mb-2 text-gray-500">
              {subHeading}
            </h4>
          )}
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
        
      </div>
    );
  };
  
  export default IndustryCard;
  