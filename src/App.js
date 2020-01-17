import React from 'react';
import './App.css';
import MyComponent from "./MyComponent";

function App() {

  return (
    <MyComponent name="마이컴포넌트" favoriteNum={13} obj={{drama:'스토브리그', '주인공':'남궁민',}}>
      칠드런값
    </MyComponent>
  );
}

export default App;
