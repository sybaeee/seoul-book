import Layout from '@/components/common/layout';
import Header from '../components/common/header'
import { AnimationTest, MainWrap, SubTextWrap, TextWrapper, VisitButton } from '@/styles/HomeStyles';
import Image from "next/image";
const Home = ()=>{

  return(
    <>
  <Layout>
    <MainWrap>
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
      <AnimationTest>
        성현
      </AnimationTest>
     </div>
      </MainWrap>
  </Layout>
    </>
  );
}

export default Home;