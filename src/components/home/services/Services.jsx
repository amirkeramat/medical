import { Button } from "antd";
import { useHomeState } from "../../../hooks";
import ServicesBox from "./ServicesBox";
import { useNavigate } from "react-router-dom";
import goTop from "../../../hooks/goTop";
const Services = () => {
  const { services } = useHomeState();
  const { label, title, description, items } = services;
  const navigate = useNavigate()
  return (
    <section className="container flex flex-col items-center w-full p-2 py-10 shadow-sm shadow-zinc-950/10">
      <h6 className="text-teal-500 text-xl p-2">{label}</h6>
      <h5 className="text-2xl font-semibold p-2">{title}</h5>
      <p className="p-2 text-zinc-700">{description}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-6">
        {items.slice(0, 6).map((item) => (
          <ServicesBox key={item.id} item={item} />
        ))}
      </div>
      <Button
        onClick={() => {
          navigate("/services");
          goTop();
        }}
        size="large"
        className="bg-teal-500 text-zinc-50 my-2"
      >
        بیشتر
      </Button>
    </section>
  );
};

export default Services;
