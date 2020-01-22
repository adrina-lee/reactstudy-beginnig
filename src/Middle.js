import React from "react";
import Last from "./Last";

const Middle = ({func, callbackFunc}) => {
  // console.log('미들', callbackFunc);
  return (
    <div>
      <Last lastfunc={func} lastcall={callbackFunc} /> 
    </div>
  )
};

export default Middle;