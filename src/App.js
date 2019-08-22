import React from 'react';
import './App.css';
import SeparateComponent from './SeparateComponent';
import Counter from './Counter';
import { CounterProvider } from './Context';

function App() {
  return (
    <div className="App">
      <CounterProvider>
        <Counter />
        <SeparateComponent />
      </CounterProvider>
    </div>
  );
}

export default App;
