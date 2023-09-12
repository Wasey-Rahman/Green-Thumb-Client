import React, { useEffect, useState } from 'react';
import './Blog.css';

const Blog = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('https://green-thumb-server.vercel.app/Blog') // Replace with the correct path to your data.json file
      .then((response) => response.json())
      .then((data) => setVideos(data))
      .catch((error) => console.error('Error fetching video data:', error));
  }, []);

  return (
   <div>
        <h1 className="font-extrabold text-4xl text-center mt-20 mb-20">Expert Tips</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20">
        {videos.map((video, index) => (
          <div key={index} className="video-container">
            <iframe
              title={`YouTube Video ${index + 1}`}
              width="100%"
              height="315" // Adjust the height as needed
              src={`https://www.youtube.com/embed/${getYouTubeVideoId(video.url)}`}
              frameBorder="0"
              allowFullScreen
            />
            <h2 className="font-bold text-lg">{video.title}</h2>
          </div>
        ))}
      </div>
    </div>
   );
};

export default Blog;

// Helper function to extract YouTube video ID from the URL
const getYouTubeVideoId = (url) => {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[7]) || '';
};

