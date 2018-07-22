import React from 'react';
import './controls.css';

export const ToggleButton = ({className, children}) => {
  return (
    <label className={className}>
      <input type="checkbox" className="controls-hidden"/>
      {children}
    </label>
  )
};

export class ToggleButton extends Component {
  render() {
    console.dir(this);
    return (
      <label className={this.props.className} style={this.props.style}>
        <InnerCheckbox checked={this.props.checked} onChange={this.props.onChange}/>
        {this.props.children}
      </label>
    );
  }
}
