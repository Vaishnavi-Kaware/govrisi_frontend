import React, { useEffect, useRef } from "react";
import "./ImageSlider.css";

const ImageSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;

    // Slider scrolling logic
    const startSlider = () => {
      let scrollAmount = slider.scrollWidth;
      const sliderWidth = slider.clientWidth;

      const interval = setInterval(() => {
        scrollAmount -= 1; // Speed of the scrolling
        slider.scrollLeft = scrollAmount;

        if (scrollAmount <= 0) {
          scrollAmount = slider.scrollWidth; // Reset to start once content is fully scrolled
        }
      }, 20); // Controls speed

      return () => clearInterval(interval);
    };

    startSlider();
  }, []);

  return (
    <div className="slider-container">
      <div className="slider-sibling">Image Gallery</div>
      <div className="slider" ref={sliderRef}>
        <div className="slider-content">
          <div className="slider-content-items">
            <p>
              <b>&raquo;</b> 1 Image description goes here
            </p>
          </div>
          <div className="slider-content-items">
            <p>
              <b>&raquo;</b> 2 Another image description
            </p>
          </div>
          <div className="slider-content-items">
            <p>
              <b>&raquo;</b> 3 Some interesting image details
            </p>
          </div>
          <div className="slider-content-items">
            <p>
              <b>&raquo;</b> 4 Image details here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
