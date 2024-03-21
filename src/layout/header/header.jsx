import React from "react";
import { Search } from "./components/search";
import { Buttons } from "./components/buttons";
import { Button } from "../../components/ui/button/button";
import logo from "../../assets/imgs/logo.svg";
import { MenuIcon } from "../../assets/icons/menu-icon";
import { Modal } from "../../components/ui/modal/modal";
import { useModal } from "../../hooks/useModal";
import { Link } from "react-router-dom";
import { useGetCatalog } from "./service/query/useGetCatalog";
import Skeleton from "react-loading-skeleton";
import { UserIcon } from "../../assets/icons/user-icon";
import { HeartIcon } from "../../assets/icons/heart-icon";
import { CartIcon } from "../../assets/icons/cart-icon";

export const Header = () => {
  const { close, isOpen, open } = useModal();
  const { data, isLoading } = useGetCatalog();
  return (
    <div className="container">
      <div className="gap-[24px] py-2 justify-end hidden lg:flex">
        <p>Доставка и оплата</p>
        <p>Пункты выдачи</p>
        <p>Поддержка</p>
        <p>+998 90 253 77 53</p>
      </div>
      <div className="hidden lg:block">
        <div className="flex justify-between items-center py-[17px]">
          <div className="flex">
            <Modal close={close} isOpen={isOpen}>
              {isLoading ? (
                <Skeleton count={6} height={50} />
              ) : (
                <div className="w-[1200px] grid grid-cols-3 gap-5 p-3">
                  {data?.map((item, i) => (
                    <Link key={i} to={`/category/${item.name}`}>
                      <div className="flex items-center gap-[10px] bg-gray-200 p-3">
                        <img className="w-[150px]" src={item.img} alt="img" />
                        <p>{item.text}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </Modal>
            <a className="mr-[50px]" href="#">
              <img src={logo} alt="logo" />
            </a>
            <Button onClick={open} variant="blue" icon={<MenuIcon />}>
              Каталог
            </Button>
          </div>
          <Search />
          <Buttons />
        </div>
      </div>
      <div className="lg:hidden">
        <div className="py-[15px] flex justify-between items-center">
          <div>
            <UserIcon />
          </div>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <div className="flex items-start gap-4">
            <HeartIcon />
            <CartIcon />
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Button onClick={open} variant="blue" icon={<MenuIcon />}></Button>
          <input
            className="flex-grow border-2 py-[7px] px-2"
            type="text"
            placeholder="Поиск"
          />
        </div>
      </div>
    </div>
  );
};
