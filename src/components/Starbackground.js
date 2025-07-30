import React, { useContext, useEffect, useState } from 'react';
import { DarkModeContext } from '../context/DarkModeContext'; // adjust path as needed

const Starbackground = () => {
  const { isDarkmode } = useContext(DarkModeContext);
  const [stars, setStars] = useState([]);

  useEffect(() => {
    if (isDarkmode) {
      generateStars();
    } else {
      setStars([]); // clear stars when light mode
    }
  }, [isDarkmode]);

  const generateStars = () => {
    const numOfStars = Math.floor(window.innerWidth * window.innerHeight / 5000);
    const newStars = [];

    for (let i = 0; i < numOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5
      });
    }

    setStars(newStars);
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map(star => (
        <div
          key={star.id}
          className="bg-white rounded-full absolute"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
            animation: `twinkle ${Math.random() * 2 + 2}s infinite ease-in-out`,
            animationDelay: `${Math.random() * 3}s`
          }}
        />
      ))}
    </div>
  );
};

export default Starbackground;
