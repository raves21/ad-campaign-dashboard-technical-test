import type { TCampaign } from "../types";

type Props = {
  campaign: TCampaign;
};

export default function Campaign({ campaign }: Props) {
  return (
    <div className="w-full p-6 border-2 flex flex-col gap-4 border-gray-300 rounded-xl">
      <p className="font-semibold text-base md:text-lg">{campaign.title}</p>
      <p className="text-gray-400">{campaign.body}</p>
      <div className="bg-gray-200 rounded-full py-1 w-[80px] grid place-items-center font-medium text-xs">
        USER: {campaign.userId}
      </div>
    </div>
  );
}
