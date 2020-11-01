import React, {Component} from "react";
import './TopButton.css';

export default class TopButton extends Component {
  state = {};

  render() {
    return (
      <div onClick={this.props.onClick} className="button">
                <span>
                    top {this.props.category}
                </span>
      </div>);
  }
}