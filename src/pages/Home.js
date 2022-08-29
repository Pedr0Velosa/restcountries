import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Country from '../components/Country';
import Search from '../components/Search';
import {useFetchedData} from '../hooks/useFetchedData';

function Home () {
  const [countries, setCountries] = useFetchedData(process.env.REACT_APP_ALL_URL);
  const [filterRegion, setFilterRegion] = useState('');
  const [filterCountry, setFilterCountry] = useState('');

  const filterDataByRegion = () => {
    return (countries.filter(country => (
      filterRegion !== 'All' ? (
        country.region.includes(filterRegion))
        : (country.region.includes(''))
    )));
  };

  const filterDataByName = (filteredRegion) => {
    return filteredRegion.filter(country => (
      country.name.official
        .toLowerCase().includes(filterCountry.toLocaleLowerCase()) ||
      country.name.common
        .toLowerCase().includes(filterCountry.toLocaleLowerCase())
    ));
  };

  const filterData = () => {
    return filterDataByName(filterDataByRegion());
  };

  return (
    <section className='mx-4	mt-8 block lg:mt-16 max-w-screen-2xl	2xl:mx-auto xl:mx-16'>
      <Search
        countries={countries}
        setCountries={setCountries}
        setFilterRegion={setFilterRegion}
        setFilterCountry={setFilterCountry}
      />
      <section className='sm:grid sm:grid-cols-12-autofit-350 gap-x-4 gap-y-8	items-stretch md:gap-10'>
        {!countries ? null :
          (filterData())
            .map(filteredCountry => (
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
            )}
      </section>
    </section>
  );
}

export default Home;