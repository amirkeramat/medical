import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getHomeData } from "../redux/slices/HomeSlice";
import Header from "../components/layout/header/Header";
import Footer from "../components/layout/footer/Footer";
import { useHomeState } from "../hooks";
import PageLoader from "../components/shared/pageLoader/PageLoader";
const Layout = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHomeData());
  }, []);
  const { loading } = useHomeState();
  return (
    <>
      {loading === "fulfilled" ? (
        <div className="w-full flex flex-col items-center">
          <Header />
          <main className="w-full h-full pt-12">{children}</main>
          <Footer />
        </div>
      ) : (
        <PageLoader/>
      )}
      
    </>
  );
};

export default Layout;
