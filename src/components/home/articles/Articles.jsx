import { useHomeState } from "../../../hooks";
import { Card } from "antd";
const { Meta } = Card;
const Articles = () => {
  const { blog } = useHomeState();
  const { label, title, description, articles } = blog;
  return (
    <div className='flex flex-col items-center container p-2 py-8'>
      <h5 className="p-2 text-teal-500">{label}</h5>
      <h6 className="p-2 text-2xl">{title}</h6>
      <p className="p-2 text-zinc-700">{description}</p>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 p-8'>
        {articles.map((item) => (
          <Card key={item.id} hoverable cover={<img src={item.cover} />}>
            <Meta
              title={<h6 className='text-teal-500'>{"نویسنده:"}{item.writer}</h6>}
              description={<h6 className="font-bold">در تاریخ:{item.createdAt}</h6>}
            />
            <Meta title={<p className="mt-4">{item.description}</p>} description={item.more} />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Articles;
