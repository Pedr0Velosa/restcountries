const CountryDefault = ({country}) => {
  return (
    <>
      {!country.subregion ? null : (
        <h4 className="font-medium">Native Name: <span className="font-normal">{country.name.official}</span></h4>
      )}
      <h4 className="font-medium">Population: <span className="font-normal">{country.population}</span></h4>
      <h4 className="font-medium">Region: <span className="font-normal">{country.region}</span></h4>
      {!country.subregion ? null : (
        <h4 className="font-medium">Sub Region: <span className="font-normal">{country.subregion}</span></h4>
      )}
      <h4 className="font-medium">Capital: <span className="font-normal">{country.capital}</span></h4>
    </>
  );
};

export default CountryDefault;