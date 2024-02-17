import { DateRangePicker } from "@/components/date-range-picker";
import {
  Timeline,
  type Milestone,
  encounterTypes,
} from "@/components/timeline";

export const MedicalHistoryTimeline = () => {
  return (
    <div className="flex">
      <div className="space-y-2.5">
        {encounterTypes.map((type, idx) => (
          <div className="flex items-center accent-blue-600" key={idx}>
            <input
              id={`filter-${type}`}
              type="checkbox"
              className="h-4 w-4 rounded border-slate-300 cursor-pointer"
            />
            <label
              htmlFor={`filter-${type}`}
              className="ml-3 min-w-0 flex-1 text-slate-600 text-sm font-medium cursor-pointer">
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

      <DateRangePicker className="self-start" />
    </div>
  );
};

// sample data
const data: Milestone[] = [
  {
    id: "1234",
    institution: "Sri Jayawardanepura Hospital",
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
    institution: "Asiri Central Hospital, Narahenpita",
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
    institution: "Asiri Surgical Hospital, Kirimandala",
    date: "2023-01-10",
    time: "14:31",
    encounterType: "OPD Encounters",
  },
];
