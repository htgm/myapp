import React, { Component } from 'react';

export default class TipsLog extends Component {
  log(tips) {
    tips = Array.isArray(tips) ? tips : [ tips ];
    tips.forEach(t => {
      //props of tip
      // neverShowAgain : bool
      // tips: string or tag
      // category: msgid
    });
  }

  render() {
    return (
      <div></div>
    );
  }
}
