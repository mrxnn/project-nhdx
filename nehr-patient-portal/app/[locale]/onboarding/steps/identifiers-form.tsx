import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRight } from "lucide-react";

export const IdentifiersForm = () => {
  return (
    <div className="divide-y">
      <div className="pb-12 space-y-8">
        <p className="font-bold text-3xl tracking-tight">Identifiers</p>

        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-bold">
              National Id
            </label>
            <Input type="text" placeholder="Eg: 199523456788" />
          </div>
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-bold">
              Passport
            </label>
            <Input type="text" placeholder="Eg: 199523456788" />
          </div>
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-bold">
              Driving License
            </label>
            <Input type="text" placeholder="Eg: 199523456788" />
          </div>
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-bold">
              Senior Citizen No
            </label>
            <Input type="text" placeholder="Eg: 199523456788" />
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
