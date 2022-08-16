import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import Country from '../components/Country';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeftLong as fasFaArrowLeftLong} from '@fortawesome/free-solid-svg-icons';

function Details() {
  const {name, ccn3} = useParams();
  //param do nome para fazer request na api
  const [country, setCountry] = useState([]);

  useEffect(() => {
    const requestCountry = async () => {
      const res = await fetch(`
      https://restcountries.com/v3.1/alpha/${ccn3}
    `);
      const json = await res.json();
      setCountry(json);
    };
    requestCountry();
  }, [name, ccn3]);
  return (
    <section className='mt-8 md:mt-16 mx-4 grid gap-4 grid-rows-2-auto
     max-w-screen-lg xl:mx-auto	
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