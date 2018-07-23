import React, { Component } from 'react';
import './controls.css';

export class ToggleButton extends Component {
  render() {
    console.dir(this);
    const props = this.props;
    return (
      <label className={props.className} style={props.style}>
        <input type="checkbox" className="controls-hidden" checked={props.checked} onChange={e => props.onChange(e)}/>
        {props.children}
      </label>
    );
  }
}
