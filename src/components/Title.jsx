import React from "react";

const Title = ({ text }) => {
  return (
    <div className="">
     <p className="text-center font-thin text-5xl capitalize my-5">{!text ? '' : text}</p>
    </div>
  );
};

export default Title;
