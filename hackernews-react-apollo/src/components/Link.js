import React, { Component } from "react";

class Link extends Component {
  render() {
    return (
      <li className="mb3">
        {this.props.link.description}{" "}
        <a href={this.props.link.url}>(Link)</a>
      </li>
    );
  }
}

export default Link;
