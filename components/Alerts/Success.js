import React from "react";

const Success = ({ messege }) => {
  return (
    <div
      class="bg-green-100 rounded-lg py-5 px-6  text-base text-green-700 mb-4"
      role="alert"
    >
      {messege}
    </div>
  );
};

export default Success;
