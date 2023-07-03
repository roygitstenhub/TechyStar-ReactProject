import React from 'react';
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from "../assets/3.jpg"
import img2 from "../assets/4.jpg"

const Services = () => {
  return (
    <div className="services">
        <Carousel
        infiniteLoop
        autoPlay
        showArrows={false}
        showThumbs={false} 
        showStatus={false}
        interval={1000}

        >
          <div>
          <img src={img1} alt="itemOne" srcset="" />
          <p className='legend'>Full stack</p>
          </div>

          <div>
          <img src={img2} alt="itemTwo" srcset="" />
            <p className='legend'>Peer-To-Peer Support</p>
          </div>
        </Carousel>
    </div>
  )
}

export default Services