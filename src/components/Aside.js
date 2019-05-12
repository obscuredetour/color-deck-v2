import React from "react";

import logo from '../images/icons/icon-192x192.png';
import icon_info from '../images/icon-info.svg';

function Aside() {
  return (
    <aside className="side-bar inner">
      <a className="logo-wrap" data-url="color.obscuredetour.com" href="index.html">
        <img src={logo} className="logo" alt="Color Deck logo" />
        <span className="title">Color Deck</span>
      </a>
      <div className="color-wheel" id="color-wheel"></div>
      <section className="inner color-current">
        <p className="_title">Swatch</p>
        <div id="swatch" className="swatch">
          <button className="button-default -copy -save" data-color="">
            <span className="graphic">
              <svg className="-plus icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill-rule="evenodd" d="M17 11a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 0 1 2 0v4h4z"></path>
              </svg>
            </span>
          </button>
        </div>
    </section>
    <p className="_title">
      Color Deck is a 
      <a href="about">
        HSL driven color palette collector</a>,<br/>&mdash;made for humans.
    </p>
    <p className="_heather side-info">
      <img src={icon_info} alt=""/>
     <span>
      Copy any color value for current or saved colors with the press of a button.
     </span>
    </p>
    </aside>
  )
}

// App functions
// const getStartColor = () => {
//   const letters = '0123456789ABCDEF';
//   let color = '#';
//   for (var i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// };

// const showTooltip = async (el) => {
//   // pass in tooltip element
//   // 'show' tooltip via class
//   el.classList.toggle('visible');
//   // wait 1 second and remove visible class
//   const delay = ms => new Promise(res => setTimeout(res, ms));
//   await delay(1000);
//   el.classList.toggle('visible');
// };

// Create and Display Color Wheel
// let colorWheel = new iro.ColorPicker("#color-wheel", {
//   width: 285,
//   height: 285,
//   color: getStartColor(),
//   markerRadius: 8,
//   padding: 4,
//   sliderMargin: 24,
//   sliderHeight: 36,
//   borderWidth: 3,
//   borderColor: "#1d1d1d",
//   anticlockwise: true,
//   css: {
//     "#swatch, .swatch-sm, .slider, .slider-controls.-saturation, .slider-controls.-lightness": {
//       "background-color": "$color"
//     }
//   }
// });

export default Aside;