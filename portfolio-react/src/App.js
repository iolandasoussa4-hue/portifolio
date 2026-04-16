import React from 'react';
import Header from './components/Header';
import Projetos from './components/Projetos';
import './styles/global.css';

function App() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '80px' }}>
        <Projetos />
      </main>
    </>
  );
}

export default App;