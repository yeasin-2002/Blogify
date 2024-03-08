import searchIcon from "@/assets/icons/search.svg";
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

  const { data } = useQuery({
    queryKey: ["search", delaySearchedValue],
    queryFn: async () =>
      axiosInstance.get<searchResponse>(`/search?q=${delaySearchedValue}`),
    enabled: !!searchValue,
  });

  return (
    <div
      title="Search Blogs"
      // className="m-10 mx-auto my-2 size-11/12 rounded-lg  border border-slate-600/50   bg-slate-900  p-4  text-xl font-bold text-slate-400 shadow-lg shadow-slate-400/10"
    >
      <div onClick={() => setIsShowPortal((pre) => !pre)}>
        <p className="flex cursor-pointer items-center gap-2">
          <img src={searchIcon} alt="Search" />
          <span>Search</span>
        </p>
      </div>
      {renter(
        <div className="   my-2 size-11/12  w-screen  rounded-lg  border border-slate-600/50   bg-slate-900  p-4  text-xl font-bold text-slate-400 shadow-lg shadow-slate-400/10">
          <SearchInput
            className="my-10"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          {data && data?.data?.data ? (
            <SearchContent data={data?.data?.data} />
          ) : (
            <SuggestSearch />
          )}
        </div>,
      )}
    </div>
  );
};
