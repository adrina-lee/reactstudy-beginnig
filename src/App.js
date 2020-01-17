import React from 'react';
import './App.css';
import MyComponent from "./MyComponent";
import Counter from "./Counter";

function App() {

  return (
    <>
      <MyComponent name="마이컴포넌트" favoriteNum={13} obj={{drama: '스토브리그', '주인공': '남궁민',}}>
        칠드런값
      </MyComponent>
      <Counter/>
    </>
  );
}

export default App;
