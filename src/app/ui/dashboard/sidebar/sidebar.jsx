import Image from "next/image";
import MenuLink from "./menuLink/menuLink";
import styles from "./sidebar.module.css";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
//import { auth, signOut } from "@/app/auth";

const menuItems = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <MdDashboard />,
  },
  {
    title: "Employees",
    path: "/dashboard/employees",
    icon: <MdSupervisedUserCircle />,
  },
  {
    title: "Attendance",
    path: "/dashboard/attendance",
    icon: <MdShoppingBag />,
  },
  {
    title: "Payroll",
    path: "/dashboard/payroll",
    icon: <MdAttachMoney />,
  },
  {
    title: "Leave",
    path: "/dashboard/leave",
    icon: <MdWork />,
  },
  {
    title: "Performance",
    path: "/dashboard/performance",
    icon: <MdAnalytics />,
  },
  /* {
    title: "Teams",
    path: "/dashboard/teams",
    icon: <MdPeople />,
  }, */
  {
    title: "Settings",
    path: "/dashboard/settings",
    icon: <MdOutlineSettings />,
  },
  {
    title: "Help",
    path: "/dashboard/help",
    icon: <MdHelpCenter />,
  },
];

const Sidebar = async () => {
  const user = {};
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          className={styles.userImage}
          src={user.img || "/noavatar.png"}
          alt=""
          width="50"
          height="50"
        />
        <div className={styles.userDetail}>
          <span className={styles.username}>{user.username}</span>
          <span className={styles.userTitle}>Administrator</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((item) => (
          <MenuLink item={item} key={item.title} />
        ))}
      </ul>
      <form>
        <button className={styles.logout}>
          <MdLogout />
          Logout
        </button>
      </form>
    </div>
  );
};

export default Sidebar;
