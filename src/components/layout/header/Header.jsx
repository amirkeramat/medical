import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { useHomeState } from "../../../hooks";
const Header = () => {
  const { menus } = useHomeState();
  console.log(menus);
  return (
    <div className="flex">
      {menus.map(
        (menu) =>
          menu.subMenu && <Dropdown menu={menu.subMenu}>{menu.title}</Dropdown>
      )}
    </div>
  );
};

export default Header;
