import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center space-x-2">
      <div className="animate-pulse animation-delay-100">
        <div className="w-3 h-3 bg-lavender rounded-full animate-bounce animation-delay-100"></div>
      </div>
      <div className="animate-pulse animation-delay-200">
        <div className="w-3 h-3 bg-lavender rounded-full animate-bounce animation-delay-200"></div>
      </div>
      <div className="animate-pulse animation-delay-300">
        <div className="w-3 h-3 bg-lavender rounded-full animate-bounce animation-delay-300"></div>
      </div>
    </div>
  );
};

export default Loading;
