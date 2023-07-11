import { Menu, Button } from "antd";
import { useHomeState } from "../../../hooks";
import { Link } from "react-router-dom";
import {
  PlusOutlined,
  LineOutlined,
  MenuOutlined,
  ShoppingCartOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { useState } from "react";
const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [searchToggle, setSearchToggle] = useState(false);
  const { menus, logo } = useHomeState();

  const items = menus.map((menu) => {
    return {
      key: menu.id,
      className: "text-xl",
      label: <Link to={menu.code}>{menu.title}</Link>,
      icon: menu.subMenu ? <PlusOutlined /> : null,
      children:
        menu.subMenu &&
        menu.subMenu.map((sub) => {
          return {
            key: sub.title,
            label: <Link className="text-zinc-50 md:text-teal-500" to={sub.code}>{sub.title}</Link>,
            className: "text-zinc-950 text-lg",
            icon: <LineOutlined />,
          };
        }),
    };
  });

  return (
    <header className="container fixed z-[999] bg-zinc-50">
      <div className="flex justify-between items-center  p-2">
        <div className="logo-container">
          <img className="w-[100px]" src={logo.cover} />
        </div>
        <Menu
          className="text-xl p-2 w-full hidden md:block"
          mode="horizontal"
          items={items}
        />
        <div className="flex items-center space-x-2">
          <ShoppingCartOutlined className="mx-2 text-2xl hover:text-teal-500 duration-500 cursor-pointer" />
          <SearchOutlined
            onClick={() => setSearchToggle((prv) => !prv)}
            className="mx-2 text-2xl hover:text-teal-500 duration-500 cursor-pointer"
          />
          <Button
            size="middle"
            type="default"
            className="text-zinc-100 bg-teal-500"
          >
            تماس بگیرید
          </Button>
          <MenuOutlined
            onClick={() => setToggle((prv) => !prv)}
            className={`block md:hidden duration-500 text-3xl ${
              toggle ? "rotate-90" : "rotate-0"
            } `}
          />
        </div>
      </div>
      <div
        className={`w-full overflow-hidden duration-500 ${
          searchToggle ? "max-h-[200px]" : "max-h-0"
        }`}
      >
        <div className="w-full overflow-hidden bg-teal-300 flex  justify-center items-center p-2">
          <input
            className="relative w-[80%] p-2 outline-none text-xl placeholder:text-xl placeholder:text-zinc-500"
            type="text"
            placeholder="دنبال چی می گردی؟"
          />
          <SearchOutlined className="mx-2 text-3xl hover:text-teal-50 duration-500 cursor-pointer  left-0" />
        </div>
      </div>
      <div
        className={`overflow-hidden duration-700 ${
          toggle ? "max-h-[900px] opacity-100 " : "max-h-0 opacity-0 "
        }`}
      >
        <Menu
          className="text-xl p-2 w-full block md:hidden bg-teal-500/80"
          mode="inline"
          items={items}
        />
      </div>
    </header>
  );
};

export default Header;
