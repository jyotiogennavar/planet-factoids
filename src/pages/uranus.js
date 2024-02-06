import React from "react";
import PlanetData from "../data.json"

import PlanetInfo from "../components/PlanetInfo";
import PlanetStats from "../components/PlanetStats";
import PlanetImage from "../components/PlanetImage";
import PageLayout from "../components/PageLayout/PageLayout";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Uranus = () => {
  return (
    <>
    <Header/>
    <PageLayout>
      <PlanetImage src={'./assets/planet-mercury.svg'} alt={'mercury'}/>
      <PlanetInfo/>
      <PlanetStats/>
    </PageLayout>
  
    <Footer/>
    </>
  )
}

export default Uranus;