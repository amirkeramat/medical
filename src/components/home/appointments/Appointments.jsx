import { Button } from "antd";
import { useHomeState } from "../../../hooks";
import {
  UserOutlined,
  MailOutlined,
  CustomerServiceOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
const Appointments = () => {
  const { appointments } = useHomeState();
  const { label, title, cover, services } = appointments;

  return (
    <div
      style={{ "--image-url": `url(${cover})` }}
      className='bg-[image:var(--image-url)] w-full h-full md:h-[745px] bg-fixed groupe bg-center bg-cover  container  py-[60px]'>
      <div className='bg-zinc-50/90 w-[90%] md:w-[70%] mx-4  md:mx-12 my-20 px-4 py-8'>
        <h6 className='text-teal-500 text-xl p-2'>{label}</h6>
        <h5 className='font-bold text-4xl p-2'>{title}</h5>
        <form className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 font-semibold' action=''>
          <div className='flex items-center'>
            <i className='text-3xl text-teal-500'>
              <UserOutlined />
            </i>
            <div className='flex flex-col w-full'>
              <label htmlFor=''>نام شما</label>
              <input
                placeholder='نام خود را وارد نمایید'
                className='p-4 w-full rounded'
                type='text'
                name=''
                id=''
              />
            </div>
          </div>
          <div className='flex items-center'>
            <i className='text-3xl text-teal-500'>
              {" "}
              <MailOutlined />
            </i>
            <div className='flex flex-col w-full'>
              <label htmlFor=''>ایمیل شما</label>
              <input
                placeholder='آدرس ایمیل را وارد نمایید'
                className='p-4 w-full rounded'
                type='text'
                name=''
                id=''
              />
            </div>
          </div>
          <div className='flex items-center'>
            <i className='text-3xl text-teal-500'>
              {" "}
              <CustomerServiceOutlined />
            </i>
            <div className='flex flex-col w-full'>
              <label htmlFor=''>خدمات مورد نیاز </label>
              <select className='w-full p-4' name='' id=''>
                {services.map(service=>(
                    <option key={service.id} value={service.id}>{service.title}</option>
                ))}
              </select>
            </div>
          </div>

          <div className='flex items-center'>
            <i className='text-3xl text-teal-500'>
              <PhoneOutlined />
            </i>
            <div className='flex flex-col  w-full'>
              <label htmlFor=''>تلفن شما</label>
              <input
                placeholder='تلفن خود را وارد نمایید'
                className='p-4 w-full rounded'
                type='text'
                name=''
                id=''
              />
            </div>
          </div>
          <Button size="large" className="bg-teal-500  text-zinc-50 hover:bg-zinc-50 hover:text-teal-500 w-[200px] mx-2 hover:border-0 border-0">ثبت ویزیت</Button>
        </form>
      </div>
    </div>
  );
};

export default Appointments;
