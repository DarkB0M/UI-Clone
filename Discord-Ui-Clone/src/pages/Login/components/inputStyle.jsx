import React from "react";

function InputStyle(props) {
  return (
    <React.Fragment>
      <input
        {...props}
        type={props.type}
        required
        className="w-80 h-10 mt-1 bg-[#202225] text-[#DCDDDE] font-semibold border-none rounded-sm focus:outline-none   "
      />
    </React.Fragment>
  );
}

export default InputStyle;
