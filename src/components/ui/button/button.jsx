import React from "react";
import clsx from "clsx";

export const Button = ({ variant, children, onClick, type, icon: Icon }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={clsx(
        "px-[10px] py-[10px] flex items-center gap-[5px] text-[20px] font-[400] cursor-pointer text-center border-2",
        {
          "w-[150px] bg-blue-400 hover:bg-white duration-500":
            variant === "blue",
        }
      )}
    >
      {Icon ? Icon : ""}
      <span>{children}</span>
    </button>
  );
};
