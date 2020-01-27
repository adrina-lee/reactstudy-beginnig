import React, {useCallback} from "react";
import Middle from "./Middle";

const Grand = () => {

    const propsFunc = props => {
        alert(props);
    }

    const callbackFunc = useCallback(()=>{
        alert('callbackFunc');
    },[])

  return (
    <div>
      <Middle func={propsFunc} callbackFunc={callbackFunc}/> 
    </div>
  )
};

export default Grand;