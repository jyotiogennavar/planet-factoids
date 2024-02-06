import React from "react";
import PlanetData from "../data.json";

import PlanetInfo from "../components/PlanetInfo";
import PlanetStats from "../components/PlanetStats";
import PlanetImage from "../components/PlanetImage";
import PageLayout from "../components/PageLayout/PageLayout";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Mercury = () => {
  const mercuryData = PlanetData.find((planet) => planet.name === "Mercury");

  return (
    <>
      <Header />
      <PageLayout>
        <PlanetImage src={mercuryData.images.planet} alt={"mercury"} />
        <PlanetInfo 
          name={mercuryData.name} 
          overview={mercuryData.overview} 
          structure={mercuryData.structure}
          geology={mercuryData.geology}
        />
        <PlanetStats
          rotation={mercuryData.rotation}
          revolution={mercuryData.revolution}
          radius={mercuryData.radius}
          temperature={mercuryData.temperature}
        />
      </PageLayout>
      <Footer />
    </>
  );
};

export default Mercury;
