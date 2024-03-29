import React, { useState } from "react";

import PlanetData from "../data.json";
import { COLORS } from "../constant";

import PlanetInfo from "../components/PlanetInfo";
import PlanetStats from "../components/PlanetStats";
import PlanetImage from "../components/PlanetImage";
import PageLayout from "../components/PageLayout/PageLayout";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Earth = () => {
  const earthData = PlanetData.find((planet) => planet.name === "Earth");
  const [currentImage, setCurrentImage] = useState(earthData.images.planet);

  const focusColor = COLORS.purple;
  const handleImageChange = (image) => {
    setCurrentImage(image);
  };
  return (
    <>
      <Header focusColor={focusColor} />
      <PageLayout>
        <PlanetImage src={currentImage} alt={"earth"} />
        <PlanetInfo
          name={earthData.name}
          overview={earthData.overview}
          structure={earthData.structure}
          geology={earthData.geology}
          onImageChange={handleImageChange}
          images={earthData.images}
          focusColor={focusColor}
        />
        <PlanetStats
          rotation={earthData.rotation}
          revolution={earthData.revolution}
          radius={earthData.radius}
          temperature={earthData.temperature}
        />
      </PageLayout>
      <Footer />
    </>
  );
};

export default Earth;
