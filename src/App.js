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
  // width: 215,
  // color: getStartColor(),
  // markerRadius: 8,
  // padding: 4,
  // sliderMargin: 24,
  // sliderHeight: 10,
  // borderWidth: 3,
  // borderColor: "transparent"
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

// const getStartColor = () => {
//   const letters = '0123456789ABCDEF';
//   let color = '#';
//   for (var i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   colorWheel.color.hexString = color;
// };

// getStartColor();

//hsl(180, 100%, 25%)
// setTimeout(() => {
//   document.querySelector('.iro__slider').style.display = 'none';
// }, 100);

let elements;
setTimeout(function() {
  // DOM elements
  elements = {
    colorControls: document.querySelector(".color-controls"),
    colorInput: document.querySelector(".color-input"),
    hslCopyValue: document.querySelector(".hsl-copy-text"),
    hexCopyValue: document.querySelector(".hex-copy-text"),
    rgbCopyValue: document.querySelector(".rgb-copy-text"),
    hslCopyButton: document.querySelector(".button-default.-copy.-hsl"),
    hexCopyButton: document.querySelector(".button-default.-copy.-hex"),
    rgbCopyButton: document.querySelector(".button-default.-copy.-rgb"),
    hslTooltip: document.querySelector(".hsl-tip"),
    hexTooltip: document.querySelector(".hex-tip"),
    rgbTooltip: document.querySelector(".rgb-tip"),
    hInput: document.querySelector(".h-input"),
    hValue: document.querySelector(".h-value"),
    hSlider: document.querySelector(".h-slider"),
    sInput: document.querySelector(".s-input"),
    sValue: document.querySelector(".s-value"),
    sSlider: document.querySelector(".s-slider"),
    lInput: document.querySelector(".l-input"),
    lValue: document.querySelector(".l-value"),
    lSlider: document.querySelector(".l-slider"),
    userColors: document.querySelector(".user-colors"),
    saveSomeColors: document.querySelector(".message"),
    savedColorContainer: document.querySelectorAll(".saved-color"),
    saveColorButton: document.querySelector(".button-default.-copy.-save"),
    smSaveColorButton: document.querySelector(".button-default.-copy.-sm"),
    clearAllColorsButton: document.querySelector(".button-default.-clear"),
    savedColorValue: document.querySelector(".saved-color-value"),
    savedColorName: document.querySelectorAll(".saved-color-name"),
    savedColorRemove: document.querySelectorAll(".button-default.-saved.-clear"),
    savedColorCopyHsl: document.querySelectorAll(".button-default.-saved.-hsl"),
    savedColorCopyHex: document.querySelectorAll(".button-default.-saved.-hex"),
    savedColorCopyRgb: document.querySelectorAll(".button-default.-saved.-rgb")
  }
}, 200);

function onColorChange(color, changes) {

  // get current color & channels
  let hex = color.hexString,
    rgb = color.rgbString,
    hsl = color.hslString,
    hue = color.hsl.h,
    saturation = color.hsl.s,
    lightness = color.hsl.l;

  // set color values
  // elements.hslCopyValue.textContent = hsl;
  // elements.hexCopyValue.textContent = hex;
  // elements.rgbCopyValue.textContent = rgb;
  // elements.hslCopyButton.dataset.clipboardText = hsl;
  // elements.hexCopyButton.dataset.clipboardText = hex;
  // elements.rgbCopyButton.dataset.clipboardText = rgb;

  // single HSL inputs
  elements.hValue.textContent = hue;
  elements.hInput.value = hue;
  elements.sValue.textContent = saturation + '%';
  elements.sInput.value = saturation;
  elements.lValue.textContent = lightness + '%';
  elements.lInput.value = lightness;
  elements.colorInput.value = hex;


  // changes to color picker change sliders
  if (changes.h) {
    elements.hSlider.value = color.hsl.h;
  }
  if (changes.s) {
    elements.sSlider.value = color.hsl.s;
  }
  if (changes.s || changes.v) {
    elements.lSlider.value = color.hsl.l;
  }

  if (changes) {
    elements.colorInput.value = color.hexString;
  }
}

// listen to the color wheel's color:change event
colorWheel.on('color:change', onColorChange);

