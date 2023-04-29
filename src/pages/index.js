import Link from "next/link";

const Home = () => {
  return (
    <>
      <h1>Main 화면</h1>
      <Link href="/registerForm">
        <p>여행지 등록 폼</p>
      </Link>
      <Link href="/detail">
        <p>여행지 상세 페이지</p>
      </Link>
    </>
  );
};

export default Home;
