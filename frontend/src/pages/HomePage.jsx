import React from "react";
import Sliders from "../components/Slider/Sliders";
import Categories from "../components/Categories/Categories";
import Products from "../components/Products/Products";
import Campaigns from "../components/Campaigns/Campaigns";
import Brands from "../components/Brands/Brands";
import CampaignSingle from "../components/CampaignSingle/CampaignSingle";

const HomePage = () => {
  return (
    <React.Fragment>
      <Sliders />
      <Categories />
      <Products />
      <Campaigns />
      <Brands />
      <CampaignSingle />
    </React.Fragment>
  );
};

export default HomePage;
