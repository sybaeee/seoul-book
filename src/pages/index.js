import Layout from '@/components/common/layout';
import Header from '../components/common/header'
import { AnimationTest, GuidLineContents, GuideLineWrap, MainTextWrap, MainWrap, PhotoSlide, PhotoSlideWrapper, SliderButton, SliderButtonWrapper, SubTextWrap, TextWrapper, VisitButton } from '@/styles/HomeStyles';
import Image from "next/image";
import { useRouter } from 'next/router';

const Home = ()=>{
const router = useRouter()
  return(
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
      <VisitButton>
      지금 방문하기
      </VisitButton>
     </div>
     </MainTextWrap>
     <PhotoSlideWrapper>
     <PhotoSlide onClick={()=>{router.push("/")}}></PhotoSlide>
     <PhotoSlide onClick={()=>{router.push("/")}}></PhotoSlide>
     <PhotoSlide onClick={()=>{router.push("/")}}></PhotoSlide>
     <PhotoSlide onClick={()=>{router.push("/")}}></PhotoSlide>
     </PhotoSlideWrapper>
     <SliderButtonWrapper>
     <SliderButton>prev</SliderButton>
     <SliderButton>Next</SliderButton>
     </SliderButtonWrapper>
      </MainWrap>
  </Layout>
    </>
  );
}

export default Home;
