import {Link} from "react-router-dom";
import {useState, useEffect} from "react";
import {useFetchedData} from "../hooks/useFetchedData";

const BorderCountry = ({borders}) => {
  const [countries] = useFetchedData(process.env.REACT_APP_BORDER_COUNTRY_URL);
  const [status, setStatus] = useState(false);
  const [borderList, setBorderList] = useState([]);

  useEffect(() => {
    setStatus(true);
  }, [countries]);

  useEffect(() => {
    if (!status) return;
    setBorderList([]);
    borders.map(border => (
      countries.filter(country => (
        country.cca3.includes(border)
      )).map((borderVal) => setBorderList(prevArray => [...prevArray, borderVal]))
    ));
  }, [status, countries, borders]);

  return (
    <ul className="flex flex-wrap gap-4 mb-16">
      {!status ? null : (
        borderList.map(border => (
          <li
            key={border.name.common}
            className='font-normal shadow shadow-gray-500 dark:shadow-darkblue-500'>
            <Link
              to={`/details/${border.name.common}/${border.ccn3}`}
              className='px-4 py-1 block'>
              {border.name.common}
            </Link>
          </li>
        ))
      )}
    </ul>
  );
};

export default BorderCountry;
