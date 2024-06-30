//sidebar items
import { Link, useLocation } from "react-router-dom";
import SidebarItems from "../../constants/SidebarItems";

//css
import "./sidebar.css";

const Sidebar = () => {
  const side_bar_list = SidebarItems();
  const { pathname } = useLocation();
  console.log("This is pathname", pathname);

  return (
    <div className="sidebar flex-col-layout">
      {side_bar_list?.map((side_bar_list) => {
        return (
          <Link
            to={`${side_bar_list?.link}`}
            key={side_bar_list?.id}
            className="flex-row-layout sidebar-title"
          >
            <div>{side_bar_list?.icon}</div>
            <div>{side_bar_list?.title}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Sidebar;
