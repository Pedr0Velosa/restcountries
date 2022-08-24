import {useRef} from "react";

const Select = ({REGIONS, setFilterRegion}) => {
  const selectRef = useRef(null);
  return (
    <select
      name={'region'}
      ref={selectRef}
      className='text-slate-500 rounded-md 
      shadow shadow-gray-300
      dark:bg-darkblue-300
      dark:shadow-darkblue-500
      px-4 py-2'
      onChange={(e) => {
        selectRef.current = e.target.value;
        setFilterRegion(selectRef.current);
      }}
    >
      <option value={''} disabled>Filter By Region</option>
      {REGIONS.map(region => (
        <option key={region} value={region}>{region}</option>
      ))}
    </select>
  );
};

export default Select;