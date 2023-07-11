import { useHomeState } from "../../../hooks";
import { SendOutlined } from "@ant-design/icons";
const Footer = () => {
  const { footer } = useHomeState();
  const { label, description, items, working_hour } = footer;
  return (
    <div className='container flex flex-col bg-gradient-to-br from-zinc-950/90 via-zinc-900 to-zinc-950 text-zinc-50 p-4'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-8'>
        <div>
          <h5 className='text-teal-500 text-xl font-bold py-2'>{label}</h5>
          <p>{description}</p>
        </div>
        <form>
          <div className='w-full relative'>
            <input
              className='w-full p-4 rounded-xl text-zinc-950'
              placeholder='ایمیل خود را وارد نمایید'
              type='text'
            />
            <button className='bg-teal-500 p-2 top-1 font-bold flex items-center rounded-2xl absolute left-2'>
              مشترک شوید
              <SendOutlined className="bg-white p-2 rounded-full mx-2 text-teal-500" />
            </button>
          </div>
        </form>
      </div>
      <div className='grid grid-cols-2  md:grid-cols-3 p-8'>
        {items.map((item) => (
          <div key={item.id} className='flex flex-col'>
            <h6 className='text-teal-500 font-bold p-1'>{item.label}</h6>
            <div className='flex flex-col'>
              {item.links.map((link) => (
                <a className="p-1" key={link.id} href=''>
                  {link.title}
                </a>
              ))}
            </div>
          </div>
        ))}
        <div className='flex flex-col col-span-2 md:col-span-1 py-2 sm:py-0'>
          <h6 className='text-teal-500 font-bold p-1'>{working_hour.label}</h6>
          {working_hour.days.map((day) => (
            <div key={day.id} className='grid grid-cols-2'>
              <p className="p-1">{day.title}</p>
              <p className="p-1">{day.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
