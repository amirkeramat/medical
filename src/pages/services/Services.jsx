import ServicesBox from "../../components/home/services/ServicesBox";
import Pagination from "../../components/shared/pagination/Pagination";
import { Breadcrumb } from "antd";
import { useHomeState } from "../../hooks";
import { useState } from "react";
const Services = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { services } = useHomeState();
  const { label, title, description, items, cover } = services;
  const [ordered, setOrdered] = useState(items.slice(0, 6));
  const pageCount = 6
  const pageHandler = async (page) => {
    setCurrentPage(page);
    let end = pageCount * page;
    let start = end - pageCount;
    const orderedData = items.slice(start, end);
    console.log(orderedData);
    setOrdered(orderedData);
  };
  const links = [
    {
      href: "/",
      title: "خانه",
    },
    {
      href: "/services",
      title: "بخش ها",
    },
  ];
  return (
    <div className='flex flex-col items-center pt-10'>
      <div className='container flex flex-col items-center'>
        <Breadcrumb className='self-start m-4' items={links} />
        <div
          style={{ "--image-url": `url(${cover})` }}
          className='bg-[image:var(--image-url)] w-full bg-left-bottom h-[400px] md:bg-center bg-fixed bg-cover flex flex-col justify-center items-end md:items-start p-4'>
          <h5 className='text-4xl font-bold text-teal-500'>{label}</h5>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-6'>
          {ordered.map((item) => (
            <ServicesBox key={item.id} item={item} />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          pagesCutCount={3}
          totalPages={items.length / 6}
          onPageChange={pageHandler}
          count={6}
          data={items}
          setData={setOrdered}
        />
      </div>
    </div>
  );
};

export default Services;
