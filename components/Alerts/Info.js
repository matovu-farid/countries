import React from "react";

const Warning = ({ label }) => {
  return (
    <div
      className="bg-purple-100 rounded-lg py-5 px-6 mb-4 text-base text-purple-700"
      role="alert"
    >
      {label}
    </div>
  );
};

export default Warning;
