import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Country from '../components/Country';
import Search from '../components/Search';

function Home() {
  const [countries, setCountries] = useState([]);
  const [filterRegion, setFilterRegion] = useState('');
  const [filterCountry, setFilterCountry] = useState('');

  useEffect(() => {
    const requestCountries = async () => {
      const res = await fetch(
        `https://restcountries.com/v3.1/all?fields=name,region,population,capital,flags,cca3,ccn3`
      );
      const json = await res.json();
      setCountries(json);
    };
    requestCountries();
  }, []);
  return (
    <section className='mx-4	mt-8 block lg:mt-16 max-w-screen-2xl	2xl:mx-auto xl:mx-16'>
      <Search
        countries={countries}
        setCountries={setCountries}
        setFilterRegion={setFilterRegion}
        setFilterCountry={setFilterCountry}
        filterRegion={filterRegion}
        filterCountry={filterCountry}
      />
      <section className='sm:grid sm:grid-cols-12-autofit-350 gap-x-4 gap-y-8	items-stretch md:gap-10'>
        {!countries ? null :
          (countries.filter(country =>
          (
            filterRegion !== 'All' ? (
              country.region.includes(filterRegion)
            ) : (
              country.region.includes('')
            )
          )).filter(filteredRegionCountry => (
            filteredRegionCountry.name.official
              .toLowerCase().includes(filterCountry) ||
            filteredRegionCountry.name.common
              .toLowerCase().includes(filterCountry)
          )).map(filteredCountry => (
            <Link
              key={filteredCountry.name.official}
              to={`/details/${filteredCountry.name.official}/${filteredCountry.ccn3}`}
              className='block mb-8 sm:mb-0 max-w-lg mx-auto'>
              <div
                className='shadow-lg shadow-gray-200 rounded-lg overflow-hidden h-full dark:shadow-darkblue-500 dark:bg-darkblue-300 '>
                <Country country={filteredCountry} getBorders={false} />
              </div>
            </Link>
          )
          ))}
      </section>
    </section>
  );
}

export default Home;