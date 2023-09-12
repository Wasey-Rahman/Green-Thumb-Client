import React, { useState, useEffect } from 'react';


const Outdoor = () => {
  const [outdoorPlants, setOutdoorPlants] = useState([]);

  useEffect(() => {
    fetch('https://green-thumb-server.vercel.app/Outdoor') // Replace with your JSON file path or API endpoint
      .then((response) => response.json())
      .then((data) => setOutdoorPlants(data))
      .catch((error) => console.error('Error fetching plant data:', error));
  }, []);

  return (
    <div>
      <div className="container mx-auto p-4">
        <h1 className="font-extrabold text-4xl text-center mt-10 mb-20">Important Outdoor Plants</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20">
          {outdoorPlants.map((outdoorPlant) => (
            <div key={outdoorPlant.id} className="card-two bg-green-50 p-4 shadow rounded-md">
              <div className="flex-shrink-0">
                <img
                  src={outdoorPlant.image}
                  alt={outdoorPlant.name}
                  className="h-16 w-16 rounded-full"
                />
              </div>
              <div className="ml-4">
                <h2 className="font-bold text-lg">{outdoorPlant.name}</h2>
                <p className="text-gray-600">{outdoorPlant.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Outdoor;












