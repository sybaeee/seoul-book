import Layout from '@/components/common/layout';
import Header from '../components/common/header'
import { AnimationTest, GuidLineContents, GuideLineWrap, KoreaVideo, MainTextWrap, MainWrap, PhotoSlide, PhotoSlideWrapper, SliderButton, SliderButtonWrapper, SubTextWrap, TextWrapper, VisitButton } from '@/styles/home.styles';
import { useRouter } from 'next/router';
import palace from '../../public/videos/palace57566.mp4'
import { useState } from 'react';
import Slider from '@/components/slider/Slider';

const Home = () => {

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
      <Layout>
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
          <KoreaVideo autoPlay muted loop >
            <source src={palace} type="video/mp4" />
          </KoreaVideo>
        </MainWrap>
      </Layout>
    </>
  );
}

export default Home;
