import Link from 'next/link';

const Home = () => {
  return (
    <div>
      Hello World!
      <br />
      <Link href='/sell'>
        <a>Sell Page</a>
      </Link>
    </div>
  );
};

export default Home;
