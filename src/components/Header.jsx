import React, { useContext } from 'react';
import inputContext from '../context/inputContext';

function Header() {
  const { setInputSearch } = useContext(inputContext);
  const handleInputSearch = (event) => {
    setInputSearch(event.target.value);
  };
  return (
    <div className="note-app__header">
      <h1>Notes</h1>
      <div className="note-search">
        <input type="text" onChange={handleInputSearch} placeholder="Cari Catatan ..." />
      </div>
    </div>
  );
}

export default Header;
