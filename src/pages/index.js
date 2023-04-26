import Link from "next/link";

const Home = () => {
  return (
    <>
      <h1>Main 화면</h1>
      <Link href="/detail">
        <p>Go to Form page</p>
      </Link>
    </>
  );
};

export default Home;
