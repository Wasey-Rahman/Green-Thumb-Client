import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarker, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faInstagram ,faYoutube} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-green-500 text-neutral-content">
  <div>
  
    <p className=' text-xl text-black'> <span className='font-extrabold text-1xl'>Green-Thumb</span>
    <br /><a href="#"><FontAwesomeIcon icon={faPhone} className=" text-black text-xl" /></a>  +19081997 <br /><a href="#"><FontAwesomeIcon icon={faEnvelope} className=" text-black text-xl" /></a> gardening@greenthumb.com <br /><a href="#"><FontAwesomeIcon icon={faMapMarker} className="text-black text-xl" /></a>  819 Main Street Townhill, Uk, Postal Code-81997 <br /><span className='font-bold'>Copyright © 2023 Green-Thumb. All rights reserved.</span>
    </p>
  </div> 
  <div className='mt-12'>
    <span className="footer-title text-black">Get In Touch</span> 
    <div className="grid grid-flow-col gap-4">
    <a href="#"><FontAwesomeIcon icon={faFacebook} className="text-2xl text-black" /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter}className="text-2xl text-black" /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram}className="text-2xl text-black" /></a>
            <a href="#"> <FontAwesomeIcon icon={faYoutube}className="text-2xl text-black" /></a>
    </div>
  </div>
</footer>
        </div>
    );
};

export default Footer;
