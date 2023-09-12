import React, { useEffect, useState } from 'react';

const Indoor = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch('https://green-thumb-server.vercel.app/Indoor') // Replace with your JSON file path or API endpoint
      .then((response) => response.json())
      .then((data) => setPlants(data))
      .catch((error) => console.error('Error fetching plant data:', error));
  }, []);

  // State to track hovered card
  const [hoveredCardId, setHoveredCardId] = useState(null);

  // Function to handle mouse enter event
  const handleMouseEnter = (id) => {
    setHoveredCardId(id);
  };

  // Function to handle mouse leave event
  const handleMouseLeave = () => {
    setHoveredCardId(null);
  };

  return (
    <div>
      <h2 className='font-extrabold text-4xl text-center mt-10 mb-20'>Important Indoor Plants</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {plants.map((plant) => (
          <div
            key={plant.id}
            className="card"
            onMouseEnter={() => handleMouseEnter(plant.id)}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: hoveredCardId === plant.id ? 'scale(1.05)' : 'scale(1)',
              /* Add your card styles here */
            }}
          >
            <img src={plant.image} alt={plant.name} className="card-img" />
            <div className="card-body">
              <h2 className="card-title">{plant.name}</h2>
              <p>{plant.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Indoor;
