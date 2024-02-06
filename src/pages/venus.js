import React from "react";
import PlanetData from "../data.json";

import PlanetInfo from "../components/PlanetInfo";
import PlanetStats from "../components/PlanetStats";
import PlanetImage from "../components/PlanetImage";
import PageLayout from "../components/PageLayout/PageLayout";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Venus = () => {
  const venusData = PlanetData.find((planet) => planet.name === "Venus");

  return (
    <>
      <Header />
      <PageLayout>
        <PlanetImage src={venusData.images.planet} alt={"venus"} />
        <PlanetInfo
          name={venusData.name}
          overview={venusData.overview}
          structure={venusData.structure}
          geology={venusData.geology}
        />
        <PlanetStats
          rotation={venusData.rotation}
          revolution={venusData.revolution}
          radius={venusData.radius}
          temperature={venusData.temperature}
        />
      </PageLayout>
      <Footer />
    </>
  );
};

export default Venus;
