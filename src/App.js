import React from 'react';
import Header from './components/Header';
import Aside from './components/Aside';
import ColorControls from './components/ColorControls';
import SavedColors from './components/SavedColors';

import './scss/main.scss';
// import iro from "@jaames/iro";

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

// const getStartColor = () => {
//   const letters = '0123456789ABCDEF';
//   let color = '#';
//   for (var i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// };

// DOM elements

// let elements;
// setTimeout(function() {
//   // DOM elements
//   elements = {
//     colorControls: document.querySelector(".color-controls"),
//     colorInput: document.querySelector(".color-input"),
//     hslCopyValue: document.querySelector(".hsl-copy-text"),
//     hexCopyValue: document.querySelector(".hex-copy-text"),
//     rgbCopyValue: document.querySelector(".rgb-copy-text"),
//     hslCopyButton: document.querySelector(".button-default.-copy.-hsl"),
//     hexCopyButton: document.querySelector(".button-default.-copy.-hex"),
//     rgbCopyButton: document.querySelector(".button-default.-copy.-rgb"),
//     hslTooltip: document.querySelector(".hsl-tip"),
//     hexTooltip: document.querySelector(".hex-tip"),
//     rgbTooltip: document.querySelector(".rgb-tip"),
//     hInput: document.querySelector(".h-input"),
//     hValue: document.querySelector(".h-value"),
//     hSlider: document.querySelector(".h-slider"),
//     sInput: document.querySelector(".s-input"),
//     sValue: document.querySelector(".s-value"),
//     sSlider: document.querySelector(".s-slider"),
//     lInput: document.querySelector(".l-input"),
//     lValue: document.querySelector(".l-value"),
//     lSlider: document.querySelector(".l-slider"),
//     userColors: document.querySelector(".user-colors"),
//     saveSomeColors: document.querySelector(".message"),
//     savedColorContainer: document.querySelectorAll(".saved-color"),
//     saveColorButton: document.querySelector(".button-default.-copy.-save"),
//     smSaveColorButton: document.querySelector(".button-default.-copy.-sm"),
//     clearAllColorsButton: document.querySelector(".button-default.-clear"),
//     savedColorValue: document.querySelector(".saved-color-value"),
//     savedColorName: document.querySelectorAll(".saved-color-name"),
//     savedColorRemove: document.querySelectorAll(".button-default.-saved.-clear"),
//     savedColorCopyHsl: document.querySelectorAll(".button-default.-saved.-hsl"),
//     savedColorCopyHex: document.querySelectorAll(".button-default.-saved.-hex"),
//     savedColorCopyRgb: document.querySelectorAll(".button-default.-saved.-rgb")
//   }
// }, 5000);

// function onColorChange(color) {
//   console.log(color.hexString);
// }

// colorWheel.on('color:change', onColorChange);



// colorWheel.on("color:change", (color) => {
//   // get current color & channels
//   let hex = color.hexString,
//     rgb = color.rgbString,
//     hsl = color.hslString,
//     hue = color.hsl.h,
//     saturation = color.hsl.s,
//     lightness = color.hsl.l;

//   // set color values
//   // elements.hslCopyValue.textContent = hsl;
//   // elements.hexCopyValue.textContent = hex;
//   // elements.rgbCopyValue.textContent = rgb;
//   // elements.hslCopyButton.dataset.clipboardText = hsl;
//   // elements.hexCopyButton.dataset.clipboardText = hex;
//   // elements.rgbCopyButton.dataset.clipboardText = rgb;
//   // single HSL inputs
//   // elements.hValue.textContent = hue;
//   // elements.hInput.value = hue;
//   // elements.sValue.textContent = saturation + '%';
//   // elements.sInput.value = saturation;
//   // elements.lValue.textContent = lightness + '%';
//   // elements.lInput.value = lightness;
//   // elements.colorInput.value = hex;

// });