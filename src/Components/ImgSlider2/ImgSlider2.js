"use client"

import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function ImgSlider2({images}) {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

    return (
    <div>
      <div className='p-4'>
        <h2 className='bg-[#0335670f] text-black text-sm border-l-4 px-2.5 py-4 border-[#013622]' >
        ছবি
        </h2>
      </div>
      <div>
      <Slider 
      className='m-4'
      asNavFor={nav2} 
      ref={(slider1) => setNav1(slider1)}
      arrows={false}>
        
        {images.map(img => (
          
          <>
          <div style={{ display: 'flex', justifyContent:"center" }}>
          <img src={img} alt="" />
          </div>
          </>
        
        ))}
      </Slider>
      </div>
      {/* <h4>Second Slider</h4> */}
      <div>
      <Slider className='m-10'
        asNavFor={nav1}
        ref={(slider2) => setNav2(slider2)}
        slidesToShow={3}
        swipeToSlide={true}
        focusOnSelect={true}
        arrows={true}
      >
        
        {images.map(img => (
          <div className='p-4'>
          <img height={80} src={img} alt="" />
        </div> 
        ))}

      </Slider>
      </div>
    </div>
  );
}




