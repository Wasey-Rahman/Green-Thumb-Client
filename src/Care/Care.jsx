import React, { useState, useEffect } from 'react';
import './Care.css'


const Care = () => {
  const [careTips, setCareTips] = useState([]);

  useEffect(() => {
    fetch('https://green-thumb-server.vercel.app/Care') 
      .then((response) => response.json())
      .then((data) => setCareTips(data))
      .catch((error) => console.error('Error fetching plant data:', error));
  }, []);

  return (
    
    
    <div className="care-container mt-20 mb-20"> {/* Apply custom CSS class here */}
      <h1 className="font-extrabold text-4xl text-center mt-20 mb-20">Plant Care Tips</h1>
      <div className="grid grid-cols-2 gap-2">
        {careTips.map((plant) => (
          <div key={plant.name} className="square-image">
            <img src={plant.image} alt={plant.name} className="w-60 h-60 object-cover" />
            <div className="description-overlay">
              <h2 className="font-bold text-lg">{plant.name}</h2>
              <p className="text-gray-600">{plant.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
   
    
  );
};

export default Care;

