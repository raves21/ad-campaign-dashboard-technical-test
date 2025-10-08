import { createFileRoute } from "@tanstack/react-router";
import type { TCampaign } from "../types";
import Campaign from "../components/Campaign";
import { useMemo, useState } from "react";
import { useCampaigns } from "../api";
import SortByTitleButton from "../components/SortByTitleButton";
import SearchInput from "../components/SearchInput";
import { Loader2 } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const { data, status } = useCampaigns();

  const [search, setSearch] = useState("");
  const [isSortedByTitle, setIsSortedByTitle] = useState(false);

  const foundCampaigns = useMemo(() => {
    if (!data) return [];

    let filtered: TCampaign[] = data;
    if (search) {
      filtered = data.filter((campaign) => {
        const matchesTitle = campaign.title.toLowerCase().includes(search);
        const matchesId = campaign.id.toString().includes(search);
        return matchesTitle || matchesId;
      });
    }

    if (isSortedByTitle) {
      filtered = [...filtered].sort((a, b) =>
        a.title.localeCompare(b.title, undefined, { sensitivity: "base" })
      );
    }

    return filtered;
  }, [search, data, isSortedByTitle]);

  if (status === "pending") {
    return (
      <div className="size-full flex items-center justify-center gap-4">
        <p className="text-2xl">Loading Campaigns</p>
        <Loader2 className="stroke-purple-500 animate-spin size-10" />
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="size-full w-full grid place-items-center">
        <p className="text-2xl">An error occured.</p>
      </div>
    );
  }

  if (data && foundCampaigns) {
    return (
      <div className="size-full flex flex-col gap-6 pt-12">
        <h1 className="text-2xl text-center md:text-3xl font-semibold">
          Advertising Campaigns
        </h1>
        <div className="flex flex-col md:flex-row gap-6 w-full items-center">
          <SearchInput search={search} setSearch={setSearch} />
          <SortByTitleButton
            isSortedByTitle={isSortedByTitle}
            setIsSortedByTitle={setIsSortedByTitle}
          />
        </div>
        {foundCampaigns.length !== 0 ? (
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-5 pb-12">
            {foundCampaigns.map((campaign) => (
              <Campaign key={campaign.id} campaign={campaign} />
            ))}
          </div>
        ) : (
          <div className="flex-grow text-base grid place-items-center">
            No results found.
          </div>
        )}
      </div>
    );
  }
}
