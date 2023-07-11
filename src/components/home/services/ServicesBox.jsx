import { Button } from "antd";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getData } from "../../../redux/slices/singleDataSlice";
import { useNavigate } from "react-router-dom";
import goTop from "../../../hooks/goTop";
const ServicesBox = ({ item }) => {
  const { title, description, cover, id } = item;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const buttonHandler = () => {
    const arg = { id, url: "services" };
    dispatch(getData(arg));
    navigate(`/services/${id}`);
    goTop()
  };
  return (
    <div
      style={{ "--image-url": `url(${cover})` }}
      className='bg-[image:var(--image-url)] groupe bg-center bg-cover cursor-pointer'>
      <div className='w-full h-full bg-zinc-50 hover:bg-teal-500/80 hover:bg-opacity-80 p-10 text-zinc-700 hover:text-zinc-50 duration-500 group'>
        <h6 className='text-zinc-950 font-semibold p-2 group-hover:text-zinc-50 text-lg'>
          {title}
        </h6>
        <p className='p-2'>{description}</p>
        <Button
          onClick={buttonHandler}
          className='bg-teal-500 text-zinc-50 duration-500 group-hover:bg-zinc-50 group-hover:text-zinc-950 '>
          <Link to={`/services/${id}`}> اطلاعات بیشتر</Link>
        </Button>
      </div>
    </div>
  );
};

export default ServicesBox;
