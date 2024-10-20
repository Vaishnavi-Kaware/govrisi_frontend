import React, { useEffect, useRef } from "react";
import "../assets/styles/textslider.css"; // Assuming CSS is stored in this file

const ImageSlider = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    // Function to create the marquee effect
    const createMarquee = ({ duration = 80000, padding = 20 }) => {
      const marquee = marqueeRef.current;
      let distance = marquee.scrollWidth;
      let marqueeContent = marquee.children;

      const animate = () => {
        const startPosition = marquee.scrollLeft;
        if (startPosition >= distance) {
          marquee.scrollLeft = 0;
        } else {
          marquee.scrollLeft += 1;
        }
      };

      let interval = setInterval(animate, duration / distance);

      return () => {
        clearInterval(interval);
      };
    };

    // Call the createMarquee function to start the marquee effect
    const stopMarquee = createMarquee({ duration: 80000, padding: 20 });

    // Cleanup function
    return () => {
      stopMarquee();
    };
  }, []);

  return (
    <div className="container">
      <div className="marquee-sibling">
        Breaking News
      </div>
      <div className="marquee" ref={marqueeRef}>
        <div className="marquee-content-items">
          <p><b>&raquo;</b> Breaking news: Stock market crashes as inflation rises globally.</p>
        </div>
        <div className="marquee-content-items">
          <p><b>&raquo;</b> Tech news: New iPhone model with a revolutionary battery life released.</p>
        </div>
        <div className="marquee-content-items">
          <p><b>&raquo;</b> Weather alert: Heavy rainfall expected across coastal regions tomorrow.</p>
        </div>
        <div className="marquee-content-items">
          <p><b>&raquo;</b> Sports: Local team wins the championship after an intense final.</p>
        </div>
        <div className="marquee-content-items">
          <p><b>&raquo;</b> Health: New studies show benefits of daily exercise for mental health.</p>
        </div>
        <div className="marquee-content-items">
          <p><b>&raquo;</b> Global events: World leaders meet to discuss climate change solutions.</p>
        </div>
        <div className="marquee-content-items">
          <p><b>&raquo;</b> Entertainment: Popular movie breaks all-time box office records.</p>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
