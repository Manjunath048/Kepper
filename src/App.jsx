import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Note from "./Components/Note";
import notes from "./notes";

export default function App() {
  return (
    <div>
      <Header />
      
      {notes.map(note =>(
        <Note
        key = {note.key}
        tittle ={note.tittle}
        content = {note.content}
        />

      ))}
      <Footer/>
    </div>
  );
}