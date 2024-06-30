//react icons
import { FaUserAlt } from "react-icons/fa";
import { MdDashboardCustomize } from "react-icons/md";

const SidebarItems = () => {
  const side_bar_list = [
    {
      id: 1,
      icon: <MdDashboardCustomize className="icon" />,
      title: "Dashboard",
      link: "/dashboard",
    },
    {
      id: 2,
      icon: <FaUserAlt className="icon" />,
      title: "Subscriber List",
      link: "/subscriber-list",
    },
  ];
  return side_bar_list;
};

export default SidebarItems;
