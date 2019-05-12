import React from "react"

// import ColorValues from './ColorValues';

import background_graphic from '../images/add-color-palette.svg';

function SavedColors() {
  return (
    <section className="custom-colors-wrapper">
      <div class="custom-colors">
        <div className="controls">
        {/* <div className="_mt1 inner">
          <h2>Colors</h2>
          <p className="_mt1">Try printing your color palette.</p>
          </div> */}
        <div className="options">
          <div className="swatch-sm">
            <button className="button-default -copy -sm">
              <span className="graphic">
                <svg className="icon -plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path fill-rule="evenodd" d="M17 11a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 0 1 2 0v4h4z"></path>
                </svg>
              </span>
            </button>
          </div>
          <button className="button-default -clear">
            <span className="graphic">
              <svg className="-plus icon -clear" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill-rule="evenodd" d="M17 11a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 0 1 2 0v4h4z"></path>
              </svg>
            </span>
          </button>
        </div>
      </div>
      <div className="user-colors">
        {/* <div className="saved-color">
            <input type="text" className="saved-color-name" placeholder="color name"/>
            <p><span className="saved-color-value"></span></p>
            <div className="saved-color-copy">
              <button className="button-default -saved -hsl saved-color-copy__hsl">HSL</button>
              <button className="button-default -saved -hex saved-color-copy__hex">HEX</button>
              <button className="button-default -saved -rgb saved-color-copy__rgb">RGB</button>
            </div>
            <button className="button-default -clear -saved">
              <span className="graphic">
                <svg className="-plus icon -clear" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path fill-rule="evenodd" d="M17 11a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 0 1 2 0v4h4z"></path>
                </svg>
              </span>
            </button>
          </div> */}
        </div>
        <p className="message" aria-hidden="true">
          Save some colors!
          <br/>
          <span>Create a color palette by saving any color.</span>
        </p>
        <div className="background-graphic">
          <img src={background_graphic} alt=""/>
        </div>
      </div>
    </section>

  )
}

export default SavedColors;