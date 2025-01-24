import React, { useState, useEffect } from 'react';

function App() {
  const words = [
    "inevitable",
    "beautiful",
    "constant",
    "unstoppable",
    "natural",
    "powerful",
    "a philosophy",
    "a choice"
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsAnimating(true);
      }, 500); // Wait for fade out before changing word
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-light tracking-tight text-gray-900">
          Progress is{" "}
          <span 
            className={`inline-block font-medium text-blue-600 transition-opacity duration-500 ${
              isAnimating ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {words[currentIndex]}
          </span>
        </h1>
      </div>
    </div>
  );
}

export default App;