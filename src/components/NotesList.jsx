import React from 'react';
import ItemList from './ItemList';
import EmptyMessage from './EmptyMessage';

function NotesList({ notes, title, deleteNote, archiveNote }) {
  console.log('data notes', notes);
  return (
    <>
      <h2>{title}</h2>
      {notes.length != 0 ? (
        <div className="notes-list">
          {notes.map((element) => (
            <ItemList key={element.id} id={element.id} title={element.title} date={element.createdAt} body={element.body} archived={element.archived} deleteNote={deleteNote} archiveNote={archiveNote} />
          ))}
        </div>
      ) : (
        <EmptyMessage />
      )}
    </>
  );
}

export default NotesList;
