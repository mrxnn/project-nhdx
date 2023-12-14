import React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function LanguageSelector() {
  return (
    <Select defaultValue="en">
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a Language" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Languages</SelectLabel>
          <SelectItem value="sin">Sinhala</SelectItem>
          <SelectItem value="en">English</SelectItem>
          <SelectItem value="tam">Tamil</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
