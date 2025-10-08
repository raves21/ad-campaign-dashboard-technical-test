import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { TCampaign } from "./types";

export function useCampaigns() {
  return useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      return data as TCampaign[];
    },
  });
}
