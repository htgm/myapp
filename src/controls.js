import React, { Component } from 'react';
import './controls.css';

export class ToggleButton extends Component {
  render() {
    console.dir(this);
    return (
      <label className={this.props.className}>
        <input type="checkbox" className="controls-hidden" checked={this.props.checked} onChange={this.props.onChange}/>
        {this.props.children}
      </label>
    );
  }
};
