import type React from "react";
import { ArrowUpDown } from "lucide-react";

type Props = {
  isSortedByTitle: boolean;
  setIsSortedByTitle: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function SortByTitleButton({
  setIsSortedByTitle,
  isSortedByTitle,
}: Props) {
  return (
    <button
      onClick={() => setIsSortedByTitle((prev) => !prev)}
      className={
        isSortedByTitle
          ? "flex bg-purple-500 py-2 md:py-0 justify-center text-white items-center rounded-lg md:rounded-xl gap-2 px-4 self-stretch border-2 border-purple-500"
          : "flex items-center py-2 md:py-0 rounded-lg md:rounded-xl gap-2 justify-center px-4 self-stretch border-2 border-gray-300"
      }
    >
      <ArrowUpDown className="stroke-1" />
      <p className="whitespace-nowrap">Sort by Title</p>
    </button>
  );
}
