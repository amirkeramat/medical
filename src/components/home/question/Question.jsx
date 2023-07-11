import { useHomeState } from "../../../hooks";
import { Collapse } from "antd";
const Question = () => {
  const { commonQuestions } = useHomeState();
  const { label, description, items, cover } = commonQuestions;
  const CollapseItems = items.map((item) => {
    return {
      key: item.id,
      label: <p className="text-teal-500 font-bold">{item.title}</p>,
      children: <p className="text-zinc-700 p-2 text-md">{item.description}</p>,
    };
  });
  return (
    <div className='w-full grid grid-cols-1 md:grid-cols-2 container px-2 py-8'>
      <img className='w-full h-full md:h-[600px]' src={cover} alt='' />
      <div className='p-4'>
        <h3 className='text-teal-500 p-2'>{label}</h3>
        <p className='text-2xl font-bold p-2 '>{description}</p>
        <Collapse size="large" className="my-8" accordion items={CollapseItems} />
      </div>
    </div>
  );
};

export default Question;
