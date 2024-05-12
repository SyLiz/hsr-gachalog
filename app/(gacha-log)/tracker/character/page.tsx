"use client";
import React from "react";
import { ImportButton, SummarySector } from "@/components/custom";
import { DataTable } from "@/components/custom/LogTable/data-table";
import { columns } from "@/components/custom/LogTable/columns";
import { Log } from "@/models/GachaLog";
import { useGachaLog } from "@/lib/Context/gacha-logs-provider";

async function getData(): Promise<Log[]> {
  // Fetch data from your API here.
  return [];
}

interface Props {}

function TrackerCharacter(props: Props) {
  const { logs, setLogs } = useGachaLog();

  return (
    <div className="flex flex-col flex-grow  bg-white w-full ">
      <ImportButton></ImportButton>
      <div className=" self-center">
        <h1>Character Event warp</h1>
      </div>
      <SummarySector data={logs.character}></SummarySector>
      <div className="size-[16px]"></div>
      {/* <div className=" flex flex-col justify-center bg-red-100 p-t-[32px] rounded-[10px]">
        <div className=" self-center">Recent 5* warp</div>
        <ScrollMenuComponent />
      </div>
      <div className="size-[16px]"></div> */}
      <div>
        <DataTable columns={columns} data={logs.character} />
      </div>
    </div>
  );
}

export default TrackerCharacter;
