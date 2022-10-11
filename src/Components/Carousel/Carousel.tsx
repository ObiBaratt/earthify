import { useState } from "react";
import "./Carousel.css";
import { imageData } from "../../utils/imageData";

import { charities } from "../../utils/charities";


import { CarouselProps } from "../../utils/interfaces";

const Carousel = ({ hidden, setHidden }: CarouselProps) => {

    const [cur, setCur] = useState(0);
    const length = imageData.length;

    const nextSlide = () => {
        setCur(cur === length - 1 ? 0 : cur + 1);
        console.log(cur);
      };

      const prevSlide = () => {
        setCur(cur === 0 ? length - 1 : cur - 1);
        console.log(cur);
      };

      const handleDonate = () => {
        const charity = charities[Math.floor(Math.random() * charities.length)];
        window.location.replace(charity.url)
      };

      const handleSignup = () => {
        setHidden(!hidden);
      }

    return (
        <div className='carousel'>
            <span className='left arrow' onClick={prevSlide} >
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
                </svg>
            </span>
            <span className='right arrow' onClick={nextSlide} >
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                </svg>
            </span>

            {imageData.map((slide, index) => {
                return (
                <div key={index}>
                    {index === cur && (
                      <>
                        <img src={slide.image} alt={slide.name} />
                        <div className="name">{slide.name}</div>
                        <div className="text">{slide.text}</div>
                        <div className="bottom-right">
                          <button onClick={handleSignup} className="carouselBtn">Sign Up</button>
                          <button onClick={handleDonate} className="carouselBtn donate">Donate</button>
                        </div>
                      </>
                    )}
          </div>
        );
      })}
        </div>
    )
}

export default Carousel;
