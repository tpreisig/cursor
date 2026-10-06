import React from 'react';
import './App.css';
import Cursor from './components/Cursor';
import Counter from './components/Counter';

function App() {
  return (
    <div className='app-container'>
      <div className="App">
        <Cursor />
        <Counter />
      </div>
    </div>

  );
}

export default App;
