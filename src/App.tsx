import React from 'react';
import './App.css';
import Cursor from './components/Cursor';
import Counter from './components/Counter';
import Calculator from './components/Calculator';

function App() {
  return (
    <div className='app-container'>
      <div className="App">
        <Calculator />
        <Counter />
        <Cursor />
      </div>
    </div>

  );
}

export default App;
