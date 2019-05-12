import React from "react"

// import '../scss/Header.scss';


import icon_github from '../images/icon-github.svg';
import icon_help from '../images/icon-help.svg';
import icon_info from '../images/icon-info.svg';

// console.log(github_logo);

function Header() {
  return (
    <header className="header-wrapper">
      <div className="color-form">
        <input id="colorInput" type="text" name="colorInput" className="color-input field" />
      </div>
      <div className="header-content">
        <a className="link" href="about.html">
          <img src={icon_info} alt="Information icon" />
        </a>
        <a className="link" href="how-to-use.html">
          <img src={icon_help} alt="Question mark - help icon" />
        </a>
        <a className="link" target="_blank" rel="noopener noreferrer" href="https://github.com/obscuredetour/color-deck">
          <img src={icon_github} alt="GitHub logo" />
        </a>
      </div>
    </header>
  )
}

export default Header;