import React from "react";

const Error = ({ messege }) => {
  return (
    <div
      class="bg-red-100 rounded-lg py-5 px-6 mb-4 text-base text-red-700"
      role="alert"
    >
      {messege}
    </div>
  );
};

export default Error;
