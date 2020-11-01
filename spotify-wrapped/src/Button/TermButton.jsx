import React, {Component} from "react";
import './TermButton.css';

export default class TermButton extends Component {
  state = {};

  render() {
    return (
      <div className="term-button" value={this.props.term}>
        <form action="/top" method="get">
          <button name="term" type="submit" value={this.props.term} id="submit">{this.props.termdesc}</button>
        </form>
      </div>
    )
  }
}
