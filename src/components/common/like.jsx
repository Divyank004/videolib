import React, { Component } from "react";

class Like extends Component {
  render() {
    let classes = "fa fa-heart-o";
    if (this.props.liked) {
      classes = "fa fa-heart";
    }
    return (
      <div>
        <i
          className={classes}
          style={{ cursor: "pointer" }}
          aria-hidden="true"
          onClick={this.props.onClick}
        ></i>
      </div>
    );
  }
}

export default Like;
