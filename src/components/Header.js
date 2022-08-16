import React from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMoon as fasFaMoon} from '@fortawesome/free-solid-svg-icons';
import {faMoon as farFaMoon} from '@fortawesome/free-regular-svg-icons';

const Header = ({isDarkMode, setIsDarkMode}) => {

  return (
    <header
      className='sticky top-0 shadow shadow-gray-200
    	z-10 w-full px-6 py-5 bg-white
      lg:py-6 
      dark:shadow-darkblue-500 dark:bg-darkblue-300'>
      <nav className='flex justify-between max-w-screen-2xl 2xl:mx-auto xl:mx-16'>
        <Link to='/home'
          className='text-xl	lg:text-3xl font-semibold hover:underline'>
          Where in the world?
        </Link>
        <button className='text-base lg:text-2xl cursor-pointer'
          onClick={() => setIsDarkMode(!isDarkMode)}>
          {!isDarkMode ? (
            <FontAwesomeIcon icon={farFaMoon} />
          ) : (
            <FontAwesomeIcon icon={fasFaMoon} />
          )}
          <label className='pointer-events-none	'>Dark Mode</label>
        </button>
      </nav>
    </header >

  );
};

export default Header;