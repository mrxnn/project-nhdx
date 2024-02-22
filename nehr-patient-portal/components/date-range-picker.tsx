"use client";

import { format } from "date-fns";
import { DateRange, DayPicker } from "react-day-picker";
import { cn } from "@/lib/utils";
import "react-day-picker/dist/style.css";
import "../styles/date-range.css";

type Props = {
  value: DateRange | undefined;
  onChange: (range: DateRange | undefined) => void;
  className?: string;
};

export const DateRangePicker = ({ onChange, value, className }: Props) => {
  let footer = <p>Please pick the first day.</p>;
  if (value?.from) {
    if (!value.to) {
      footer = <p>{format(value.from, "PPP")}</p>;
    } else if (value.to) {
      footer = (
        <p>
          {format(value.from, "PP")} &mdash; {format(value.to, "PP")}
        </p>
      );
    }
  }

  return (
    <DayPicker
      ISOWeek
      showOutsideDays
      className={cn("border p-4 rounded-md text-sm", className)}
      mode="range"
      captionLayout="dropdown-buttons"
      fromYear={1900}
      toYear={2025}
      footer={
        <div className="text-xs text-slate-600 p-2 text-center bg-slate-100 rounded-full mt-4">
          {footer}
        </div>
      }
      selected={value}
      onSelect={onChange}
    />
  );
};
