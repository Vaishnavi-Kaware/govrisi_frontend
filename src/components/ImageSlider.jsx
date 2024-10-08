import React, { useState, useEffect } from "react";
import "../assets/styles/slider.css";
import image1 from "../assets/images/1-1.jpg";  // Add the correct path to the first image
import image2 from "../assets/images/1-2.jpg";  // Add the correct path to the second image
import image3 from "../assets/images/1-31.jpg";  // Add the correct path to the third image

const ImageSlider = () => {
  const images = [image1, image2, image3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 2 seconds

    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  return (
    <div className="slider">
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slider-image" />
    </div>
  );
};

export default ImageSlider;
