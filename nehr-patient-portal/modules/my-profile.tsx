import { ReactNode } from "react";
import { Switch } from "@/components/ui/switch";

export const MyProfile = () => {
  return (
    <div>
      {/* Demographics */}
      <Heading>Demographics</Heading>
      <div className="grid md:grid-cols-3 gap-5">
        <div className="flex flex-col text-sm gap-y-1.5">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Janith Silva"
            className="px-3 py-2 border border-slate-200 rounded-md"
          />
        </div>
        <div className="flex flex-col text-sm gap-y-1.5">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Janith Silva"
            className="px-3 py-2 border border-slate-200 rounded-md"
          />
        </div>
        <div className="flex flex-col text-sm gap-y-1.5">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Janith Silva"
            className="px-3 py-2 border border-slate-200 rounded-md"
          />
        </div>
        <div className="flex flex-col text-sm gap-y-1.5">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Janith Silva"
            className="px-3 py-2 border border-slate-200 rounded-md"
          />
        </div>
      </div>

      {/* Identifiers */}
      <Heading>Identifiers</Heading>
      <div className="grid md:grid-cols-3 gap-5">
        <div className="flex flex-col text-sm gap-y-1.5">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Janith Silva"
            className="px-3 py-2 border border-slate-200 rounded-md"
          />
        </div>
        <div className="flex flex-col text-sm gap-y-1.5">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Janith Silva"
            className="px-3 py-2 border border-slate-200 rounded-md"
          />
        </div>
        <div className="flex flex-col text-sm gap-y-1.5">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Janith Silva"
            className="px-3 py-2 border border-slate-200 rounded-md"
          />
        </div>
        <div className="flex flex-col text-sm gap-y-1.5">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Janith Silva"
            className="px-3 py-2 border border-slate-200 rounded-md"
          />
        </div>
      </div>

      {/* Nationality */}
      <Heading>Nationality</Heading>
      <div className="flex items-center gap-x-2 text-sm">
        <Switch id="nationality" />
        <label htmlFor="nationality" className="cursor-pointer">
          Sri Lankan
        </label>
      </div>

      {/* Other */}
      <Heading>Other</Heading>
      <div className="space-y-5 md:max-w-[calc((100%-40px)/3)]">
        <div className="flex flex-col text-sm gap-y-1.5">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Janith Silva"
            className="px-3 py-2 border border-slate-200 rounded-md"
          />
        </div>
        <div className="flex flex-col text-sm gap-y-1.5">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Janith Silva"
            className="px-3 py-2 border border-slate-200 rounded-md"
          />
        </div>
      </div>

      {/* Guardian Information */}
      <Heading>Guardian Information</Heading>
      <div className="grid md:grid-cols-3 gap-5">
        <div className="flex flex-col text-sm gap-y-1.5">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Janith Silva"
            className="px-3 py-2 border border-slate-200 rounded-md"
          />
        </div>
        <div className="flex flex-col text-sm gap-y-1.5">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Janith Silva"
            className="px-3 py-2 border border-slate-200 rounded-md"
          />
        </div>
        <div className="flex flex-col text-sm gap-y-1.5">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Janith Silva"
            className="px-3 py-2 border border-slate-200 rounded-md"
          />
        </div>
        <div className="flex flex-col text-sm gap-y-1.5">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Janith Silva"
            className="px-3 py-2 border border-slate-200 rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

const Heading = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex items-center gap-x-2 mt-9 mb-5">
      <h3 className="font-bold text-xl">{children}</h3>
      <div className="h-px flex-1 bg-slate-200">&nbsp;</div>
    </div>
  );
};
