import React from "react";

export const Card = () => {
  return (
    <div className="max-w-xs rounded-xl shadow-md bg-gray-900 text-gray-100 w-60">
      <img
        src="https://images.unsplash.com/photo-1633370618901-01b8a2521ab0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWpvbG90ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        alt=""
        className="object-cover object-center w-full rounded-xl h-80 bg-gray-500"
      />
    </div>
  );
};
