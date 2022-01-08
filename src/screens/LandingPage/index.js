import React from "react";
import computer from "../../images/computer.png";
import { motion } from "framer-motion";
import { Primary } from "../../components/Buttons";

const LandingPage = () => {
  return (
    <div className="w-screen h-screen">
      <div className="w-full h-full flex flex-row items-center justify-around pl-56 pr-56">
        <div className="flex flex-col justify-center gap-4">
          <h1 className="font-ptserif italic font-bold text-6xl text-apricot">
            need to jot something down?
          </h1>
          <p className="font-semibold text-2xl text-white">
            a convenient place for all your notes.
          </p>

          <div className="mt-10 flex items-center flex-row gap-5">
            <div className="w-1/2 items-center bg-white rounded-lg p-2.5 drop-shadow-lg text-black">
              <input
                className="w-full placeholder:text-slate-500 pl-1.5 pr-1.5 block focus:outline-none bg-transparent"
                placeholder="Enter email address"
                type="text"
                name="search"
              />
            </div>
            <Primary option="get started" link="register" />
          </div>
        </div>

        <div>
          <motion.img
            animate={{ y: [0, 20, 0] }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity,
            }}
            src={computer}
            width="750px"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
