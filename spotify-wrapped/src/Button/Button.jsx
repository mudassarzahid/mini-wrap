import React, {Component} from "react";
import './Button.css';

export default class Button extends Component {
    state = {};

    render() {
        return (
            <div onClick={this.props.onClick} className="button">
                <span>top {this.props.category}</span>
            </div>);
    }
}