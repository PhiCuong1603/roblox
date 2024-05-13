import { Outlet } from "react-router-dom";
import Header from "./Header";
import "./style.css";

const Layout = (props) => {
  return (
    <div>
      <Header />
      <div className="container-layout">
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
