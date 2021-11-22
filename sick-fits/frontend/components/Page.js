import React from 'react';
import PropTypes from 'prop-types';
import { Header } from './Header';

// eslint-disable-next-line react/prop-types
function Page({ children, cool }) {
  return (
    <div>
      <Header />
      <h2>I am the page component</h2>
      <h3>{cool}</h3>
      {children}
    </div>
  );
}

Page.propTypes = {
  cool: PropTypes.string,
  children: PropTypes.oneOf([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Page;
export { Page };
