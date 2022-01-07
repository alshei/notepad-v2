import React from "react";
import { Link } from "react-router-dom";
import MainScreen from "../../components/MainScreen";
import { Primary } from "../../components/Buttons";

const MyNotes = () => {
  return (
    <MainScreen title="welcome back, alina!">
      <div className="mt-3 w-[8.5rem]">
        <Primary option="create note" link="createnote" />
      </div>
    </MainScreen>
  );
};

export default MyNotes;
