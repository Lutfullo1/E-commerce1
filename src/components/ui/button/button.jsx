import React from "react";
import clsx from "clsx";

export const Button = ({ variant, children, onClick, type, icon: Icon }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={clsx(
        "px-[15px] py-[18px] flex items-center gap-[10px] text-[20px] font-[400] cursor-pointer text-center",
        {
          "bg-blue-400 hover:bg-white hover:text-arapawa hover:border-[1px] duration-500":
            variant === "blue",
        }
      )}
    >
      {Icon ? Icon : ""}
      <span>{children}</span>
    </button>
  );
};
