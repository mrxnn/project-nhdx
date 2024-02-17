import { DateRangePicker } from "@/components/date-range-picker";
import {
  Timeline,
  type Milestone,
  encounterTypes,
} from "@/components/timeline";

export const MedicalHistoryTimeline = () => {
  return (
    <div className="flex mt-10  border border-slate-200 rounded-lg p-7">
      <div className="space-y-2">
        {encounterTypes.map((type, idx) => (
          <div className="accent-blue-500 space-x-2" key={idx}>
            <input type="checkbox" id={type} className="cursor-pointer" />
            <label htmlFor={type} className="text-sm cursor-pointer">
              {type}
            </label>
          </div>
        ))}
      </div>

      <Timeline className="flex-1 ml-24 mr-8">
        {data.map((milestone, idx) => (
          <Timeline.Milestone
            key={idx}
            milestone={milestone}
            last={idx === data.length - 1}
          />
        ))}
      </Timeline>

      <div className="">
        <DateRangePicker />
      </div>
    </div>
  );
};

// sample data
const data: Milestone[] = [
  {
    id: "1234",
    institution: "Asiri Surgical Hospital",
    date: "2023-01-10",
    time: "14:31",
    encounterType: "OPD Encounters",
  },
  {
    id: "1234",
    institution: "General Hospital of Sri Lanka",
    date: "2023-01-10",
    time: "14:31",
    encounterType: "HCL Screening",
  },
  {
    id: "1234",
    institution: "Asiri Central Hospital",
    date: "2023-01-10",
    time: "14:31",
    encounterType: "Appoinments",
  },
  {
    id: "1234",
    institution: "KDU Hospital, Werahara",
    date: "2023-01-10",
    time: "14:31",
    encounterType: "Lab Reports",
  },
  {
    id: "1234",
    institution: "Asiri Surgical Hospital",
    date: "2023-01-10",
    time: "14:31",
    encounterType: "OPD Encounters",
  },
];
