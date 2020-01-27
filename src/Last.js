import React from "react";

const Last = ({lastfunc, lastcall}) => {
    
    const onclickFunc = ( )=> {
      // console.log('props', props);
      lastcall();
    }
   
  return (
    <div>
      <button onClick={onclickFunc} >과연?</button> 
    </div>
  )
};

export default Last;