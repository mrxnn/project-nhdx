"use client";

import React, { useState } from "react";

import { format } from "date-fns";
import { DateRange, DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

export const DateRangePicker = () => {
  const defaultSelected: DateRange = {
    from: undefined,
    to: undefined,
  };

  const [range, setRange] = useState<DateRange | undefined>(defaultSelected);

  let footer = <p>Please pick the first day.</p>;
  if (range?.from) {
    if (!range.to) {
      footer = <p>{format(range.from, "PPP")}</p>;
    } else if (range.to) {
      footer = (
        <p>
          {format(range.from, "PP")} &mdash; {format(range.to, "PP")}
        </p>
      );
    }
  }

  return (
    <DayPicker
      className="border p-4 rounded-md -translate-y-4 text-sm"
      mode="range"
      captionLayout="dropdown-buttons"
      fromYear={1900}
      toYear={2025}
      footer={
        <div className="text-xs text-slate-600 p-2 text-center bg-slate-100 rounded-full mt-4">
          {footer}
        </div>
      }
      selected={range}
      onSelect={setRange}
    />
  );
};
