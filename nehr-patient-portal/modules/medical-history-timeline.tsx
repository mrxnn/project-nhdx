import { subDays } from "date-fns";
import { useState } from "react";
import { DateRange } from "react-day-picker";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DateRangePicker } from "@/components/date-range-picker";
import { Timeline, Milestone } from "@/components/timeline";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer";

export const MedicalHistoryTimeline = () => {
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: subDays(new Date(), 6),
    to: new Date(),
  });

  return (
    <>
      <p className="text-slate-500 text-sm space-x-1 mb-4 lg:mb-8 mt-1 -translate-x-1 md:translate-x-0">
        <span className="hidden md:inline">Showing results from</span>
        <span>{dateRange?.from?.toDateString()}</span>
        <span>&mdash;</span>
        <span>{dateRange?.to?.toDateString()}</span>
      </p>

      <div className="flex items-center gap-x-2">
        <div className="lg:hidden mb-8">
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="outline">Encounter types</Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerFooter className="flex flex-col gap-y-0">
                {encounters.map((encounter, idx) => (
                  <div
                    className="items-center flex space-x-3 py-4 border-b last-of-type:border-b-0"
                    key={idx}>
                    <Checkbox id={"mb" + encounter.name} />
                    <label
                      htmlFor={"mb" + encounter.name}
                      className="text-sm font-medium cursor-pointer leading-none">
                      {encounter.name}
                    </label>
                  </div>
                ))}
                <DrawerClose asChild className="mt-4">
                  <Button variant="default" className="w-full">
                    Apply Filters
                  </Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
        <div className="md:hidden mb-8">
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="outline">Date range</Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerFooter className="flex flex-col gap-y-0 items-center">
                <DateRangePicker
                  value={dateRange}
                  onChange={setDateRange}
                  className=""
                />
                <DrawerClose asChild className="mt-4">
                  <Button variant="default" className="max-w-[316px] w-full">
                    Apply date range
                  </Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </div>

      <div className="flex">
        <div className="space-y-2.5 hidden lg:block">
          {encounters.map((encounter, idx) => (
            <div className="items-center flex space-x-2 select-none" key={idx}>
              <Checkbox id={encounter.name} />
              <label
                htmlFor={encounter.name}
                className="text-sm font-medium cursor-pointer leading-none">
                {encounter.name}
              </label>
            </div>
          ))}
        </div>

        <Timeline className="flex-1 lg:ml-20 md:mr-4 lg:mr-8">
          {data.map((milestone, idx) => (
            <Timeline.Milestone
              key={idx}
              milestone={milestone}
              last={idx === data.length - 1}
            />
          ))}
        </Timeline>

        <DateRangePicker
          className="self-start hidden md:block"
          value={dateRange}
          onChange={setDateRange}
        />
      </div>
    </>
  );
};

// sample data
const encounters = [
  {
    name: "Admissions",
    color: "#eab308",
  },
  {
    name: "HCL Screening",
    color: "#ef4444",
  },
  {
    name: "Lab Reports",
    color: "#06b6d4",
  },
  {
    name: "Appoinments",
    color: "#3b82f6",
  },
  {
    name: "OPD Encounters",
    color: "#10b981",
  },
  {
    name: "Vaccinations",
    color: "#d946ef",
  },
];

const data: Milestone[] = [
  {
    id: "1234",
    institution: "Sri Jayawardanepura Hospital",
    date: "2023-01-10",
    time: "14:31",
    encounter: encounters[3],
  },
  {
    id: "1234",
    institution: "General Hospital of Sri Lanka",
    date: "2023-01-10",
    time: "14:31",
    encounter: encounters[1],
  },
  {
    id: "1234",
    institution: "Asiri Central Hospital, Narahenpita",
    date: "2023-01-10",
    time: "14:31",
    encounter: encounters[2],
  },
  {
    id: "1234",
    institution: "KDU Hospital, Werahara",
    date: "2023-01-10",
    time: "14:31",
    encounter: encounters[3],
  },
  {
    id: "1234",
    institution: "Asiri Surgical Hospital, Kirimandala",
    date: "2023-01-10",
    time: "14:31",
    encounter: encounters[4],
  },
];
