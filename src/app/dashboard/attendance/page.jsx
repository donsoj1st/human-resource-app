import DashboardCard from "@/app/ui/dashboard/dashboard-card/dashboard-card";
import React from "react";
import style from "@/app/ui/dashboard/attendance/attendance.module.css";

const Attendance = () => {
  return (
    <div className={style.attendance}>
      <DashboardCard text="Deferment Application" />
      <DashboardCard text="Deferment Application" />
      <DashboardCard text="Deferment Application" />
      <DashboardCard text="Deferment Application" />
      <DashboardCard text="Deferment Application" />
      <DashboardCard text="Deferment Application" />
    </div>
  );
};

export default Attendance;
