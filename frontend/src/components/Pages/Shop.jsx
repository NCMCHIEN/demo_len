import React from "react";
import { Hero } from "../Hero/Hero";
import { Popular } from "../Popular/Popular";
import { Offers } from "../Offers/Offers";
import { NewCollections } from "../NewCollections/NewCollections";
import { NewsLetter } from "../NewsLetter/NewsLetter";
import { Sectionbg } from "../Sectionbg/Sectionbg";
const Shop = () => {
  return (
    <div>
      <Hero />
      <Sectionbg />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter />
    </div>
  );
};
export default Shop;
