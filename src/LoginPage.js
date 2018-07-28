import React, { Component } from 'react';
import App from './App';

export default class LoginPage extends Component {

  onClick = e => {
    if (App.ws) {
      console.log('has ws -> close')
      App.ws.close();
      App.ws = null;
    }
    const host = window.document.location.host.replace(/:.*/, '');
    const ws = App.ws = new WebSocket('ws://' + host + ':9999');
    ws.onopen = e => {
      console.log('open')
      ws.send('text from client');
      ws.send(new Uint8Array([1,2,3]).buffer);
    };
    ws.onerror = e => {
      console.log('error')
    };
    ws.onmessage = e => {
      console.log('message')
      console.log(e.data)
    };
    ws.onclose = e => {
      console.log('close');
    };
  };
  onClick2 = e => {
    if (App.ws) {
      console.log('has ws -> close')
      App.ws.close();
      App.ws = null;
    }
  };

  render() {
    return (
      <div className="LoginPage">
        <button onClick={this.onClick}>connect</button>
        <button onClick={this.onClick2}>disconnect</button>
      </div>
    );
  }

}
