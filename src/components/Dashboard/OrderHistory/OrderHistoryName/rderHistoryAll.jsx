import React from "react";
import SideBar from "../../SideBar";
import OrderHistory from ".";

const orderHistoryAll = () => {
  return (
    <div>
      <div className="container grid grid-col-1 md:grid-cols-4 gap-5 my-10">
        <div className="md:col-span-1 navigation_cart_bg py-5">
          <SideBar />
        </div>
        <div className="md:col-span-3">
          <OrderHistory></OrderHistory>
        </div>
      </div>
    </div>
  );
};

export default orderHistoryAll;
