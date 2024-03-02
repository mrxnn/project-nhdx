import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PlusIcon } from "lucide-react";

export const PHNForm = ({ onSubmit }: { onSubmit?: (value: any) => void }) => {
  return (
    <div className="divide-y">
      <div className="pb-12">
        <p className="font-bold text-3xl mb-2 tracking-tight">
          Already have a PHN
        </p>
        <p className="text-slate-500 mb-3">
          Enter your personal healthcare number if you already have one
        </p>
        <Input type="text" placeholder="Eg: 123456" className="mb-4" />
        <Button asChild>
          <Link href="?step=demographics-form">Continue</Link>
        </Button>
      </div>

      <div className="pt-10">
        <p className="font-bold text-3xl mb-2 tracking-tight">
          Don't have a PHN
        </p>
        <p className="text-slate-500 mb-4">
          If you don't already have a PHN, you can generate one by pressing the
          generate button
        </p>
        <Button className="space-x-2">
          <PlusIcon size={18} />
          <span>Generate New PHN</span>
        </Button>
      </div>
    </div>
  );
};
