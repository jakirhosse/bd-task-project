import Checkout from "@/components/product/Checkout";
import Chckbannar from "@/components/product/ChekBanner";
import CustomerFeedback from "@/components/product/Feedback";
import React from "react";

const page = () => {
  return (
    <div>
      <Chckbannar></Chckbannar>
      <Checkout></Checkout>
      <CustomerFeedback></CustomerFeedback>
    </div>
  );
};

export default page;
