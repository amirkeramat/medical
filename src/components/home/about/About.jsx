import { useHomeState } from "../../../hooks";
import { CheckOutlined, LeftCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
const About = () => {
  const navigate = useNavigate();
  const { about } = useHomeState();
  const { label, title, cover, description, items } = about;
  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-2 p-4 shadow-sm shadow-zinc-950/10 container">
      <img className="w-full h-full md:h-[500px]" src={cover} alt="" />
      <div className="p-4">
        <h6 className="text-teal-500 text-xl p-2">{label}</h6>
        <h5 className="text-2xl font-semibold p-2">{title}</h5>
        <p className="text-zinc-700 p-2">{description}</p>
        <div className="p-2">
          {items.map((item) => (
            <p className="p-2 flex items-center" key={item.id}>
              <CheckOutlined className="text-teal-500" />
              {item.title}
            </p>
          ))}
        </div>
        <Button
          onClick={() => navigate("/about")}
          size="large"
          className="bg-teal-500 text-zinc-50 flex items-center mx-2 my-4"
        >
          بیشتر بدانید
          <LeftCircleOutlined />
        </Button>
      </div>
    </section>
  );
};

export default About;
