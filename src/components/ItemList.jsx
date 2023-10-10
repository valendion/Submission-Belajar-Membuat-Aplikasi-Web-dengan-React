import React from 'react';

function ItemList({ id, title, date, body, archived, deleteNote, archiveNote }) {
  return (
    <div className="note-item">
      <div className="note-item__content">
        <h3 className="note-item__title">{title}</h3>
        <p className="note-item__date">{date}</p>
        <p className="note-item__body">{body}</p>
      </div>
      <div className="note-item__action">
        <button className="note-item__delete-button" onClick={(e) => deleteNote(e, id)}>
          Hapus
        </button>
        <button className="note-item__archive-button" onClick={(e) => archiveNote(e, id)}>
          {archived ? 'Pindahkan' : 'Arsipkan'}
        </button>
      </div>
    </div>
  );
}

export default ItemList;
