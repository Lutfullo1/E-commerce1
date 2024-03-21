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

export const Header = () => {
  const { close, isOpen, open } = useModal();
  const { data, isLoading } = useGetCatalog();
  return (
    <div className="container">
      <div className="flex gap-[24px] py-2 justify-end">
        <p>Доставка и оплата</p>
        <p>Пункты выдачи</p>
        <p>Поддержка</p>
        <p>+998 90 253 77 53</p>
      </div>
      <div className="flex justify-between items-center py-[17px]">
        <div className="flex">
          <Modal close={close} isOpen={isOpen}>
            {isLoading ? (
              <Skeleton count={6} height={50} />
            ) : (
              <div className="grid grid-cols-3 gap-5">
                {data?.map((item) => (
                  <Link to={`/category/${item.name}`}>
                    <div className="flex items-center gap-2">
                      <img src={item.img} alt="img" />
                      <p>{item.text}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </Modal>
          <a href="#">
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
  );
};
