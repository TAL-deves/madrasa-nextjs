"use client"

import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function VideoSlider({videos}) {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

//   const sliderSettings = {
//     asNavFor: nav1,
//     ref: (slider2) => setNav2(slider2),
//     slidesToShow: 3,
//     swipeToSlide: true,
//     focusOnSelect: false,
//     arrows: true,
//     dots: true,  
//   };

    return (
    <div>
        <div className='flex flex-col items-center'>
            <h1 className='text-center text-4xl pt-4'>ভিডিও গ্যালারি</h1>
            <img src="https://darululoomhathazari.com/media/img/icon-image.png" alt="" />
        </div>
      <div>
      <Slider className='m-10'
        ref={(slider2) => setNav2(slider2)}
        slidesToShow={3}
        swipeToSlide={true}
        arrows={true}
        dots={true}
      >
        {/* <Slider {...sliderSettings}> */}
        {videos.map(vid => (
          <div className='p-4'>
          <iframe height="250" width="100%" src={vid} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div> 
        ))}

      </Slider>
      </div>
    </div>
  );
}




