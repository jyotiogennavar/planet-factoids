import React, { useState } from 'react';
import PlanetImage from '../PlanetImage/PlanetImage';

const ExampleComponent = () => {
  const [selectedImage, setSelectedImage] = useState('planet'); // Set the initial selected image

  const handleButtonClick = (imageType) => {
    setSelectedImage(imageType);
  };

  // Assume that your planetData has the structure you provided in the previous question
  const planetData = {
    // ... rest of the planet data
    images: {
      planet: "./assets/planet-mercury.svg",
      internal: "./assets/planet-mercury-internal.svg",
      geology: "./assets/geology-mercury.png"
    }
  };

  return (
    <div>
      <PlanetImage images={planetData.images} selectedImage={selectedImage} />
      {/* Add buttons or any UI element to switch between images */}
      <button onClick={() => handleButtonClick('planet')}>Planet Image</button>
      <button onClick={() => handleButtonClick('internal')}>Internal Image</button>
      <button onClick={() => handleButtonClick('geology')}>Geology Image</button>
    </div>
  );
};


function Mercury() {
  return (
    <></>
  );
}

export default Mercury;


  // <button onClick={() => handleButtonClick('planet')}>Planet Image</button>
  //     <button onClick={() => handleButtonClick('internal')}>Internal Image</button>
  //     <button onClick={() => handleButtonClick('geology')}>Geology Image</button>