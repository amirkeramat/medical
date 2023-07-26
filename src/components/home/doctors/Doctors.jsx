import { useHomeState } from "../../../hooks";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import DoctorCard from "./DoctorCard";
import goTop from "../../../hooks/goTop";
const Doctors = () => {
  const { doctors } = useHomeState();
  const { label, title, description, names } = doctors;
  const navigate = useNavigate()
  return (
    <div className='container flex flex-col items-center shadow-sm shadow-zinc-950/10 py-10'>
      <h6 className='text-teal-500 text-xl p-2'>{label}</h6>
      <h5 className='text-2xl font-semibold p-2'>{title}</h5>
      <p className='p-2 text-zinc-700'>{description}</p>
      <div className='grid grid-col-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-2 items-center w-full'>
        {names.slice(0, 4).map((item) => (
          <DoctorCard key={item.id} item={item} />
        ))}
      </div>
      <Button
        onClick={() =>{
          navigate("/doctors")
          goTop()
        } }
        size='large'
        className='bg-teal-500 text-zinc-50 my-2'>
          بیشتر
      </Button>
    </div>
  );
};

export default Doctors;
