import React from 'react';
import {Link} from 'react-router-dom';

const NotFound = () => {
  return (
    <section className='page-not-found'>
      <div>Page not found</div>
      <Link to={'/restcountries'}>Home</Link>
    </section>
  );
};

export default NotFound;