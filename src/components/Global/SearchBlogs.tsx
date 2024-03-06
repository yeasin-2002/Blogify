import searchIcon from '@/assets/icons/search.svg';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/PopOver';

export const SearchBlogs = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <p className="flex cursor-pointer items-center gap-2">
          <img src={searchIcon} alt="Search" />
          <span>Search</span>
        </p>
      </PopoverTrigger>
      <PopoverContent>
        <div className="w-72 rounded-lg bg-white p-4 shadow-lg">
          <form>
            <input
              type="text"
              placeholder="Search blogs"
              className="w-full rounded-md border-none p-2"
            />
          </form>
        </div>
      </PopoverContent>
    </Popover>
  );
};
