import React from "react";
import useTitle from "../../../Hooks/useTitle";
import Banner from "./Banner/Banner";
import Gallery from "./Gallery/Gallery";
import Map from "./Map/Maps";
import Services from "./Service/Services";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner />
      <Services />
      <Gallery />
      <Map />
    </div>
  );
};

export default Home;
