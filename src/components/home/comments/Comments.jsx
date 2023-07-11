import { useHomeState } from "../../../hooks";
import { useState, useEffect } from "react";
const Comments = () => {
  const { costumerComments } = useHomeState();
  const { label, title, description, comments } = costumerComments;
  const [showComment, setShowComment] = useState(comments[0]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const commentInterval = setInterval(() => {
      if (count < comments.length) {
        setCount((prv) => prv + 1);
        setShowComment(comments[count]);
      } else {
        setCount(0);
        setShowComment(comments[0]);
      }
    }, 5000);
    return () => clearInterval(commentInterval);
  }, [count]);
  const CommentsBox = () => {
    return (
      <div className='bg-zinc-50 w-full  flex flex-col items-center p-8'>
        <h5 className='text-teal-500 text-xl p-2'>{showComment.username}</h5>
        <h6 className='text-lg p-2'>{showComment.role}</h6>
        <p className='text-zinc-700 p-2'>{showComment.title}</p>
      </div>
    );
  };
  return (
    <div className='w-full container flex flex-col items-center px-2 py-8'>
      <h6 className='p-2 text-teal-500 text-xl'>{label}</h6>
      <h5 className='p-2 text-2xl'>{title}</h5>
      <p className='p-2 text-zinc-700'>{description}</p>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-2 p-4'>
        {comments.map((comment) => (
          <img
            key={comment.id}
            onClick={() => {
              setCount(comment.id);
              setShowComment(comment);
            }}
            className={`w-[70px] rounded-full duration-200 mx-4 cursor-pointer p-1 border-2 ${
              count === comment.id &&
              "border-teal-500 shadow-2xl animate-pulse shadow-teal-200"
            }`}
            src={comment.cover}
            alt=''
          />
        ))}
      </div>
      <div className="z-50 border relative after:border before:border after:absolute after:content-[''] after:-bottom-5 after:left-[5%] after:z-40  after:w-[90%] after:h-[20px] after:bg-zinc-50 after:rounded before:absolute before:content-[''] before:-bottom-10 before:left-[10%] before:z-40  before:w-[80%] before:h-[20px] before:bg-zinc-50 before:rounded">
        <CommentsBox />
      </div>
    </div>
  );
};

export default Comments;
