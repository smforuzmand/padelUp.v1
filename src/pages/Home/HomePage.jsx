import Navbar from "../../components/Layout/Navbar/Navbar";

import Footer from "../../components/Layout/Footer/Footer";
import { Outlet } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <Navbar bgOpacity="0.5" />
      <Outlet />
      <Footer />
    </>
  );
};

export default HomePage;
