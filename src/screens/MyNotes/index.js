import React from "react";
import { Link } from "react-router-dom";
import MainScreen from "../../components/MainScreen";

const MyNotes = () => {
  return (
    <MainScreen title="welcome back, alina!">
      <Link to="createnote">
        <button className="createnote">create new note</button>
      </Link>
    </MainScreen>
  );
};

export default MyNotes;
