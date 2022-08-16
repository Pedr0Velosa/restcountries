import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass as fasFaMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import Select from './Select';

const REGIONS = ['All', 'Africa', 'America', 'Asia', 'Europe', 'Oceania'];

const Search = ({setFilterRegion, setFilterCountry, filterCountry, filterRegion}) => {
  return (
    <section className='sm:flex justify-between	items-center mb-3 sm:mb-8'>
      <div
        className='relative rounded-md shadow shadow-gray-300 dark:shadow-darkblue-500 inline-block overflow-hidden mb-2 sm:mb-0 '>
        <span className='absolute left-2 top-2/4 -translate-y-1/2'>
          <FontAwesomeIcon icon={fasFaMagnifyingGlass} />
        </span>
        <input
          type={'text'}
          value={filterCountry}
          placeholder='Search for a country...'
          onChange={(e) => setFilterCountry(e.target.value)}
          className='pl-8 pr-8 py-2 rounded-md dark:bg-darkblue-300 text-darkgray-300' />
        <button onClick={() => setFilterCountry('')} className='absolute right-2 top-2/4 -translate-y-1/2 rounded-full bg-slate-900 w-5 h-5 leading-none
        text-white'
          style={filterCountry ? {display: 'block'} : {display: 'none'}}>x</button>
      </div>
      <div>
        <Select
          REGIONS={REGIONS}
          filterRegion={filterRegion}
          setFilterRegion={setFilterRegion} />
      </div>
    </section>
  );
};

export default Search;