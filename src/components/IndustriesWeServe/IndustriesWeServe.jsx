import React from "react";
import IndustryCard from "./IndustryCard";
import {
  Energy,
  Finance,
  GovSector,
  HealthCare,
  SupplyChain,
  RealEstate,
} from "../../assets/assets";

const IndustriesWeServe = () => {
  return (
    <div className="bg-neutral-100 py-24 text-center">
      <h1 className="text-neutral-500 text-4xl mb-8">Industries We Serve</h1>

      <div className="text-3xl font-semibold mb-12 text-gray-800">
        Driving Change Across Industries
      </div>

      <div className="flex flex-wrap justify-center gap-8 p-4">
        {[ 
          { img: HealthCare, heading: "Healthcare", subHeading: "Patient data security and drug traceability.", desc: "Enabling secure patient data management, drug traceability, and personalized care solutions." },
          { img: Finance, heading: "Finance & Banking", subHeading: "Secure transactions and fraud prevention", desc: "Redefining trust with secure transactions, fraud prevention, and instant cross-border payments." },
          { img: SupplyChain, heading: "Supply Chain", subHeading: "Transparency from source to consumer.", desc: "Ensuring transparency, traceability, and efficiency from source to consumer." },
          { img: RealEstate, heading: "Real Estate", subHeading: "Patient data security and drug traceability.", desc: "Streamlining property transactions with smart contracts, Tokenization, and immutable ownership records." },
          { img: Energy, heading: "Energy & Utilities", subHeading: "Secure transactions and fraud prevention", desc: "Streamlining property transactions with smart contracts, Tokenization, and immutable ownership records." },
          { img: GovSector, heading: "Government & Public Sector", subHeading: "Transparency from source to consumer.", desc: "Ensuring transparency, traceability, and efficiency from source to consumer." }
        ].map((item, index) => (
          <div key={index} className="flex-grow basis-[45%] max-w-md">
            <IndustryCard
              image={item.img}
              heading={item.heading}
              subHeading={item.subHeading}
              description={item.desc}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustriesWeServe;
