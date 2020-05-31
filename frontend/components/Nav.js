import Link from 'next/link';

const Nav = () => {
  return (
    <nav>
      <Link href='/'>
        <a style={{ marginRight: 30 }}>Home Page</a>
      </Link>
      <Link href='/sell'>
        <a>Sell Page</a>
      </Link>
    </nav>
  );
};

export default Nav;
