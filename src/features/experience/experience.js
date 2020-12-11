import React, { Component } from "react";

export class Experience extends Component {
  render() {
    return (
      <div className="exp-box">
        <div className="title-text exp-title-adjust">{this.props.name}</div>
        <div className="regular-text-greenish exp-date-adjust green">
          {this.props.date}
        </div>
        <div className="regular-text-green exp-text-adjust exp-text-box">
          {this.props.text}
        </div>
        <div className="exp-img-adjust">
          <img src={this.props.img} alt="React Logo" />{" "}
        </div>
      </div>
    );
  }
}
