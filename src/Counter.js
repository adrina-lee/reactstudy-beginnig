import React, {Component, useState} from 'react';

// const Counter = () => {
//
//   const [ number, setNumber ] = useState(0);
//   const [ name, setName] = useState('이은혜');
//   const [ obj, setObj] = useState({
//     name : '아이스크림',
//     num : 3
//   });
//
//   return (
//     <div>
//       {name}가 {number}명 있다.
//       {JSON.stringify(obj)}
//       <button onClick={()=>setObj({...obj, num:1})} > +1</button>
//       <button onClick={(e)=>{console.log(e.target.value)}} > eeeeeee</button>
//     </div>
//   );
// };
//
// export default Counter;
//
// eslint-disable-next-line no-undef
class Counter extends Component {

  state = {
    number: 0,
    fixedNumber: 0,
    test: () => console.log('바뀌기 전'),
  };


  render() {

    const {number, fixedNumber, test} = this.state;
    // const test = () => alert('test');

    return (
      <div>

        <h2>{number}</h2>
        <h2>바뀌지 않는 값 : {fixedNumber}</h2>
        <button
          onClick={() => {
            // this.setState(prevState => {
            //   return {number: prevState.number + 1}
            // });
            this.setState(
              {
                number: number + 1,
                fixedNumber: 9,
                test : () => alert('test')
              }, () => {

              }
            );
          }}
        >
          +1
        </button>

      </div>
    );
  }

}

export default Counter;