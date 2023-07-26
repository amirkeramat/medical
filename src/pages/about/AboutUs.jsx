import About from "../../components/home/about/About";
import { Breadcrumb } from "antd";

const AboutUs = () => {
  const links = [
    {
      href: "/medical/",
      title: "خانه",
    },
    {
      href: "/medical/#/about",
      title: "درباره ما",
    },
  ];
  return (
    <div className="py-10 flex flex-col items-center">
      <Breadcrumb items={links}/>
      <About />
    </div>
  );
};

export default AboutUs;
