import ExploreRestaurant from "@/components/shared/ExploreRestaurants";
import Exploreserach from "@/components/shared/ExploreRestaurants/Exploreserach";
import React from "react";

const page = () => {
  return (
    <div>
      <Exploreserach></Exploreserach>
      <ExploreRestaurant></ExploreRestaurant>
    </div>
  );
};

export default page;
