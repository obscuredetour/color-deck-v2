import React from 'react';
import Header from './components/Header';
import Aside from './components/Aside';
import ColorControls from './components/ColorControls';
import SavedColors from './components/SavedColors';
// import logo from './images/logo.svg';

import './scss/main.scss';
// import "./js/iro.min.js";

function App() {
  return (
    <div className="app-wrapper -grid">
      <Aside />
      <main className='app'>
        <Header />
        <ColorControls />
        <SavedColors />
      </main>
    </div>
  );
}

// App functions
// const showTooltip = async (el) => {
//   // pass in tooltip element
//   // 'show' tooltip via class
//   el.classList.toggle('visible');
//   // wait 1 second and remove visible class
//   const delay = ms => new Promise(res => setTimeout(res, ms));
//   await delay(1000);
//   el.classList.toggle('visible');
// };

export default App;
