import React, { useState } from "react";

import PlanetData from "../data.json";

import PlanetInfo from "../components/PlanetInfo";
import PlanetStats from "../components/PlanetStats";
import PlanetImage from "../components/PlanetImage";
import PageLayout from "../components/PageLayout/PageLayout";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Jupiter = () => {
  const jupiterData = PlanetData.find((planet) => planet.name === "Jupiter");
  const [currentImage, setCurrentImage] = useState(jupiterData.images.planet);

  const handleImageChange = (image) => {
    setCurrentImage(image);
  };
  return (
    <>
      <Header />
      <PageLayout>
        <PlanetImage src={currentImage} alt={"jupiter"} />
        <PlanetInfo
          name={jupiterData.name}
          overview={jupiterData.overview}
          structure={jupiterData.structure}
          geology={jupiterData.geology}
          onImageChange={handleImageChange}
          images={jupiterData.images}
        />
        <PlanetStats
          rotation={jupiterData.rotation}
          revolution={jupiterData.revolution}
          radius={jupiterData.radius}
          temperature={jupiterData.temperature}
        />
      </PageLayout>
      <Footer />
    </>
  );
};

export default Jupiter;
