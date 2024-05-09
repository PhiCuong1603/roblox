import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = (props) => {
  return (
    <div>
      <Header />
      <div className="layout-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
