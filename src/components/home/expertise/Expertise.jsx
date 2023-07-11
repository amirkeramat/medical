import { useHomeState } from "../../../hooks";
import {
  UserOutlined,
  RocketOutlined,
  GroupOutlined,
  ExperimentOutlined,
} from "@ant-design/icons";
const Expertise = () => {
  const { expertise } = useHomeState();
  const { label, title, cover, description, items } = expertise;
  const icons = [
    { id: 1, icon: <UserOutlined /> },
    { id: 2, icon: <RocketOutlined /> },
    { id: 3, icon: <ExperimentOutlined /> },
    { id: 4, icon: <GroupOutlined /> },
  ];
  const ExpertiseBox = ({ item }) => {
    const { id, title, description } = item;
    const icon = icons.filter((icon) => icon.id === id);
    return (
      <div className="shadow-sm shadow-zinc-950/10 p-4 group">
        <i className="text-teal-500 bg-white p-6 rounded-se-2xl rounded-te-2xl rounded-br-3xl rounded-bl-3xl text-2xl flex justify-center items-center w-[25px] h-[25px] group-hover:bg-teal-500 group-hover:text-zinc-50 duration-500">
          {icon[0].icon}
        </i>
        <h6>{title}</h6>
        <p className="text-zinc-500">{description}</p>
      </div>
    );
  };
  return (
    <section className="w-full container grid grid-cols-1 md:grid-cols-2 p-2">
      <div className="p-4">
        <h6 className="text-teal-500 text-xl p-2">{label}</h6>
        <h5 className="text-2xl font-semibold p-2">{title}</h5>
        <p className="text-zinc-500">{description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 p- gap-2  bg-zinc-50/50">
          {items.map((item) => (
            <ExpertiseBox key={item.id} item={item} />
          ))}
        </div>
      </div>
      <img className="w-full h-full md:h-[500px]" src={cover} alt="" />
    </section>
  );
};

export default Expertise;
