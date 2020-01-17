import React from "react";

const MyComponent = props => {

  console.log(props);

  return (
    <div>
      넘어온 props.name 값은 {props.name}입니다.
      children 값은 {props.children}입니다.
    </div>
  )
};

MyComponent.defaultProps = {
  name : '기본 이름'
};

export default MyComponent;