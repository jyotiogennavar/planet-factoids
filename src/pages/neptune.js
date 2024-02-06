import React, { useState } from "react";
import PlanetData from "../data.json";

import PlanetInfo from "../components/PlanetInfo";
import PlanetStats from "../components/PlanetStats";
import PlanetImage from "../components/PlanetImage";
import PageLayout from "../components/PageLayout/PageLayout";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Neptune = () => {
  const neptuneData = PlanetData.find((planet) => planet.name === "Neptune");
  const [currentImage, setCurrentImage] = useState(neptuneData.images.planet);

  const handleImageChange = (image) => {
    setCurrentImage(image);
  };
  return (
    <>
      <Header />
      <PageLayout>
        <PlanetImage src={currentImage} alt={"neptune"} />
        <PlanetInfo
          name={neptuneData.name}
          overview={neptuneData.overview}
          structure={neptuneData.structure}
          geology={neptuneData.geology}
          onImageChange={handleImageChange}
          images={neptuneData.images}
        />
        <PlanetStats
          rotation={neptuneData.rotation}
          revolution={neptuneData.revolution}
          radius={neptuneData.radius}
          temperature={neptuneData.temperature}
        />
      </PageLayout>

      <Footer />
    </>
  );
};

export default Neptune;
