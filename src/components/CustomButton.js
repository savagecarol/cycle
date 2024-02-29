import React from 'react';

const CustomButton =({ buttonName, color })=> {
    const defaultColor = "yellow";

  
    const textColor = color === defaultColor ? 'black' : 'white';
  
    const backgroundColor = color ? `${color}-400` : `${defaultColor}-400`;
    const hoverColor = color ? `${color}-500` : `${defaultColor}-500`;
    const focusRingColor = color ? `${color}-300` : `${defaultColor}-300`;
    const focusRingDarkColor = color ? `${color}-900` : `${defaultColor}-900`;
  
    return (
      <button
        type="button"
        className={`text-${textColor} bg-${backgroundColor} hover:bg-${hoverColor} focus:ring-4 focus:outline-none focus:ring-${focusRingColor} font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-${defaultColor}-300 dark:text-${defaultColor}-300 dark:hover:text-white dark:hover:bg-${backgroundColor} dark:focus:ring-${focusRingDarkColor}`}
      >
        {buttonName}
      </button>
    );
  }
  

export default CustomButton