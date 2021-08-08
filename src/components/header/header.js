import React from "react";
import "./header.css"

class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <ul>
        <li>
          <a class="active" href="#home">
            Home
          </a>
        </li>
        <li>
          <a href="#news">News</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
      </ul>
    );
  }
}

export default Header;
