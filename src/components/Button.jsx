import React from "react";

const Button = (props) => {
  return (
    <div val={props.children} className={` bg-diff_white px-[25px] py-[5.5px] text-[15px] rounded-full relative after:content-[attr(val)] after:absolute after:px-[25px] after:-bottom-5 after:left-0 hover:after:bottom-[4.5px] before:top-[5.5px]  hover:before:-top-5 after:duration-200 overflow-hidden before:content-[attr(val)] before:absolute before:px-[25px] before:left-0 before:text-black before:duration-200 text-transparent after:text-black cursor-pointer` }>
      {props.children}
    </div>
  );
};

export default Button;
