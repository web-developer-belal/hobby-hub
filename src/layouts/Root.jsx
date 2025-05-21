import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
const Root = ({children}) => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      {children}
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </>
  );
};

export default Root;
