import React from 'react';

import { Faqs, Questions } from './pages';

function App() {
  return (
    <div className="App">
      <h1 style={{
        margin: '1rem',
      }}>
        REDUX example
      </h1>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
      }}>
        {/* <Questions /> */}
        <Faqs />
      </div>
    </div>
  );
}

export default App;
