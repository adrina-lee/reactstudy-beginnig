import React, {Component} from "react"


class Counter extends Component {
  state = {
    number: 0,
    fixedNumber: 0,
  };


  render() {
    const {number, fixedNumber} = this.state;
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
                number: number + 1
              },
              () => {
                console.log(this.state);
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