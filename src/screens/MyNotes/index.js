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

  const user = "alina";

  return (
    <div className="w-screen h-screen">
      <Title
        title={
          <>
            welcome back,{" "}
            <p className="inline-flex italic font-ptserif font-bold text-5xl text-apricot">
              {user}!
            </p>
          </>
        }
      />

      <div className="mt-10 w-full flex flex-row justify-center pl-56 pr-56">
        <Primary option="create note" link="createnote" />
      </div>

      <div className="pt-16 pb-40 w-full flex flex-col-reverse gap-6 pl-80 pr-80">
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
