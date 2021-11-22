import Link from 'next/link';
import styled from 'styled-components';
import { Nav } from './Nav';

const Logo = styled('h1')`
  background: red;
`;

function Header() {
  return (
    <header>
      <div className="bar">
        <Logo>
          <Link href="/">
            <h1>Sick fits</h1>
          </Link>
        </Logo>
      </div>
      <div className="sub-bar">
        <p>Search</p>
      </div>
      <Nav />
    </header>
  );
}

export { Header };
