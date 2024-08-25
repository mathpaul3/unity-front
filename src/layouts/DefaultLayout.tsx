import { Outlet } from "react-router-dom";
import Topnav from "../components/Topnav";

function DefaultLayout() {
  return (
    <>
      <Topnav />
      <Outlet />
    </>
  );
}

export default DefaultLayout;
