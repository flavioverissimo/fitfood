export default function Filter({ allData, filter, filterMenu }) {
  return (
    <nav>
      <div className="hidden md:flex md:items-center md:gap-12">
        <ul className=" flex flex-wrap gap-8">
          {allData.filterOptions.map((item) => (
            <li
              key={item.value}
              onClick={filter}
              className={`md:text-sm lg:text-base cursor-pointer border-b-2 ${
                filterMenu === item.value
                  ? " border-greenPrimary font-bold text-greenPrimary"
                  : " border-transparent font-normal"
              }`}
            >
              {item.value}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-2">
        <select
          className="text-xs bg-transparent md:hidden w-full text-gray-700 py-3 px-4 rounded  border-b-2 border-gray-500 shadow-lg focus:outline-none"
          id="grid-state"
          name="quantity"
          onChange={filter}
        >
          {allData.filterOptions.map((item) => (
            <option key={item.value} onClick={filter}>
              {item.value}
            </option>
          ))}
        </select>
      </div>
    </nav>
  );
}
