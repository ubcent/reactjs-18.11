import './Header.css'

import React, {Component} from "react";

export class Header extends Component{
  render() {
    return (
      <div className="header">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Tux.png/220px-Tux.png" alt=""/>
        <h3>Moshe Gelberg</h3>
      </div>
    );
  }
}
