import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getHomeData } from "../redux/slices/homeSlice/homeSlice";
import Header from "../components/layout/header/Header";
import Footer from "../components/layout/footer/Footer";
import { useHomeState } from "../hooks";
const Layout = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHomeData());
  }, []);
  const { loading } = useHomeState();
  return (
    <>
      {loading === "fulfilled" ? (
        <>
          <Header />
          <main>{children}</main>
          <Footer />
        </>
      ) : (
        <p> Loading</p>
      )}
    </>
  );
};

export default Layout;
