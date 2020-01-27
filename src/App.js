import React, {Component} from 'react';
import './App.css';
import MyComponent from "./MyComponent";
import Counter from "./Counter";
import Say from "./Say";
import EventPractice from "./EventPractice";
import EventPractice2 from "./EventPractice2";
import ValidationSample from "./ValidationSample";
import ScrollBox from "./ScrollBox";
import IterationSample from "./IterationSample";
import Info from "./hooks/Info";
import Average from "./hooks/Average";
import Grand from "./Grand";

class App extends Component {
  render() {


    return (
      <>
        <IterationSample />
        <Info/>
        <Average/>
        {/*<div>*/}
        {/*  <ScrollBox ref={(ref) => this.scrollBox = ref}/>*/}
        {/*  <button onClick={() => this.scrollBox.scrollToBottom()}>*/}
        {/*    맨 밑으로*/}
        {/*  </button>*/}
        {/*</div>*/}
        {/*<ValidationSample/>*/}
        {/*<MyComponent  favoriteNum={13} obj={{drama: '스토브리그', '주인공': '남궁민',}}>*/}
        {/*  칠드런값, ㅇㅇㅇ*/}
        {/*</MyComponent>*/}
        {/*<Counter/>*/}
        {/*<Say/>*/}
        {/*<EventPractice/>*/}
        {/*<EventPractice2/>*/}
        {/*<Grand />*/}
      </>
    );
  }
}

export default App;
