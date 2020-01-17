import React from 'react';
import './App.css';
import MyComponent from "./MyComponent";
import Counter from "./Counter";
import Say from "./Say";
import EventPractice from "./EventPractice";
import EventPractice2 from "./EventPractice2";

function App() {

  return (
    <>
      <MyComponent name="마이컴포넌트" favoriteNum={13} obj={{drama: '스토브리그', '주인공': '남궁민',}}>
        칠드런값
      </MyComponent>
      <Counter/>
      <Say/>
      <EventPractice />
      <EventPractice2/>
    </>
  );
}

export default App;
