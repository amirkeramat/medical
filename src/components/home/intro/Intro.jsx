import { useHomeState } from "../../../hooks";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "antd";
import {
  PlayCircleOutlined,
  BellOutlined,
  SmileOutlined,
} from "@ant-design/icons";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

const Intro = () => {
  const { hero } = useHomeState();
  const { intro, services } = hero;
  const { label, title, description, items } = services;

  const IntroBox = ({ item }) => {
    const { label, title, description, cover } = item;
    return (
      <div
        style={{ "--image-url": `url(${cover})` }}
        className="bg-[image:var(--image-url)] bg-teal-200 bg-center  bg-cover bg-no-repeat bg-fixed w-full h-full md:h-[745px] relative flex flex-col justify-center"
      >
        <div className="p-7 md:p-12  flex flex-col items-center-center justify-center w-full">
          <h1 className="text-xl text-teal-500 p-2">{label}</h1>
          <h2 className="text-2xl md:text-5xl p-2">{title}</h2>
          <p className="text-sm md:text-lg text-zinc-700 w-full md:w-[400px]  p-2">
            {description}
          </p>
          <div className="py-2 flex items-center">
            <Button
              size="large"
              className="bg-teal-500 text-zinc-50 mx-2 w-[150px] h-[50px] flex items-center group "
            >
              ویزیت کنید
              <BellOutlined className="group-hover:animate-bounce text-xl" />
            </Button>
            <Button
              size="large"
              className="bg-zinc-900 text-zinc-50 mx-2 w-[150px] h-[50px] flex items-center group"
            >
              مشاهده فیلم
              <PlayCircleOutlined className="group-hover:animate-bounce text-xl" />
            </Button>
          </div>
        </div>
      </div>
    );
  };

  const ServicesBox = ({ item }) => {
    const { title, description } = item;
    return (
      <div className=" h-[200px] flex flex-col justify-center  shadow-sm shadow-zinc-950/20 space-y-4 hover:bg-teal-100 duration-500 px-2 cursor-pointer hover:-translate-y-2 rounded">
        <SmileOutlined className="self-start text-4xl text-teal-500" />
        <h6 className="font-semibold">{title}</h6>
        <p className="text-zinc-500">{description}</p>
      </div>
    );
  };

  return (
    <section className="w-ful container  flex flex-col justify-center">
      <Swiper
        autoplay={true}
        loop={true}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper w-full"
      >
        {intro.map((item) => (
          <SwiperSlide key={item.id}>
            <IntroBox item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex flex-col items-center justify-center space-y-5 shadow shadow-zinc-100 p-4 mt-10">
        <h6 className="text-xl text-teal-500">{label}</h6>
        <h5 className="text-2xl font-bold">{title}</h5>
        <p className="text-zinc-700 text-xl">{description}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item) => (
            <ServicesBox key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Intro;
