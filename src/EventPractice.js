import React, {Component} from "react";

class EventPractice extends Component {

  state = {
    username : '',
    message: ''
  };
  // [] 안에 넣으면 JSON의 "" 안으로 인식이 아니라, 변수로 체크한다.
  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  };

  handleClick = () => {
    alert(this.state.message + this.state.username);
    this.setState({
      message: '',
      username: '',
    });
  };

  handleKeyPress = (e) => {
    if ( e.key === 'Enter'){
      this.handleClick();
    }
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          value={this.state.message}
          type="text"
          name="message"
          placeholder={"아무거나 입력해 보세요"}
          onChange={
            this.handleChange
          }
          onKeyPress={this.handleKeyPress}
        />
        <input
          value={this.state.username}
          type="text"
          name="username"
          placeholder={"사용자명"}
          onChange={
            this.handleChange
          }
        />
        <button onClick={
          this.handleClick
        }>확인
        </button>
      </div>
    )
  }
}

export default EventPractice;