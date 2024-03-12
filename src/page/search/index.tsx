import { Cross, SearchIcon } from "@/components";
import { useDebounce, usePortal } from "@/hooks";
import { searchResponse } from "@/types";
import { axiosInstance } from "@/utils";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { FiltersBlog } from "./FiltersBlog";
import { SearchContent } from "./SearchIContent";
import { SearchInput } from "./SearchInput";
import { SuggestSearch } from "./SuggestSearch";

export const SearchBlogs = () => {
  const [searchValue, setSearchValue] = useState("");
  const [filterBy, setFilterBy] = useState<SearchFilter>("");

  const delaySearchedValue = useDebounce(searchValue, 500);
  const { renter, setIsShowPortal } = usePortal();

  const { data, error } = useQuery({
    queryKey: ["search", delaySearchedValue],
    queryFn: async () =>
      axiosInstance.get<searchResponse>(`/search?q=${delaySearchedValue}`),
    enabled: !!searchValue,
  });

  return (
    <>
      <div onClick={() => setIsShowPortal((pre) => !pre)}>
        <p className="flex cursor-pointer items-center gap-2 text-slate-800 dark:text-slate-100">
          <SearchIcon />
          <span>Search</span>
        </p>
      </div>
      {renter(
        <>
          <div className="flex w-full items-center justify-between">
            <h3 className="my-2 pl-2 text-xl font-bold text-slate-800 dark:text-slate-400">
              Search for Your Desire Blogs
            </h3>
            <span
              className="cursor-pointer rounded-md  bg-slate-200 p-2 transition-all hover:bg-slate-700 dark:bg-slate-800"
              onClick={() => setIsShowPortal((pre) => !pre)}
            >
              <Cross className="cursor-pointer" />
            </span>
          </div>
          <div className="flex w-full  items-center  gap-x-2">
            <SearchInput
              className="my-10 flex-1"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />

            <FiltersBlog filterBy={filterBy} setFilterBy={setFilterBy} />
          </div>

          {delaySearchedValue && (
            <SearchContent
              data={data}
              error={error}
              SearchFilter={filterBy}
              filterBy={filterBy}
              setIsShowPortal={setIsShowPortal}
            />
          )}

          {!delaySearchedValue && <SuggestSearch />}
        </>,
      )}
    </>
  );
};
