import React from 'react'
import companiesImage from "../../assets/companiesImage.webp"

const Companies = () => {
  return (
    <>
      <div className="bg-gray-200 py-24">
        <h1 className="text-center text-gray-800 text-xl md:text-2xl font-semibold mb-8">
          Helping to grow the next generation of companies
        </h1>
        <div className="flex justify-center">
          <img src={companiesImage} alt="Companies" className="w-full max-w-7xl px-4"/>
        </div>
      </div>
    </>
  )
}

export default Companies;