import React, { useEffect, useState } from "react";
import "./Hero.css";

import banner1 from "../Assets/banner1.png";
import banner2 from "../Assets/banner2.png";
import banner3 from "../Assets/banner3.png";

export const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [length, setLength] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const listImages = document.querySelector(".list-images");
    const imgs = document.getElementsByTagName("img");
    setLength(imgs.length);

    const handleChangeSlide = () => {
      const imgs = document.querySelectorAll(".list-images img");
      const width = imgs[current].offsetWidth;

      if (current === length - 1) {
        setCurrent(0);
        listImages.style.transform = `translateX(0)`;
      } else {
        setCurrent(current + 1);
        listImages.style.transform = `translateX(${-width * current}px)`;
      }
    };

    const handleEventChangeSlide = setInterval(handleChangeSlide, 4000);
    setIntervalId(handleEventChangeSlide);

    return () => clearInterval(handleEventChangeSlide);
  }, [current, length]);

  const handlePrev = () => {
    clearInterval(intervalId);

    if (current === 0) {
      setCurrent(length - 1);
    } else {
      setCurrent(current - 1);
    }
  };

  const handleNext = () => {
    clearInterval(intervalId);
    setCurrent((current + 1) % length);
  };

  return (
    <div className="hero">
      <div class="slide-show">
        <div class="list-images">
          <img src={banner1} alt="" />
          <img src={banner2} alt="" />
          <img src={banner3} alt="" />
        </div>
        <div class="btns">
          <div class="btn-left btn">
            <i class="bx bx-chevron-left" onClick={handlePrev}></i>
          </div>
          <div class="btn-right btn">
            <i class="bx bx-chevron-right" onClick={handleNext}></i>
          </div>
        </div>
        <div class="index-images">
          <div class="index-item index-item-0 active"></div>
          <div class="index-item index-item-1"></div>
          <div class="index-item index-item-2"></div>
        </div>
      </div>
    </div>
  );
};
