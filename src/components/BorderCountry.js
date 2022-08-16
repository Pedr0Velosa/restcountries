import {Link} from "react-router-dom";
import {useState, useEffect} from "react";

const BorderCountry = ({borders}) => {
  const [countries, setCountries] = useState([]);
  const [status, setStatus] = useState(false);
  const [borderList, setBorderList] = useState([]);

  useEffect(() => {
    const requestCountries = async () => {
      const res = await fetch(
        `https://restcountries.com/v3.1/all?fields=name,cca3,ccn3`
      );
      const json = await res.json();
      setCountries(json, setStatus(true));
    };
    requestCountries();
  }, []);
  useEffect(() => {
    if (!status) return;
    setBorderList([]);
    const getBorders = (borders) => {
      borders.map(border => (
        countries.filter(country => (
          country.cca3.includes(border)
        )).map((borderVal) => setBorderList(prevArray => [...prevArray, borderVal]))
      ));
    };
    getBorders(borders);
  }, [status, countries, borders]);

  return (
    <ul className="flex flex-wrap gap-4 mb-16">
      {!status ? null : (
        borderList.map(border => (
          <li key={border.name.common} className='font-normal shadow shadow-gray-500 dark:shadow-darkblue-500'>
            <Link to={`/details/${border.name.common}/${border.ccn3}`} className='px-4 py-1 block'>{border.name.common}</Link>
          </li>
        ))
      )}
    </ul>
  );
};

export default BorderCountry;