const colorUpdate = () => {
  colorWheel.on("color:change", (color) => {
    // get current color & channels
    let hex = color.hexString,
      rgb = color.rgbString,
      hsl = color.hslString,
      hue = color.hsl.h,
      saturation = color.hsl.s,
      lightness = color.hsl.l;

    // set color values
    elements.hslCopyValue.textContent = hsl;
    elements.hexCopyValue.textContent = hex;
    elements.rgbCopyValue.textContent = rgb;
    elements.hslCopyButton.dataset.clipboardText = hsl;
    elements.hexCopyButton.dataset.clipboardText = hex;
    elements.rgbCopyButton.dataset.clipboardText = rgb;
    // single HSL inputs
    elements.hValue.textContent = hue;
    elements.hInput.value = hue;
    elements.sValue.textContent = saturation + '%';
    elements.sInput.value = saturation;
    elements.lValue.textContent = lightness + '%';
    elements.lInput.value = lightness;
    // elements.colorInput.placeholder = hex;
    elements.colorInput.value = hex;
  });

}

const colorChange = () => {
  colorWheel.on("color:change", (color, changes) => {
    // get current color
    let currentColor = color.hsl,
      hslString = color.hslString,
      hexString = color.hexString,
      rgbString = color.rgbString;

    // create new color object & string
    let newColor = currentColor,
      newHslString = hslString,
      newHexString = hexString,
      newRgbString = rgbString;

    // changes to color picker change sliders
    if (changes.h) {
      elements.hSlider.value = color.hsl.h;
    }
    if (changes.s) {
      elements.sSlider.value = color.hsl.s;
    }
    if (changes.s || changes.v) {
      elements.lSlider.value = color.hsl.l;
    }

    if (changes) {
      // elements.colorInput.placeholder = color.hexString;
      elements.colorInput.value = color.hexString;
    }

    ///////// SLIDERS ////////////
    // change slider values
    const sliderChange = () => {
      // set new color
      color.hsl = newColor;
      elements.hValue.innerHTML = elements.hSlider.value;
      elements.sValue.innerHTML = elements.sSlider.value + "%";
      elements.lValue.innerHTML = elements.lSlider.value + "%";
    };
    // update slider UI
    const sliderUIUpdate = () => {
      // replace new colors with slider values (chg to #)
      newColor.h = Number(elements.hSlider.value);
      newColor.s = Number(elements.sSlider.value);
      newColor.l = Number(elements.lSlider.value);
      sliderChange(); // change slider values
    };

    //////// SINGLE HSL INPUTS ////////
    const mainHslInputChange = () => {

      // replace new colors with slider values (chg to #)
      newColor.h = Number(elements.hInput.value);
      newColor.s = Number(elements.sInput.value);
      newColor.l = Number(elements.lInput.value);

      // set new color
      color.hsl = newColor;

      // update UI
      elements.hValue.textContent = elements.hInput.value;
      elements.sValue.textContent = elements.sInput.value + "%";
      elements.lValue.textContent = elements.lInput.value + "%";
    };

    const colorInputChange = (color) => {
      newColor = elements.colorInput.value.replace('%', '').replace('%', '');

      if (newColor.includes('r')) {
        //rgb
        colorWheel.color.rgbString = newColor;

      } else if (newColor.length >= 3 && newColor.length <= 7) {
        //hex
        newColor.includes('#') ? colorWheel.color.hexString = newColor : colorWheel.color.hexString = '#' + newColor;
        elements.colorInput.value = newColor;
      } else {
        //hsl
        colorWheel.color.hslString = newColor;
        elements.colorInput.value = newColor;
      }
    }

    // Handling color control changes
    elements.hSlider.addEventListener('input', sliderUIUpdate);
    elements.sSlider.addEventListener('input', sliderUIUpdate);
    elements.lSlider.addEventListener('input', sliderUIUpdate);
    elements.hInput.addEventListener('change', mainHslInputChange);
    elements.sInput.addEventListener('change', mainHslInputChange);
    elements.lInput.addEventListener('change', mainHslInputChange);
    elements.colorInput.addEventListener('change', colorInputChange);

  });

}

// colorUpdate();
// colorChange();