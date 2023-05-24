import { PhotoSlide, PhotoSlideWrapper, SliderButton, SliderButtonWrapper } from '@/styles/home.styles';
import { useRouter } from 'next/router';
import React, { useState } from 'react'

const Slider = ({ sliderData }) => {
  const router = useRouter()
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevClick = () => {
    setCurrentSlide(currentSlide === 0 ? slideCount - 1 : currentSlide - 1);
  };

  const handleNextClick = () => {
    setCurrentSlide(currentSlide === slideCount - 1 ? 0 : currentSlide + 1);
  };

  const slideCount = sliderData.length; // 슬라이드 갯수
  const slideWidth = 326; // 슬라이드 너비
  const slideMargin = 10; // 슬라이드 간격
  const wrapperWidth = slideCount * (slideWidth + slideMargin * 2); // PhotoSlideWrapper 너비

  return (
    <>
      <PhotoSlideWrapper style={{ width: `${wrapperWidth}px`, transform: `translateX(-${(slideWidth + slideMargin * 2) * currentSlide}px)` }}>
        {sliderData.map((data, index) => {
          return (
            <PhotoSlide key={index} style={{ backgroundImage: `url(${data.imgSrc})` }} onClick={() => { router.push(data.link) }}>

            </PhotoSlide>
          )

        })
        }
      </PhotoSlideWrapper>
      <SliderButtonWrapper>
        <SliderButton onClick={handlePrevClick}>prev</SliderButton>
        <SliderButton onClick={handleNextClick}>Next</SliderButton>
      </SliderButtonWrapper>
    </>
  )
}

export default Slider