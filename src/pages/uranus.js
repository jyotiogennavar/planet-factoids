import React, { useState } from "react";
import PlanetData from "../data.json"

import PlanetInfo from "../components/PlanetInfo";
import PlanetStats from "../components/PlanetStats";
import PlanetImage from "../components/PlanetImage";
import PageLayout from "../components/PageLayout/PageLayout";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Uranus = () => {
  const uranusData = PlanetData.find((planet) => planet.name === "Uranus");
  const [currentImage, setCurrentImage] = useState(uranusData.images.planet);

  const handleImageChange = (image) => {
    setCurrentImage(image);
  };
  return (
    <>
    <Header/>
    <PageLayout>
        <PlanetImage src={currentImage} alt={"uranus"} />
        <PlanetInfo
          name={uranusData.name}
          overview={uranusData.overview}
          structure={uranusData.structure}
          geology={uranusData.geology}
          onImageChange={handleImageChange}
          images={uranusData.images}
        />
        <PlanetStats
          rotation={uranusData.rotation}
          revolution={uranusData.revolution}
          radius={uranusData.radius}
          temperature={uranusData.temperature}
        />
      </PageLayout>
  
    <Footer/>
    </>
  )
}

export default Uranus;