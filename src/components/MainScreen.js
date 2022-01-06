import React from "react";

const MainScreen = ({ title, children }) => {
  return (
    <div className="mainback">
      <div className="page">
        {title && (
          <>
            <h1 className="heading">{title}</h1>
            <hr />
          </>
        )}
        {children}
      </div>
    </div>
  );
};

export default MainScreen;