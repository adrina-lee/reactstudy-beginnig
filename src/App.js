import React, {Fragment} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const name = '리액트';
  const style = {
    backgroundColor : 'black',
    color: 'aqua'
  };
  return (
    <Fragment>
      {/*{name === '리액트'? (<div>리액트입니다.</div>):(<div>리액트가 아닙니다.</div>)}*/}
      {name && name === '리액트'&& (<div style={{...style, fontSize: 24}}>리액트입니다.</div>)}

      <input type='text' required></input>
    </Fragment>
  );
}

export default App;
