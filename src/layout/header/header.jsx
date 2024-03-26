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
import useDebounce from "../../hooks/useDebounse";
import { useGetSearch } from "./components/search/service/useGetSearch";

export const Header = () => {
  const [input, setInput] = React.useState("");
  const { close, isOpen, open } = useModal();
  const { data, isLoading } = useGetCatalog();
  const value = useDebounce(input);
  const { data: searchedData, isLoading: isLoadingSearchData } =
    useGetSearch(value);
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
          <div className="flex items-center gap-7">
            <Modal close={close} isOpen={isOpen}>
              {isLoading ? (
                <Skeleton count={6} height={50} />
              ) : (
                <div className="w-[1200px] grid grid-cols-3 gap-5 p-3">
                  {data?.map((item, i) => (
                    <Link key={i} to={`/category/${item.name}`}>
                      <div className="flex items-center gap-[10px] bg-gray-200 p-3 rounded-lg">
                        <img className="w-[150px]" src={item.img} alt="img" />
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
          <Search input={input} setInput={setInput} />
          <Buttons />
        </div>
        {isLoadingSearchData ? (
          <Skeleton height={100} count={6} />
        ) : (
          <div className="bg-[#fffbfb7c] w-[800px] mt-5 grid grid-cols-5 rounded-lg mx-[auto] absolute z-[999] overflow-y-auto max-h-[75vh] left-0 right-0">
            {searchedData?.map((item) => (
              <div
                key={item.id}
                className="text-center m-2  flex-col items-center bg-white mt-4 p-2 rounded-lg shadow-md transition-transform transform hover:-translate-y-1 hover:shadow-lg"
                style={{ maxWidth: "170px" }}
              >
                <div className="w-full h-32 overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={item.img}
                    alt="img"
                  />
                </div>
                <p className="text-center font-semibold text-sm mt-2">
                  {item.title.slice(0, 20)}
                </p>
                <p className="text-sm">{item.price}</p>
              </div>
            ))}
          </div>
        )}
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
