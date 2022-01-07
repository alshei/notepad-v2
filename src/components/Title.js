import React from "react";

const Title = ({ title }) => {
  return (
    <div className="w-full flex flex-row justify-center pl-56 pr-56">
      <div className="mt-44">
        <h1 className="font-ptserif font-bold text-5xl text-apricot">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default Title;
