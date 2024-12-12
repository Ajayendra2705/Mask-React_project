import React from "react";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import EventsSection from "./components/EventsSection/EventsSection";
import GallerySection from "./components/GallerySection/GallerySection";
import Carousel from "./components/Carousel/Carousel";
import AboutUs from "./components/AboutUs/AboutUs";
import Footer from "./components/Footer/Footer";
import Teams from "./components/Teams/Teams";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <EventsSection />
      <GallerySection />
      <Carousel />
      <Teams />
      {/* <AboutUs /> */}
      <Footer />
    </div>
  );
}

export default App;
