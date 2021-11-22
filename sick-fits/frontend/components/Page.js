import React from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import { Header } from './Header';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'radnika_next';
    font-style: normal;
    font-weight: normal;
    src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
  }
  html {
    --black: #393939;
    --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
    --gray: #3A3A3A;
    --gray: var(--gray);
    --lightGrey: #e1e1e1;
    --lightGray: var(--lightGrey);
    --maxWidth: 1000px;
    --offWhite: #ededed;
    --red: #ff0000;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family: 'radnika_next', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.5rem;
    line-height:2;
    margin: 0;
    padding: 0;
  }
  a {
    color: var(---black);
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  button {
    font-family: 'radnika_next', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
  }
  `;

const InnerStyles = styled('div')`
  max-width: var(--maxwidth);
  margin: 0 auto;
  padding: 2rem;
`;

// eslint-disable-next-line react/prop-types
function Page({ children }) {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <InnerStyles>{children}</InnerStyles>
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.oneOf([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Page;
export { Page };
