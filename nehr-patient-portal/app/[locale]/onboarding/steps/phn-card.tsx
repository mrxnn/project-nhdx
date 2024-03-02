import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export const PHNCard = () => {
  return (
    <div className="divide-y">
      <div className="pb-12">
        <p className="bg-slate-900 inline-block px-3 py-px rounded-lg mb-2">
          <span className="text-slate-100 font-bold">#123456</span>
        </p>
        <p className="font-bold text-3xl tracking-tight mb-2">
          Your PHN is generated
        </p>
        <p className="text-slate-500 mb-8">
          Explain what the PHN is and how it is used for, and some info about
          the artwork.
        </p>
        <Button className="space-x-2">
          <span>Go to dashboard</span>
          <ChevronRight size={18} />
        </Button>
      </div>
    </div>
  );
};
