import Content from './components/Content';
import Header from './components/Header';
import React, { useState } from 'react';
import inputContext from './context/inputContext';
function App() {
  const [inputSearch, setInputSearch] = useState('');
  return (
    <>
      <inputContext.Provider value={{ inputSearch, setInputSearch }}>
        <Header />
        <Content />
      </inputContext.Provider>
    </>
  );
}

export default App;
