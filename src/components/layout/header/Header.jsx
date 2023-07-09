import { Menu } from "antd";
import { useHomeState } from "../../../hooks";
import { PlusOutlined, LineOutlined } from "@ant-design/icons";
const Header = () => {
  const { menus } = useHomeState();
  const items = menus.map((menu) => {
    return {
      key: menu.id,
      className: "text-xl text-center",
      label: menu.title,
      icon: menu.subMenu ? <PlusOutlined /> : null,
      children:
        menu.subMenu &&
        menu.subMenu.map((sub) => {
          return {
            key: sub.title,
            label: sub.title,
            className:"text-zinc-100 bg-zinc-800 text-lg",
            icon: <LineOutlined />,
          };
        }),
    };
  });
  return (
    <div className='h-screen'>
      <Menu className='text-xl p-2' mode='horizontal' items={items} />
    </div>
  );
};

export default Header;
