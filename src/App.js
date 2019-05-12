import React from 'react';
import Header from './components/Header';
import Aside from './components/Aside';
import ColorControls from './components/ColorControls';
import SavedColors from './components/SavedColors';

import iro from '@jaames/iro';
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

export {iro};

export default App;

// App functions
// const getStartColor = () => {
//   const letters = '0123456789ABCDEF';
//   let color = '#';
//   for (var i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// };

// Create and Display Color Wheel
let colorWheel = new iro.ColorPicker("#color-wheel", {
  layout: [
    {
      component: iro.ui.Wheel,
      options: {
        width: 215,
        padding: 4,
        borderWidth: 3,
        borderColor: "transparent"
      }
    }
  ]
});
