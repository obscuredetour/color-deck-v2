import React from "react"

import ColorValues from './ColorValues';

function ColorControls() {
  return (
    <section className="color-actions">
      <div className="color-controls">
        <div className="range-wrapper">
          <input type="text" name="hue" className="h-input field" />
          <div className="range-controls">
            <p className="_title">Hue <span className="h-value value"></span></p>
            <div className="slider-controls">
              <input id="h-slider" name="h-slider" type="range" min="0" max="360" value="50" className="slider h-slider -hue" />
            </div>
          </div>
        </div>
        <div className="range-wrapper">
          <input type="text" name="saturation" className="s-input field" />
          <div className="range-controls">
            <p className="_title">Saturation <span className="s-value value"></span></p>
            <div className="slider-controls -saturation">
              <input id="s-slider" name="s-slider" type="range" min="0" max="100" value="50" className="slider s-slider -saturation" />
            </div>
          </div>
        </div>
        <div className="range-wrapper">
          <input type="text" name="lightness" className="l-input field" />
          <div className="range-controls">
            <p className="_title">Lightness <span className="l-value value"></span></p>
            <div className="slider-controls -lightness">
              <input id="l-slider" name="l-slider" type="range" min="0" max="100" value="50" className="slider l-slider -lightness" />
            </div>
          </div>
        </div>
      </div>
      <ColorValues />
    </section>

  )
}

export default ColorControls;