import React from "react";
import Title from "../../components/Title";
import { Primary } from "../../components/Buttons";
import Card from "../../components/Card";

const MyNotes = () => {
  return (
    <div className="w-screen h-screen">
      <Title title="welcome back, alina!" />

      <div className="mt-3 w-full flex flex-row justify-center pl-56 pr-56">
        <Primary option="create note" link="createnote" />
      </div>

      <div className="pt-20 pb-40 w-full grid grid-cols-2 gap-20 justify-evenly pl-56 pr-56">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default MyNotes;
