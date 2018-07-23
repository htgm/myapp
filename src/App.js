import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import MainMenu from './MainMenu';

class App extends Component {
  render() {
    return (
      <div className="App">
{/*}        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React &amp; hello hello world</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>*/}
        <MainMenu/>
      </div>
    );
  }
}

//固定メッセージの取得
App.msg = function (msgid) {
  //クライアントの言語とmsgidからサーバーから取得
  //取得したものはキャッシュされる
};

App.tipsQueue = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ultricies cursus magna, in laoreet lacus sollicitudin ac. Nunc posuere justo non nunc auctor, ullamcorper scelerisque justo rhoncus. Vivamus placerat arcu dui, in gravida nunc suscipit ac. Morbi iaculis mauris a ipsum porta fringilla. Ut sed mi lectus. Aenean cursus dolor metus, non ultricies magna scelerisque et. Nulla ac lorem erat. Fusce pulvinar, mi hendrerit consectetur tempor, massa lacus finibus ipsum, sit amet scelerisque elit risus id turpis. Curabitur posuere leo ex, vitae varius nibh tincidunt at.',
  'Pellentesque at lorem non nibh porta euismod non id diam. Duis fermentum sem lorem, eu suscipit ante mollis nec. Donec nec ante sapien. Curabitur condimentum vitae risus rhoncus pretium. Nunc lacinia mauris dolor, dapibus lacinia orci scelerisque non. Etiam quis mi sit amet ipsum faucibus facilisis at id augue. Proin tempor felis vitae elit dictum dictum at eu ligula. Sed viverra est sed gravida facilisis. Duis semper mollis laoreet. Nullam tristique, augue eu cursus euismod, enim dolor semper tortor, vitae tincidunt odio justo nec sapien. Pellentesque gravida tincidunt viverra. Mauris fermentum sed libero volutpat vulputate. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi vel rhoncus massa. Donec tincidunt urna ipsum.',
  'Praesent consequat est tellus, at vulputate tortor efficitur vitae. Phasellus vitae magna sed magna laoreet tincidunt. Praesent quis erat mi. Vivamus tortor arcu, vehicula non ligula vitae, ornare lobortis massa. In finibus sapien ac lacus fringilla aliquet. Donec vestibulum varius ante, quis lobortis nunc maximus vel. Praesent quis purus at ante malesuada viverra vel a arcu. Integer eu ornare mi, non pulvinar quam.',
  'Pellentesque fermentum eleifend justo mollis molestie. Nullam molestie volutpat ultricies. Donec suscipit mauris id metus suscipit, in ultrices mi vulputate. Curabitur libero mauris, eleifend non pretium quis, faucibus nec ante. Proin eget eros in enim tincidunt sollicitudin sed eget eros. Curabitur a porttitor nibh, id sollicitudin felis. Nullam et eleifend nisi, quis semper elit.',
  'Nulla interdum augue nibh, id tristique eros placerat a. Vestibulum ornare velit at sem sodales, a vestibulum justo dignissim. Morbi sagittis commodo leo a eleifend. Donec lobortis lacinia lobortis. Fusce et nulla eleifend, mollis orci eu, imperdiet nisl. Praesent aliquam nisl nec lorem lobortis, eu hendrerit nibh rutrum. In quis urna a erat tincidunt malesuada. Suspendisse elementum euismod sagittis. Nulla lobortis felis erat, sed ullamcorper augue elementum ac.'
];

export default App;
