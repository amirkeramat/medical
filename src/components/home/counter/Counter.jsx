import {
  ExperimentOutlined,
  ApiOutlined,
  MedicineBoxOutlined,
  BulbOutlined,
} from "@ant-design/icons";

const Counter = () => {
  const items = [
    { id: 1, icon: <ExperimentOutlined />, label: "56k", title: "تجربه" },
    { id: 2, icon: <ApiOutlined />, label: "+100", title: "برنده جایزه" },
    { id: 3, icon: <MedicineBoxOutlined />, label: "999k", title: "پشتیبانی" },
    { id: 4, icon: <BulbOutlined />, label: "+540", title: "پزشکان متخصص" },
  ];
  return (
    <div className="container w-full h-[300px] bg-gradient-to-br from-zinc-950/90 via-zinc-900 to-zinc-950 p-12 flex justify-center items-center">
      <div className="w-full grid grid-cols-2 md:grid-cols-4">
        {items.map((item) => (
          <div className="w-full flex flex-col items-center " key={item}>
            <i className="text-teal-500 text-4xl p-2">{item.icon}</i>
            <h3 className="text-zinc-50 text-3xl p-2">{item.label}</h3>
            <p className="text-teal-500 p-2">{item.title}</p>
          </div>
        ))}
        <div></div>
      </div>
    </div>
  );
};

export default Counter;
