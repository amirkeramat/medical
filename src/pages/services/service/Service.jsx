import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getData } from "../../../redux/slices/singleDataSlice";
import { useParams } from "react-router-dom";
import { useSingleData } from "../../../hooks";
import { Breadcrumb } from "antd";
import PageLoader from '../../../components/shared/pageLoader/PageLoader'
const Service = () => {
  const dispatch = useDispatch();
  const { serviceID } = useParams();
  useEffect(() => {
    let arg = { id: Number(serviceID), url: "services" };
    dispatch(getData(arg));
  }, [serviceID]);
  const { loading, data } = useSingleData();
  const items = [
    {
      href: "/",
      title: "خانه",
    },
    {
      href: "/services",
      title: "بخش ها",
    },
    {
      href: `services/${data.id}`,
      title: data.title,
    },
  ];
  return (
    <div className='pt-10 relative  w-full flex flex-col items-center '>
      <Breadcrumb className="self-start ms-20" items={items} />

      {loading === "fulfilled" ? (
        <div className=' py-20 container grid grid-cols-1 md:grid-cols-4'>
          <img className='col-span-1' src={data.cover} alt='' />
          <div className='p-4 col-span-1 md:col-span-3'>
            <h6 className='text-teal-500 text-3xl'>{data.title}</h6>
            <p>{data.description}</p>
            <p className='py-4 text-xl'>{data.information}</p>
          </div>
        </div>
      ) : (
        <PageLoader/>
      )}
    </div>
  );
};

export default Service;
