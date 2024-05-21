import { FaSearchMinus } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoBriefcaseOutline, IoSettingsOutline } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { PiBuildingsFill } from "react-icons/pi";
import { RxDashboard } from "react-icons/rx";
import { FaBriefcase, FaUser, FaBuilding, FaDollarSign } from "react-icons/fa";
import { MdAccountTree } from "react-icons/md";
export const baseUrl = "http://localhost:3333/api/v1";
import { FaUsers } from "react-icons/fa";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { SiTurborepo } from "react-icons/si";
// pages are dashboard, all-jobs, all companies, promotions, settings
export const menu: Menu[] = [
  {
    name: "Dashboard",
    path: "/",
    icon: RxDashboard ,
  },
  {
    name: "Finance",
    path: "/finance",
    icon: MdAccountTree ,
  },
  {
    name: "Clients",
    path: "/clients",
    icon: FaUsers ,
  },
  {
    name: "Reports",
    path: "/reports",
    icon:  HiOutlineDocumentReport,
  },
  {
    name: "Branches",
    path: "/branches",
    icon: PiBuildingsFill,
  },
  {
    name: "Repossessions",
    path: "/reposessions",
    icon: SiTurborepo,
  },
];

export const statsData: StatsData[] = [
  {
    icon: FaBriefcase,
    title: "Clients",
    value: "15,000",
    percentage: 12,
    change: true,
  },
  {
    icon: FaUser,
    title: "Clients",
    value: "10,566.01",
    percentage: 33,
    change: true,
  },
  {
    icon: FaBuilding,
    title: "Clients",
    value: "956.00",
    percentage: 5,
    change: false,
  },
  {
    icon: FaDollarSign,
    title: "Clients",
    value: "$5,566.01",
    percentage: 15,
    change: true,
  },
];
