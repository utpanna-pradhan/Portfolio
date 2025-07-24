import React from 'react';
import {images} from './scroll';
import '../stylesheet/Scroll.css'

function Infiniteskillscroll() {
  return (
<div className="outer ">
  <div className="scroll-track">
    <div className="scroll-content">
      {[...images, ...images].map((image, index) => (
        <img key={index} src={image.src} alt={image.name} className='scroll_img' />
      ))}
    </div>
  </div>
</div>

  )
}

export default Infiniteskillscroll
