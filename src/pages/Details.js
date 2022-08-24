import React from 'react';
import {Link, useParams} from 'react-router-dom';
import Country from '../components/Country';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeftLong as fasFaArrowLeftLong} from '@fortawesome/free-solid-svg-icons';
import {useFetchedData} from '../hooks/useFetchedData';


function Details() {
  const {ccn3} = useParams();
  const [country] = useFetchedData(`${process.env.REACT_APP_CCN3_URL}${ccn3}`);

  return (
    <section className='mt-8 md:mt-16 mx-4 grid gap-4 grid-rows-2-auto
     max-w-screen-xl xl:mx-auto	
     '>
      <Link to={'/restcountries'}
        className='rounded-md shadow shadow-gray-300 dark:shadow-darkblue-500 overflow-hidden px-4 py-1 inline-block max-w-fit col-span-full	'>
        <FontAwesomeIcon icon={fasFaArrowLeftLong} className='mr-2.5' />
        <span>Back</span>
      </Link>
      <div className='grid md:grid-cols-2 gap-4'>
        <Country country={country[0]} getBorders={true} getDetails={true} />
      </div>
    </section>
  );
}

export default Details;