import React from "react";
import "./Carousel.css";

const Carousel = () => {
  return (
    <section className="gallery-section">
      <div className='gal_box' id="box_id">
      <h1 id="fan_text">Fanart Submissions</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur expedita, id natus iure aliquam rerum quibusdam laboriosam quis distinctio aut.  Sed quas pariatur dolor ea modi voluptates quasi praesentium a. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur expedita, id natus iure aliquam rerum quibusdam laboriosam quis distinctio aut.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur expedita, id natus iure aliquam rerum quibusdam laboriosam quis distinctio aut.</p>
        <div className="button_box" id="button_text">
          <h1>Our Artworks -></h1>
        </div>
      </div>
      <div className="gal_box" id="right_box">

      </div>
    </section>
  );
};

export default Carousel;
