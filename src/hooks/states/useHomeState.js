import { useSelector } from "react-redux";

const useHomeState = () => {
  const state = useSelector((state) => state.homeState);

  return {
    loading: state.loading,
    error: state.error,
    menus: state.data?.menus,
    home: state.data?.home,
    about: state.data?.about,
    expertise: state.data?.expertise,
    services: state.data?.services,
    appointments: state.data?.appointments,
    doctors: state.data?.doctors,
    costumerComments: state.data?.costumer_comments,
    commonQuestions: state.data?.common_questions,
    blog: state.data?.blog,
  };
};

export default useHomeState;
