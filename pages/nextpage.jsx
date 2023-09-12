// pages/nextpage.js
import React from 'react';
import styles from '../styles/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const NextPage = () => {
  const planningIdeas = [
    {
      title: 'Choose Plants Wisely',
      description:
        'Research and select plants that are suitable for your local climate and soil conditions.',
    },
    {
      title: 'Create a Garden Layout',
      description:
        'Design a layout for your garden, including the placement of different plants and features.',
    },
    {
      title: 'Prepare the Soil',
      description:
        'Ensure the soil is well-prepared with compost and nutrients before planting.',
    },
    {
      title: 'Plant with Care',
      description: 'Follow proper planting techniques for each type of plant.',
    },
    {
      title: 'Watering Schedule',
      description:
        'Establish a watering schedule based on the needs of your plants.',
    },
    {
      title: 'Mulching',
      description:
        'Apply mulch around the plants to conserve moisture and prevent weed growth.',
    },
  ];
  return (
    <div>
      <div className={styles.container}>
      <main className={styles.main}>
       <h2 className='font-extrabold text-4xl text-center mt-10 mb-10'>New Gardener Planner</h2>

        <div className={styles.grid}>
          {planningIdeas.map((idea, index) => (
            <div key={index} className={styles.card}>
              <h2 className='font-bold '><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} /> {idea.title}</h2>
              <p>{idea.description}</p>
            </div>
          ))}
        </div>
      </main>

      
    </div>
    </div>
  );
};

export default NextPage;

