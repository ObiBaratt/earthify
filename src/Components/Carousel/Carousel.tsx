import { useState } from "react";
import "./Carousel.css";
import { imageData } from "../../utils/imageData";
import CarouselImg from "../CarouselImg/CarouselImg";

const Carousel = () => {
    const [cur, setCur] = useState(0);
    const length = imageData.length;

    const nextSlide = () => {
        setCur(cur === length - 1 ? 0 : cur + 1);
      };

      const prevSlide = () => {
        setCur(cur === 0 ? length - 1 : cur - 1);
      };

    return (
        <>
            <h1>Carousel Component</h1>
            <img src="imgs/panda.jpg" alt="red panda" />
        </>
    )
}

export default Carousel;
