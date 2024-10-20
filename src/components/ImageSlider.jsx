import React, { useState, useEffect } from "react";
import "../assets/styles/slider.css";
import image1 from "../assets/images/image2.png";
import image2 from "../assets/images/image3.jpg";
import image3 from "../assets/images/image4.jpg";

const leaders = [
  {
    name: "Leader 1",
    position: "President",
    image: require("../assets/images/cm_image.jpg"), 
  },
  {
    name: "Leader 2",
    position: "Prime Minister",
    image: require("../assets/images/health-minister.avif"), 
  },
  {
    name: "Leader 3",
    position: "Senator",
    image: require("../assets/images/cabinei-minister.jpg"), 
  },
  {
    name: "Leader 4",
    position: "Governor",
    image: require("../assets/images/cheif-secretery.jpg"), 
  },
];

const ImageSlider = () => {
  const images = [image1, image2, image3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 2 seconds

    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  const handleSearch = () => {
    alert(`Searching for: ${searchQuery}`);
  };

  return (
    <div className="slider-container">
      {/* Image Slider */}
      <div className="slider">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="slider-image"
        />

        {/* Search Bar and Button */}
        <div className="search-card-container">
          <div className="search-container">
            <input
              type="text"
              className="search-input"
              placeholder="Search leader"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="search-button" onClick={handleSearch}>
              Search
            </button>
          </div>

          {/* Overlay Card at the bottom */}
          <div className="leaders-card">
            {leaders.map((leader, index) => (
              <div key={index} className="leader-info">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="leader-image"
                />
                <div className="leader-details">
                  <h4>{leader.name}</h4>
                  <p>{leader.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
