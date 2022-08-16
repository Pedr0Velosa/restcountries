import React from 'react';
import {Link} from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <div>Page not found</div>
      <Link to={'/restcountries'}>Home</Link>
    </>
  );
};

export default NotFound;