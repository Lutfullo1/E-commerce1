import React from "react";
import { UserIcon } from "../../../../assets/icons/user-icon";
import { HeartIcon } from "../../../../assets/icons/heart-icon";
import { CartIcon } from "../../../../assets/icons/cart-icon";

export const Buttons = () => {
  return (
    <div className="flex items-center gap-[32px]">
      <div className="flex flex-col items-center">
        <span>
          <UserIcon />
        </span>
        <p>Войти</p>
      </div>
      <div className="flex flex-col items-center">
        <span>
          <HeartIcon />
        </span>
        <p>Избранное</p>
      </div>
      <div className="flex flex-col items-center">
        <span>
          <CartIcon />
        </span>
        <p>Корзина</p>
      </div>
    </div>
  );
};
