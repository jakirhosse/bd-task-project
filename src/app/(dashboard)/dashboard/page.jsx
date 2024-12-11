import DashboardAll from "@/components/Dashboard";
import DashboardBannar from "@/components/DashboardBannar";
import React from "react";

const page = () => {
  return (
    <div>
      <DashboardBannar></DashboardBannar>
      <DashboardAll></DashboardAll>
    </div>
  );
};

export default page;
