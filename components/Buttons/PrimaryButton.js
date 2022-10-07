import React from "react";
import Link from "next/link";

const PrimaryButton = ({ label, clickHandler, href }) => {
  if (href) {
    return (
      <Link href={href}>
        <a className=" inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out">
          {label}
        </a>
      </Link>
    );
  }
  return (
    <button
      onClick={clickHandler}
      type="button"
      className="inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
    >
      {label}
    </button>
  );
};

export default PrimaryButton;
