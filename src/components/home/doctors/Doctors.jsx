import { useHomeState } from "../../../hooks";
import {
  InstagramOutlined,
  LinkedinOutlined,
  FacebookOutlined,
  TwitterOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
const Doctors = () => {
  const { doctors } = useHomeState();
  const { label, title, description, names } = doctors;
  const icons = [
    { id: 1, icon: <InstagramOutlined /> },
    { id: 2, icon: <LinkedinOutlined /> },
    { id: 3, icon: <FacebookOutlined /> },
    { id: 4, icon: <TwitterOutlined /> },
  ];
  const DoctorCard = ({ item, icons }) => {
    const { full_name, Expertise, cover } = item;

    return (
      <div className='flex flex-col items-center bg-zinc-50 p-6  group hover:-translate-y-2 duration-500'>
        <div className='w-[75%] relative'>
          <img src={cover} className='rounded-full w-full' alt='' />
          <div className='absolute flex invisible inset-0   duration-300  justify-center items-center rounded-full w-full h-full group-hover:visible group-hover:bg-teal-500/90 transition-colors '>
            <i className="text-zinc-50 text-3xl">
              <PlusCircleOutlined />
            </i>
          </div>
        </div>
        <h6 className='py-4 text-teal-500 font-bold'>{full_name}</h6>
        <p className='py-4'>{Expertise}</p>
        <div className='grid grid-cols-4 gap-4'>
          {icons.map((i) => (
            <i
              className='text-teal-500 bg-zinc-100 flex justify-center items-center text-xl p-2 rounded-full hover:text-zinc-50 hover:bg-teal-500 hover:-translate-y-1 duration-500'
              key={i.id}>
              {i.icon}
            </i>
          ))}
        </div>
      </div>
    );
  };
  return (
    <div className='container flex flex-col items-center'>
      <h6 className='text-teal-500 text-xl p-2'>{label}</h6>
      <h5 className='text-2xl font-semibold p-2'>{title}</h5>
      <p className='p-2 text-zinc-700'>{description}</p>
      <div className='grid grid-col-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-2 items-center w-full'>
        {names.map((item) => (
          <DoctorCard key={item.id} item={item} icons={icons} />
        ))}
      </div>
    </div>
  );
};

export default Doctors;
