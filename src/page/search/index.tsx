import searchIcon from "@/assets/icons/search.svg";
import { Cross } from "@/components";
import { useDebounce, usePortal } from "@/hooks";
import { searchResponse } from "@/types";
import { axiosInstance } from "@/utils";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { SearchContent } from "./SearchIContent";
import { SearchInput } from "./SearchInput";
import { SuggestSearch } from "./SuggestSearch";

export const SearchBlogs = () => {
  const [searchValue, setSearchValue] = useState("");
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
        <p className="flex cursor-pointer items-center gap-2">
          <img src={searchIcon} alt="Search" />
          <span>Search</span>
        </p>
      </div>
      {renter(
        <>
          <div>
            <div className="flex items-center justify-between">
              <h3 className="my-2 pl-2 text-xl font-bold text-slate-400">
                Search for Your Desire Blogs
              </h3>
              <span
                className="cursor-pointer rounded-md  bg-slate-800 p-2 transition-all hover:bg-slate-700"
                onClick={() => setIsShowPortal((pre) => !pre)}
              >
                <Cross className="cursor-pointer" />
              </span>
            </div>
            <SearchInput
              className="my-10"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>

          {delaySearchedValue && <SearchContent data={data} error={error} />}

          {!delaySearchedValue && <SuggestSearch />}
        </>,
      )}
    </>
  );
};
