import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";

const Layout = () => {
  return (
    <div
      style={{
        height: "100vh",
        overflowY: "hidden",
      }}
    >
      <Header />
      <div className="grid-layout">
        <Sidebar />
        <div className="outlet">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
