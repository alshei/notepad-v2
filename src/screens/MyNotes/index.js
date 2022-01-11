import React, { useState, useEffect } from "react";
import axios from "axios";
import Title from "../../components/Title";
import { Primary } from "../../components/Buttons";
import Card from "../../components/Card";

const MyNotes = () => {
  const [notes, setNotes] = useState([]);

  // function to delete notes
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete this note?")) {
    }
  };

  // connect frontend to backend and get notes
  const fetchNotes = async () => {
    const { data } = await axios.get("/api/notes");
    setNotes(data);
  };

  console.log(notes);

  useEffect(() => {
    fetchNotes();
  }, []);

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
            key={note._id}
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
