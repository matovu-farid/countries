import React from "react";

const DangerButton = ({ label, clickHandler, href }) => {
  if (href) {
    return (
      <link href={href}>
        <a className="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">
          {label}
        </a>
      </link>
    );
  }
  return (
    <button
      onClick={clickHandler}
      type="button"
      className="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
    >
      {label}
    </button>
  );
};

export default DangerButton;
