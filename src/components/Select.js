const Select = ({REGIONS, filterRegion, setFilterRegion}) => {
  return (
    <select
      name={'region'}
      value={filterRegion}
      className='text-slate-500 rounded-md 
      shadow shadow-gray-300
      dark:bg-darkblue-300
      dark:shadow-darkblue-500
      px-4 py-2'
      onChange={(e) => setFilterRegion(e.target.value)}
    >
      <option value={''} disabled>Filter By Region</option>
      {REGIONS.map(region => (
        <option key={region} value={region}>{region}</option>
      ))}
    </select>
  );
};

export default Select;