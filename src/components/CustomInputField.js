import React from 'react'

const CustomInputField = ({title, value, onChange, name}) => {
  return (
    <div className="p-2 w-full">
      <div className="relative">
        <label htmlFor={name} className="leading-7 text-sm text-gray-600">{title}</label>
        <input
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
    </div>
  )
}

export default CustomInputField