import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRight } from "lucide-react";

export const WorkAndEducationForm = () => {
  return (
    <div className="divide-y">
      <div className="pb-12">
        <p className="font-bold text-3xl tracking-tight mb-7">
          Work & Education
        </p>
        <div className="space-y-2 mb-4">
          <label htmlFor="name" className="text-sm font-bold">
            Occupation
          </label>
          <Input type="text" placeholder="Eg: John Doe" />
        </div>
        <div className="space-y-2 mb-4">
          <label htmlFor="name" className="text-sm font-bold">
            Highest Education Level
          </label>
          <Input type="text" placeholder="Select" />
        </div>
        <Button className="space-x-2">
          <span>Continue</span>
          <ChevronRight size={18} />
        </Button>
      </div>
    </div>
  );
};
