import React, { useState } from "react";
import PlanetData from "../data.json";
import { COLORS } from "../constant";

import PlanetInfo from "../components/PlanetInfo";
import PlanetStats from "../components/PlanetStats";
import PlanetImage from "../components/PlanetImage";
import PageLayout from "../components/PageLayout/PageLayout";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Mercury = () => {
  const mercuryData = PlanetData.find((planet) => planet.name === "Mercury");
  const [currentImage, setCurrentImage] = useState(mercuryData.images.planet);
  const focusColor = COLORS.cyan;


  const handleImageChange = (image) => {
    setCurrentImage(image);
  };
  

  return (
    <>
      <Header focusColor={focusColor}/>
      <PageLayout>
        <PlanetImage src={currentImage} alt={"mercury"} />
        <PlanetInfo
          name={mercuryData.name}
          overview={mercuryData.overview}
          structure={mercuryData.structure}
          geology={mercuryData.geology}
          onImageChange={handleImageChange} 
          images={mercuryData.images}
          focusColor={focusColor}
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
