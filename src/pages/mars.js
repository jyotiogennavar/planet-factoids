import React, { useState } from "react";
import PlanetData from "../data.json";

import PlanetInfo from "../components/PlanetInfo";
import PlanetStats from "../components/PlanetStats";
import PlanetImage from "../components/PlanetImage";
import PageLayout from "../components/PageLayout/PageLayout";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Mars = () => {
  const marsData = PlanetData.find((planet) => planet.name === "Mars");
  const [currentImage, setCurrentImage] = useState(marsData.images.planet);

  const handleImageChange = (image) => {
    setCurrentImage(image);
  };
  return (
    <>
      <Header />
      <PageLayout>
        <PlanetImage src={currentImage} alt={"mars"} />
        <PlanetInfo
          name={marsData.name}
          overview={marsData.overview}
          structure={marsData.structure}
          geology={marsData.geology}
          onImageChange={handleImageChange}
          images={marsData.images}
        />
        <PlanetStats
          rotation={marsData.rotation}
          revolution={marsData.revolution}
          radius={marsData.radius}
          temperature={marsData.temperature}
        />
      </PageLayout>
      <Footer />
    </>
  );
};

export default Mars;
