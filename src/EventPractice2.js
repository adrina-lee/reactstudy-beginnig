import React, {Component, useState} from "react";

const EventPractice2 = () => {

  const [form, setForm] = useState({
    username : '',
    message : '',
  });
  const { message, username } = form;

  // const [username, setUsername] = useState('');
  // const [message, setMessage] = useState('');
  // const onChangeUsername = e => setUsername(e.target.value);
  // const onChangeMessage = e => setMessage(e.target.value);

  const onChange = e => {
    const nextForm = {
      ...form,
      [e.target.name] : e.target.value,
    };
    setForm(nextForm);
  };

  const onClick = () => {
    alert(message + username);
    setForm ({
      message : '',
      username : '',
    })
  };
  const onKeyPress = e => {
    if (e.key === 'Enter') onClick();
  };

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        value={message}
        type="text"
        name="message"
        placeholder={"아무거나 입력해 보세요"}
        onChange={
         onChange
        }
        onKeyPress={onKeyPress}
      />
      <input
        value={username}
        type="text"
        name="username"
        placeholder={"사용자명"}
        onChange={
          onChange
        }
      />
      <button onClick={
        onClick
      }>확인
      </button>
    </div>
  )
};

export default EventPractice2;