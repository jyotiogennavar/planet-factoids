import React from "react";

import PlanetData from "../data.json"

import PlanetInfo from "../components/PlanetInfo";
import PlanetStats from "../components/PlanetStats";
import PlanetImage from "../components/PlanetImage";
import PageLayout from "../components/PageLayout/PageLayout";


import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Earth = () => {
  const earthData = PlanetData.find((planet) => planet.name === "Earth");

  return (
    <>
    <Header/>
        <PageLayout>
        <PlanetImage src={earthData.images.planet} alt={"earth"} />
        <PlanetInfo
          name={earthData.name}
          overview={earthData.overview}
          structure={earthData.structure}
          geology={earthData.geology}
        />
        <PlanetStats
          rotation={earthData.rotation}
          revolution={earthData.revolution}
          radius={earthData.radius}
          temperature={earthData.temperature}
        />
      </PageLayout>
    <Footer/>
    </>
  )
}

export default Earth;