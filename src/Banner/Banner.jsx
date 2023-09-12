import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Banner.css'; // Import the custom CSS for the hover effect

const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false, // Remove arrow buttons
  };

  return (
    <div className="bg-green-100 min-h-screen flex items-center justify-center">
      <div className="flex flex-wrap w-full max-w-6xl mx-auto">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black animate-fade-in mb-4 ">
            Welcome...
          </h1>
          <p className="text-black animate-fade-in mb-8 ">Passionate love for gardening blossoms in every nurturing touch.</p>
          <div className="max-w-sm mx-auto">
            <Slider {...settings}>
              <div>
                <img
                  src="https://media.istockphoto.com/id/1414023501/photo/beautiful-ornamental-garden.webp?b=1&s=170667a&w=0&k=20&c=_MA16WPfVHwlov2jw2t78BNhVs2btmi4yaWFM3M4yak="
                  alt="Image 1"
                  className="w-full rounded-lg object-cover"
                />
              </div>
              <div>
                <img
                  src="https://plus.unsplash.com/premium_photo-1680288884596-4ccbf5355297?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2FyZGVufGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
                  alt="Image 2"
                  className="w-full rounded-lg object-cover"
                />
              </div>
              <div>
                <img
                  src="https://media.istockphoto.com/id/1418173645/photo/vegetable-garden.webp?b=1&s=170667a&w=0&k=20&c=xca8L95vXOCA20DmSccJ5WcTpeDiyjkgpWot9RcM79c="
                  alt="Image 3"
                  className="w-full rounded-lg object-cover"
                />
              </div>
            </Slider>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-end">
          <div className="image-container">
            <div className="overlap-image" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z2FyZGVufGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60')` }}></div>
            <div className="overlap-image" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1470755008296-2939845775eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGdhcmRlbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60')` }}></div>
            <div className="overlap-image" style={{ backgroundImage: `url('https://media.istockphoto.com/id/1456814188/photo/gardening-set-of-tools-for-gardener-and-succulents-seedlings-on-white-table-background-spring.webp?b=1&s=170667a&w=0&k=20&c=5kat2sexPZnJar4Rb5CRZswBxCgKGKKqaor5W4fxyAg=')` }}></div>
            <div className="overlap-image" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1572085313466-6710de8d7ba3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2FyZGVufGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60')` }}></div>
            <div className="overlap-image" style={{ backgroundImage: `url('https://plus.unsplash.com/premium_photo-1678836292808-b8dabf70f838?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGdhcmRlbmluZyUyMHRvb2xzfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60')` }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;














