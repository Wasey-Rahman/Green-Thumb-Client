import React, { useEffect, useState } from 'react';
import  './Category.css'

const Category = () => {
    const [plantData, setPlantData] = useState([]);

    useEffect(() => {
        // Fetch the plant data from your API or JSON file
        // Replace 'plantData.json' with your API endpoint or JSON file path
        fetch('https://green-thumb-server.vercel.app/Category')
          .then((response) => response.json())
          .then((data) => setPlantData(data))
          .catch((error) => console.error('Error fetching plant data:', error));
      }, []);
    return (
        <div>
            <h2 className='font-extrabold text-4xl text-center mt-20 mb-20'>Category Of Plants</h2>
             <div className="flex flex-wrap justify-center gap-4 mb-20">
      {plantData.map((plant) => (
        <div key={plant.id} className="flex flex-col items-center">
          <img
            src={plant.photo}
            alt={plant.category}
            className="w-40 h-40 rounded-full plant-image"
          />
          <p className="mt-2 font-bold">{plant.category}</p>
        </div>
      ))}
    </div>
        </div>
    );
};

export default Category;