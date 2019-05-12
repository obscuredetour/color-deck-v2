import React from "react"

function ColorValues() {
  return (
    <div className='color-values'>
      <div className="color-values__header">
        <p className="_title">Color Values</p>
      </div>
      <div className="copy-block">
        <p className="text">
          <span className="hsl-copy-text">hsl(35, 34%, 45%)</span>
        </p>
        <button className="button-default -copy -hsl" data-clipboard-text="">
          <span className="graphic">
            <svg className="icon" viewBox="0 0 20 20" width="16" height="16">
              <path d="M6 6V2c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4v4a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h4zm2 0h4a2 2 0 0 1 2 2v4h4V2H8v4zM2 8v10h10V8H2z" />
            </svg>
          </span>
        </button>
        <div className="tooltip hsl-tip" aria-hidden="true">
          <span className="tooltip-text">Copied!</span>
        </div>
      </div>
      <div className="copy-block">
        <p className="text">
          <span className="hex-copy-text">hsl(35, 34%, 45%)</span>
        </p>
        <button className="button-default -copy -hex" data-clipboard-text="">
          <span className="graphic">
            <svg className="icon" viewBox="0 0 20 20" width="16" height="16">
              <path d="M6 6V2c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4v4a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h4zm2 0h4a2 2 0 0 1 2 2v4h4V2H8v4zM2 8v10h10V8H2z" />
            </svg>
          </span>
        </button>
        <div className="tooltip hex-tip" aria-hidden="true">
          <span className="tooltip-text">Copied!</span>
        </div>
      </div>
      <div className="copy-block">
        <p className="text">
          <span className="rgb-copy-text">hsl(35, 34%, 45%)</span>
        </p>
        <button className="button-default -copy -rgb" data-clipboard-text="">
          <span className="graphic">
            <svg className="icon" viewBox="0 0 20 20" width="16" height="16">
              <path d="M6 6V2c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4v4a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h4zm2 0h4a2 2 0 0 1 2 2v4h4V2H8v4zM2 8v10h10V8H2z" />
            </svg>
          </span>
        </button>
        <div className="tooltip rgb-tip" aria-hidden="true">
          <span className="tooltip-text">Copied!</span>
        </div>
      </div>
    </div>
  )
}

export default ColorValues;
      