import React, { Component } from 'react';

export default class LoginPage extends Component {

  onClick = () => {
    const host = window.document.location.host.replace(/:.*/, '');
    const wc = new WebSocket('ws://' + host + ':9999');
    wc.onopen = e => {
      wc.send('from client');
    };
    wc.onerror = e => {
    };
    wc.onmessage = e => {
      console.log(e.data)
    };
    wc.onclose = e => {
    };
  };

  render() {
    return (
      <div className="LoginPage">
        <button onClick={this.onClick}>click me</button>
      </div>
    );
  }

}
