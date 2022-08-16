const CountryDetails = ({country, getBorders}) => {
  return (
    <div className="mt-4 font-medium">
      {!country.tld ? null : (
        <h4>Top Level Domain: <span className="font-normal">{country.tld}</span></h4>
      )}
      {!country.currencies ? null : (
        <h4>Currencies: <span className="font-normal">{Object.values(country.currencies).map((money, i, arr) => (
          i !== arr.length - 1 ? `${money.name}, ` : `${money.name} (${money.symbol})`
        ))}</span>
        </h4>
      )
      }
      {!country.languages ? null : (
        <h4>Languages: <span className="font-normal">{Object.values(country.languages).sort().map((language, i, arr) => (
          i !== arr.length - 1 ? `${language}, ` : `${language}`
        ))}</span>
        </h4>
      )}
    </div>
  );
};

export default CountryDetails;