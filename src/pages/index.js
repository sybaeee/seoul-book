
import { AnimationTest, GuidLineContents, GuideLineWrap, KoreaVideo, MainTextWrap, MainWrap, PhotoSlide, PhotoSlideWrapper, SliderButton, SliderButtonWrapper, SubTextWrap, TextWrapper, VisitButton } from '@/styles/home.styles';
import { useRouter } from 'next/router';
import palace from '../../public/videos/palace57566.mp4'
import { useState } from 'react';
import Slider from '@/components/slider/Slider';
import ImgMediaCard from '@/components/common/card';
import { ImgWrpper } from '@/styles/common/Card.style';
import { Grid } from '@mui/material';

const Home = () => {

  const [tourCardArray, setTourCardAttay] = useState([0, 0, 0])
  const router = useRouter();

  const sliderData = [
    {
      index: 1,
      imgSrc: 'namsanView.png.',
      link: '/',
    },
    {
      imgSrc: 'namsanView.png.',
      link: '/',
    },
    {
      imgSrc: 'namsanView.png',
      link: '/detail',
    },
    {
      imgSrc: 'namsanView.png',
      link: '/detail',
    },
    {
      imgSrc: 'namsanView.png',
      link: '/',
    },
    {
      imgSrc: 'namsanView.png',
      link: '/',
    },
    {
      imgSrc: 'namsanView.png',
      link: '/',
    },
  ];

  return (
    <>
      <>
        <MainWrap>
          <MainTextWrap>
            <TextWrapper>
              <span>서울</span>
              <span>B</span>
              <span>ook과 함께</span>
              <SubTextWrap>서울 현지인과 외국여행객 간의 새로운 플랫폼</SubTextWrap>
            </TextWrapper>
            <div>
              <VisitButton onClick={() => { router.push('/mapSelect') }}>
                지금 방문하기
              </VisitButton>
            </div>

          </MainTextWrap>
          <Slider sliderData={sliderData} />

          <Grid sx={{ flexGrow: 1 }} container spacing={1}>
            <ImgWrpper>
              <ImgMediaCard />
              <ImgMediaCard />
              <ImgMediaCard />
              <ImgMediaCard />
              <ImgMediaCard />
              <ImgMediaCard />
              {tourCardArray.map((v, i) => {

              })}
            </ImgWrpper>
          </Grid>
          <KoreaVideo autoPlay muted loop >
            <source src={palace} type="video/mp4" />
          </KoreaVideo>
        </MainWrap>
      </>
    </>
  );
}

export default Home;
