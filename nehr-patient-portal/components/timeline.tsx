"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { LuLandmark, LuChevronRight } from "react-icons/lu";

export const encounterTypes = [
  "Admissions",
  "HCL Screening",
  "Lab Reports",
  "Appoinments",
  "OPD Encounters",
  "Vaccinations",
] as const;

type EncounterType = (typeof encounterTypes)[number];

const EncounterTypeColors: Record<EncounterType, string> = {
  Admissions: "#eab308",
  "HCL Screening": "#ef4444",
  "Lab Reports": "#06b6d4",
  Appoinments: "#3b82f6",
  "OPD Encounters": "#10b981",
  Vaccinations: "#d946ef",
};

export type Milestone = {
  id: string;
  institution: string;
  date: string;
  time: string;
  encounterType: EncounterType;
};

export const Timeline = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <div className={className}>{children}</div>;
};

const Milestone = ({
  milestone,
  last,
}: {
  milestone: Milestone;
  last?: boolean;
}) => {
  return (
    <div className="flex gap-x-4 mb-2">
      <div className="flex flex-col items-center gap-y-2">
        <div
          className="w-7 h-7 flex justify-center items-center rounded-full text-white"
          style={{
            backgroundColor: EncounterTypeColors[milestone.encounterType],
          }}>
          <LuLandmark size={16} />
        </div>
        {!last && <div className="w-px bg-slate-200 flex-1" />}
      </div>

      <div
        className={cn(
          "w-full border border-slate-200 rounded-lg px-4 py-3 cursor-pointer hover:border-slate-300/80 hover:bg-slate-100 transition-all",
          !last && "mb-5"
        )}>
        <p className="mb-1 font-medium">{milestone.institution}</p>
        <div className="flex items-center text-sm gap-x-2 mb-1">
          <div className="flex items-center gap-x-0.5 text-slate-600">
            <p>{milestone.date},</p>
            <p>{milestone.time}</p>
          </div>
          <div
            className="w-1.5 aspect-square rounded-full -translate-y-[0.7px]"
            style={{
              backgroundColor: EncounterTypeColors[milestone.encounterType],
            }}
          />
          <div className="flex items-center gap-x-0.5">
            <p className="text-slate-600">{milestone.encounterType}</p>
          </div>
        </div>
        <p className="text-sm text-slate-600">#{milestone.id}</p>
      </div>
    </div>
  );
};

Timeline.Milestone = Milestone;
