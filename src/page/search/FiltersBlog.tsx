import React from "react";
interface Props extends React.ComponentProps<"select"> {
  filterBy: SearchFilter;
  setFilterBy: React.Dispatch<React.SetStateAction<SearchFilter>>;
}

export const FiltersBlog = ({ filterBy, setFilterBy, ...rest }: Props) => {
  return (
    <div>
      <select
        {...rest}
        id="countries"
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        value={filterBy}
        onChange={(e) => setFilterBy(e.target.value as Props["filterBy"])}
      >
        <option selected value={""}>
          Choose a country
        </option>
        <option value="latest">Latest </option>
        <option value="oldest">Oldest</option>
        <option value="most-liked">Most Liked</option>
        <option value="most-commented">Most Commented</option>
      </select>
    </div>
  );
};
