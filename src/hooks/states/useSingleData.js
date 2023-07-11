import { useSelector } from "react-redux";

const useSingleData = () => {
  const state = useSelector((state) => state.singleData);

  return {
    loading: state.loading,
    data: state?.data,
    error: state.error,
  };
};

export default useSingleData;
