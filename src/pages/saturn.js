import React, { useState } from "react";
import PlanetData from "../data.json";

import PlanetInfo from "../components/PlanetInfo";
import PlanetStats from "../components/PlanetStats";
import PlanetImage from "../components/PlanetImage";
import PageLayout from "../components/PageLayout/PageLayout";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Saturn = () => {
  const saturnData = PlanetData.find((planet) => planet.name === "Saturn");
  const [currentImage, setCurrentImage] = useState(saturnData.images.planet);

  const handleImageChange = (image) => {
    setCurrentImage(image);
  };
  return (
    <>
      <Header />
      <PageLayout>
        <PlanetImage src={currentImage} alt={"saturn"} />
        <PlanetInfo
          name={saturnData.name}
          overview={saturnData.overview}
          structure={saturnData.structure}
          geology={saturnData.geology}
          onImageChange={handleImageChange}
          images={saturnData.images}
        />
        <PlanetStats
          rotation={saturnData.rotation}
          revolution={saturnData.revolution}
          radius={saturnData.radius}
          temperature={saturnData.temperature}
        />
      </PageLayout>

      <Footer />
    </>
  );
};

export default Saturn;
