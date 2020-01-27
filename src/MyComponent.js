import React, {Component} from "react";
import PropTypes from "prop-types";

// 함수형
// const MyComponent = ({ name, favoriteNum ,children, obj}) => {
//
//   return (
//     <div>
//       넘어온 props.name 값은 {name}입니다.<br/>
//       children 값은 {children}입니다.<br/>
//       좋아하는 숫자값 {favoriteNum}입니다<br/>
//       obj값은 {JSON.stringify(obj)}
//     </div>
//   )
// };

// 클래스형
class MyComponent extends Component {
  static  defaultProps = {
    name: '기본 이름'
  };

  static propType = {
    name: PropTypes.string,
    obj: PropTypes.object,
    favoriteNum: PropTypes.number.isRequired,
  };

  render() {
    const {name, favoriteNum, children, obj} = this.props;
    return (
      <div>
        넘어온 props.name 값은 {name}입니다.<br/>
        children 값은 {children}입니다.<br/>
        좋아하는 숫자값 {favoriteNum}입니다<br/>
        obj값은 {JSON.stringify(obj)}
      </div>
    )
  }
}


MyComponent.defaultProps = {
  name: '기본 이름'
};
//
// MyComponent.propType = {
//   name: PropTypes.string,
//   obj: PropTypes.object,
//   favoriteNum: PropTypes.number.isRequired,
// };

export default MyComponent;