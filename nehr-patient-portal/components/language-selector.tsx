"use client";

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

export const LanguageSelector = () => {
  const handleChange = (newLocale: string) => {};

  return (
    <Select defaultValue="en" onValueChange={handleChange} value="en">
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a Language" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Language</SelectLabel>
          <SelectItem value="si">සිංහල</SelectItem>
          <SelectItem value="en">English</SelectItem>
          <SelectItem value="ta">தமிழ்</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
