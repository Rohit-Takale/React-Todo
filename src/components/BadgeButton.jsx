import React from "react";

const BadgeButton = ({text,background,onClick,name}) => {
  return (
    <div>
      <span onClick={onClick} name={name} className="bg-red-100 text-red-800 text-xs cursor-pointer font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
        {!text ? 'Click' : text}
      </span>
    </div>
  );
};

export default BadgeButton;
