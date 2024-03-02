import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRight } from "lucide-react";

export const EmergencyContactForm = () => {
  return (
    <div className="divide-y">
      <div className="pb-12 space-y-8">
        <p className="font-bold text-3xl tracking-tight mb-7">
          Emergency Contact
        </p>

        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-bold">
              Name
            </label>
            <Input type="text" placeholder="Eg: John Doe" />
          </div>
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-bold">
              Address
            </label>
            <Input type="text" placeholder="Select" />
          </div>
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-bold">
              Phone
            </label>
            <Input type="text" placeholder="Select" />
          </div>
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-bold">
              Relationship
            </label>
            <Input type="text" placeholder="Select" />
          </div>
        </div>

        <Button className="space-x-2">
          <span>Finish</span>
          <ChevronRight size={18} />
        </Button>
      </div>
    </div>
  );
};
