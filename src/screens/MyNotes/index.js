import React from "react";
import Title from "../../components/Title";
import { Primary } from "../../components/Buttons";
import CardTitle from "../../components/CardTitle";
import Card from "../../components/Card";
import notes from "../../data/notes";

const MyNotes = () => {
  // function to delete notes
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete this note?")) {
    }
  };

  return (
    <div className="w-screen h-screen">
      <Title title="welcome back, alina!" />

      <div className="pt-16 pb-40 w-full grid grid-cols-3 gap-5 pl-56 pr-56">
        <div className="flex flex-col gap-3">
          {notes.map((note) => (
            <CardTitle
              title={note.title}
              editlink={`/note/${note._id}`}
              deletefunc={() => deleteHandler(note._id)}
            />
          ))}
        </div>

        <div className="col-span-2">
          {notes.map((note) => (
            <Card content={note.content} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyNotes;
