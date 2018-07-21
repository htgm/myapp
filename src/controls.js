import React, { Component } from 'react';
import './controls.css';

const InnerCheckbox = props => {
  function callParentOnChange(e) {
    props.onChange(e);
  }
  return (
    <input type="checkbox" className="controls-hidden" checked={props.checked} onChange={callParentOnChange}/>
  );
};

export class ToggleButton extends Component {
  render() {
    console.dir(this);
    return (
      <label className={this.props.className}>
        <InnerCheckbox checked={this.props.checked} onChange={this.props.onChange}/>
        {this.props.children}
      </label>
    );
  }
}