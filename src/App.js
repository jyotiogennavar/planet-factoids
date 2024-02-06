import React from "react";
import { createBrowserRouter, RouterProvider,} from "react-router-dom";

import GlobalStyles from "./components/GlobalStyles";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainBody from "./components/MainBody/MainBody";
import Mercury from "./pages/mercury"; // Update the import statement
import Venus from "./pages/venus";
import Earth from "./pages/earth";
import Mars from "./pages/mars";
import Jupiter from "./pages/jupiter";
import Saturn from "./pages/saturn";
import Neptune from "./pages/neptune";
import Uranus from "./pages/uranus";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mercury/>
  },
  {
    path: "venus",
    element: <Venus/>
  },
  {
    path: "earth",
    element: <Earth/>
  },
  {
    path: "mars",
    element: <Mars/>
  },
  {
    path: "jupiter",
    element: <Jupiter/>
  },
  {
    path: "saturn",
    element: <Saturn/>
  },
  {
    path: "neptune",
    element: <Neptune/>
  },
  {
    path: "uranus",
    element: <Uranus/>
  },


])

function App() {
  return (
    <>
    <GlobalStyles />
    <RouterProvider router={router} />
  </>
  );
}

export default App;
