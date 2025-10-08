import { Search } from "lucide-react";
import type React from "react";

type Props = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

export default function SearchInput({ search, setSearch }: Props) {
  return (
    <form className="flex-grow relative w-full">
      <Search className="stroke-2 stroke-gray-500 size-5 absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-6" />
      <input
        value={search}
        onChange={(e) => setSearch(e.currentTarget.value)}
        type="text"
        placeholder="Search by title..."
        className="border-2 md:text-base w-full border-gray-300 py-4 pl-11 pr-3 rounded-xl focus:outline-purple-500"
      />
      <input type="submit" className="hidden" />
    </form>
  );
}
