import React, { useState } from "react";
import PlanetData from "../data.json";
import { COLORS } from "../constant";

import PlanetInfo from "../components/PlanetInfo";
import PlanetStats from "../components/PlanetStats";
import PlanetImage from "../components/PlanetImage";
import PageLayout from "../components/PageLayout/PageLayout";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Venus = () => {
  const venusData = PlanetData.find((planet) => planet.name === "Venus");
  const [currentImage, setCurrentImage] = useState(venusData.images.planet);
  const focusColor = COLORS.yellow;


  const handleImageChange = (image) => {
    setCurrentImage(image);
  };


  return (
    <>
      <Header focusColor={focusColor}/>
      <PageLayout>
        <PlanetImage src={currentImage} alt={"venus"} />
        <PlanetInfo
          name={venusData.name}
          overview={venusData.overview}
          structure={venusData.structure}
          geology={venusData.geology}
          onImageChange={handleImageChange} 
          images={venusData.images}
          focusColor={focusColor}
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
