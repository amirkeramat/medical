import { useHomeState } from "../../../hooks";
import {Button} from 'antd'
const Services = () => {
  const { services } = useHomeState();
  const { label, title, description, items } = services;
  const ServicesBox = ({ item }) => {
    const { title, description, cover } = item;
    return (
      <div
        style={{ "--image-url": `url(${cover})` }}
        className="bg-[image:var(--image-url)] groupe bg-center bg-cover cursor-pointer"
      >
        <div className="w-full h-full bg-zinc-50 hover:bg-teal-500/80 hover:bg-opacity-80 p-10 text-zinc-700 hover:text-zinc-50 duration-500 group">
          <h6 className="text-zinc-950 font-semibold p-2 group-hover:text-zinc-50 text-lg">
            {title}
          </h6>
          <p className="p-2">{description}</p>
          <Button className="bg-teal-500 text-zinc-50 duration-500 group-hover:bg-zinc-50 group-hover:text-zinc-950 ">
            اطلاعات بیشتر
          </Button>
        </div>
      </div>
    );
  };
  return (
    <section className="container flex flex-col items-center w-full p-2">
      <h6 className="text-teal-500 text-xl p-2">{label}</h6>
      <h5 className="text-2xl font-semibold p-2">{title}</h5>
      <p className="p-2 text-zinc-700">{description}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((item) => (
          <ServicesBox key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Services;
