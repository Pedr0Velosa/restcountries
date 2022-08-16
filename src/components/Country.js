import CountryDetails from './CountryDetails';
import CountryDefault from './CountryDefault';
import BorderCountry from './BorderCountry';

const Country = ({country, getBorders, getDetails}) => {

  return (
    !country ? null : (
      <>
        <div>
          <img src={country.flags.svg} alt='country flag' className='dark:shadow-darkblue-500' />
        </div>
        <div className='p-2 text-base grid gap-4 lg:grid-cols-2'>
          <h3 className='text-xl font-bold md:text-2xl col-span-full md:mt-4'>{country.name.common}</h3>
          <div>
            <CountryDefault country={country} />
          </div>
          <div>
            {!getDetails ? null : (
              <CountryDetails country={country} getBorders={getBorders} />
            )}
          </div>
          <div className='col-span-full	'>
            {!getBorders ? null : !country.borders ? (
              <h3 className="text-lg font-bold mb-4">No border countries</h3>) : (
              <>
                <h3 className="text-lg font-bold mb-4">Border Countries: </h3>
                <BorderCountry borders={country.borders} />
              </>
            )}
          </div>
        </div>
      </>
    )
  );
};

export default Country;