import React from "react";

const MainScreen = ({ title, children }) => {
  return (
    <div
      className="w-screen h-screen"
      style={{
        background: "radial-gradient(ellipse at 5% 5%, #6f4367, #0f172a)",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full h-full flex justify-center pl-56 pr-56">
        <div className="mt-44">
          {title && (
            <>
              <h1 className="font-ptserif font-bold text-5xl text-apricot">
                {title}
              </h1>
              <hr className="mt-3 text-mauve" />
            </>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
