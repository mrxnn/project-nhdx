import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRight } from "lucide-react";

export const ContactDetailsForm = () => {
  return (
    <div className="divide-y">
      <div className="pb-12 space-y-8">
        <p className="font-bold text-3xl tracking-tight">Contact Details</p>

        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-bold">
              Phone
            </label>
            <Input type="text" placeholder="Eg: John Doe" />
          </div>
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-bold">
              Email Address
            </label>
            <Input type="text" placeholder="Select" />
          </div>
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-bold">
              Resident Address
            </label>
            <Input type="text" placeholder="Select" />
          </div>
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-bold">
              Grama Niladari Division
            </label>
            <Input type="text" placeholder="Select" />
          </div>
        </div>

        <Button className="space-x-2">
          <span>Continue</span>
          <ChevronRight size={18} />
        </Button>
      </div>
    </div>
  );
};
