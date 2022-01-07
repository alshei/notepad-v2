import React from "react";
import Title from "../../components/Title";
import { Primary } from "../../components/Buttons";
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

      <div className="mt-3 w-full flex flex-row justify-center pl-56 pr-56">
        <Primary option="create note" link="createnote" />
      </div>

      <div className="pt-20 pb-40 w-full grid grid-cols-2 gap-10 justify-evenly pl-56 pr-56">
        {notes.map((note) => (
          <Card
            title={note.title}
            editlink={`/note/${note._id}`}
            deletefunc={() => deleteHandler(note._id)}
            content={note.content}
            category={note.category}
          />
        ))}
      </div>
    </div>
  );
};

export default MyNotes;
