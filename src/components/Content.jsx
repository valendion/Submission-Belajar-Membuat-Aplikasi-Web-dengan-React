import React, { useState, useContext, useEffect } from 'react';
import NotesList from './NotesList';
import inputContext from '../context/inputContext';
import { getInitialData, showFormattedDate } from '../utils';

function Content() {
  const { inputSearch } = useContext(inputContext);

  const unFilterDataNotes = [...getInitialData()];
  const [dataNotes, setDataNotes] = useState([...unFilterDataNotes]);
  const notes = dataNotes.filter((element) => element.archived === false);
  const archiveNotes = dataNotes.filter((element) => element.archived === true);
  const [limitChar, setLimitChar] = useState(50);
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (inputSearch.length > 0) {
      setDataNotes(dataNotes.filter((e) => e.title.toLowerCase().includes(inputSearch)));
    } else {
      setDataNotes([...unFilterDataNotes]);
    }
  }, [inputSearch]);

  console.log('dataNotes', dataNotes);

  const deleteNote = (event, id) => {
    event.preventDefault();
    const deleteNotes = dataNotes.filter((element) => element.id !== id);
    setDataNotes(deleteNotes);
  };

  const archiveNote = (event, id) => {
    event.preventDefault();
    const editNotes = dataNotes.map((element) => (element.id === id ? { ...element, archived: !element.archived } : element));
    setDataNotes(editNotes);
  };

  const generateId = () => +new Date();

  const handleSubmit = (event) => {
    event.preventDefault();

    const textNote = event.target.input_note.value;
    const newNote = { id: generateId(), title: title, body: textNote, archived: false, createdAt: showFormattedDate(new Date()) };
    setDataNotes([...dataNotes, newNote]);
    event.target.reset();
  };

  const handleCharCount = (event) => {
    const char = event.target.value;
    const charLeft = 50 - char.length;
    if (char.length <= 50 && char.length >= 0) {
      setTitle(char);
      setLimitChar(charLeft);
    }
  };

  return (
    <div className="note-app__body">
      <div className="note-input">
        <h2>Buat Catatan</h2>
        <form onSubmit={handleSubmit}>
          <p className="note-input__title__char-limit">Sisa karakter : {limitChar}</p>
          <input type="text" value={title} className="note-input__title" placeholder="Tulis judul anda" onChange={handleCharCount} required />
          <textarea name="input_note" className="note-input__body" placeholder="Tulis catatan anda" required></textarea>
          <button type="submit">Buat</button>
        </form>
      </div>

      <NotesList title="Catatan Aktif" notes={notes} deleteNote={deleteNote} archiveNote={archiveNote} />
      <NotesList title="Arsip" notes={archiveNotes} deleteNote={deleteNote} archiveNote={archiveNote} />
    </div>
  );
}

export default Content;
