import { useHomeState } from "../../hooks";
import DoctorCard from "../../components/home/doctors/DoctorCard";
import { Breadcrumb } from "antd";
import { useState } from "react";
import Pagination from "../../components/shared/pagination/Pagination";
import goTop from "../../hooks/goTop";
const Doctors = () => {
  const { doctors } = useHomeState();
  const { label, title, description, names, cover } = doctors;
  const [currentPage, setCurrentPage] = useState(1);
  const [ordered, setOrdered] = useState(names.slice(0, 4));
  const pageCount = 4;

  const links = [
    {
      href: "/",
      title: "خانه",
    },
    {
      href: "/doctors",
      title: "پزشکان",
    },
  ];
  const pageHandler = (page) => {
    setCurrentPage(page);
    let end = pageCount * page;
    let start = end - pageCount;
    const orderedData = names.slice(start, end);
    console.log(orderedData);
    setOrdered(orderedData);
    goTop();
  };
  return (
    <div className='flex flex-col items-center pt-10'>
      <div className='container flex flex-col items-center'>
        <Breadcrumb className='self-start m-4' items={links} />
        <div
          style={{ "--image-url": `url(${cover})` }}
          className='bg-[image:var(--image-url)] w-full bg-left-bottom h-[400px] md:bg-center bg-fixed bg-cover flex flex-col justify-center items-center md:items-start p-4'>
          <h5 className='text-4xl font-bold text-teal-500'>{label}</h5>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-6'>
          {ordered.map((item) => (
            <DoctorCard key={item.id} item={item} />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          pagesCutCount={3}
          totalPages={names.length / 4}
          onPageChange={pageHandler}
          count={4}
          data={names}
        />
      </div>
    </div>
  );
};

export default Doctors;
