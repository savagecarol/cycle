import React from 'react'


const Stepper = ({ steps }) => {
    return (
      <ol className="relative text-white-500 border-s border-gray-200">
        {steps.map((step, index) => (
          <li key={index} className="mb-10 ms-6 flex items-center">
            <span className="absolute flex items-center justify-center w-8 h-8 bg-green-700 rounded-full -start-4 ring-4 ring-white">
              {index + 1}
            </span>
            <h2 className="font-medium leading-tight text-sm  relative top-.5">{step}</h2>
          </li>
        ))}
      </ol>
    );
  };
  

export default Stepper