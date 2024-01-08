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
            placeholder="Name"
            className="px-3 py-2 border border-slate-200 rounded-md"
          />
        </div>
        <div className="flex flex-col text-sm gap-y-1.5">
          <label htmlFor="gender">Gender</label>
          <input
            type="text"
            name="gender"
            placeholder="Gender"
            className="px-3 py-2 border border-slate-200 rounded-md"
          />
        </div>
        <div className="flex flex-col text-sm gap-y-1.5">
          <label htmlFor="date-of-birth">Date of Birth</label>
          <input
            type="text"
            name="date-of-birth"
            placeholder="Date of Birth"
            className="px-3 py-2 border border-slate-200 rounded-md"
          />
        </div>
        <div className="flex flex-col text-sm gap-y-1.5">
          <label htmlFor="marital-status">Marital Status</label>
          <input
            type="text"
            name="marital-status"
            placeholder="Marital Status"
            className="px-3 py-2 border border-slate-200 rounded-md"
          />
        </div>
      </div>

      {/* Identifiers */}
      <Heading>Identifiers</Heading>
      <div className="grid md:grid-cols-3 gap-5">
        <div className="flex flex-col text-sm gap-y-1.5">
          <label htmlFor="national-id-number">National ID Number</label>
          <input
            type="text"
            name="national-id-number"
            placeholder="NIC"
            className="px-3 py-2 border border-slate-200 rounded-md"
          />
        </div>
        <div className="flex flex-col text-sm gap-y-1.5">
          <label htmlFor="passport-number">Passport Number</label>
          <input
            type="text"
            name="passport number"
            placeholder="Passport Number"
            className="px-3 py-2 border border-slate-200 rounded-md"
          />
        </div>
        <div className="flex flex-col text-sm gap-y-1.5">
          <label htmlFor="driving-license-number">Driving License Number</label>
          <input
            type="text"
            name="driving-license-number"
            placeholder="Driving License Number"
            className="px-3 py-2 border border-slate-200 rounded-md"
          />
        </div>
        <div className="flex flex-col text-sm gap-y-1.5">
          <label htmlFor="senior-cityzen-number">Senior Citizen Number</label>
          <input
            type="text"
            name="senior-cityzen-number"
            placeholder="Senior Citizen Number"
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

      {/* Contact Info */}
      <Heading>Contact Information</Heading>
      <div className="grid md:grid-cols-3 gap-5">
        <div className="flex flex-col text-sm gap-y-1.5">
          <label htmlFor="mobile-number">Mobile Number</label>
          <input
            type="text"
            name="mobile-number"
            placeholder="Mobile Number"
            className="px-3 py-2 border border-slate-200 rounded-md"
          />
        </div>
        <div className="flex flex-col text-sm gap-y-1.5">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="px-3 py-2 border border-slate-200 rounded-md"
          />
        </div>
        <div>&nbsp;</div>
        <div className="flex flex-col text-sm gap-y-1.5 md:col-span-2">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            placeholder="Address"
            className="px-3 py-2 border border-slate-200 rounded-md"
          />
        </div>
        <div className="flex flex-col text-sm gap-y-1.5">
          <label htmlFor="grama-niladari-division">
            Grama Niladari Division
          </label>
          <input
            type="text"
            name="grama-niladari-division"
            placeholder="Grama Niladari Division"
            className="px-3 py-2 border border-slate-200 rounded-md"
          />
        </div>
      </div>

      {/* Other */}
      <Heading>Other</Heading>
      <div className="space-y-5 md:max-w-[calc((100%-40px)/3)]">
        <div className="flex flex-col text-sm gap-y-1.5">
          <label htmlFor="occupation">Occupation</label>
          <input
            type="text"
            name="occupation"
            placeholder="Occupation"
            className="px-3 py-2 border border-slate-200 rounded-md"
          />
        </div>
        <div className="flex flex-col text-sm gap-y-1.5">
          <label htmlFor="highest-education-level">
            Highest Education Level
          </label>
          <input
            type="text"
            name="highest-education-level"
            placeholder="Highest Education Level"
            className="px-3 py-2 border border-slate-200 rounded-md"
          />
        </div>
      </div>

      {/* Guardian Information */}
      <Heading>Guardian Information</Heading>
      <div className="grid md:grid-cols-3 gap-5">
        <div className="flex flex-col text-sm gap-y-1.5">
          <label htmlFor="guardian-name">Name</label>
          <input
            type="text"
            name="guardian-name"
            placeholder="Name"
            className="px-3 py-2 border border-slate-200 rounded-md"
          />
        </div>
        <div className="flex flex-col text-sm gap-y-1.5">
          <label htmlFor="guardian-address">Address</label>
          <input
            type="text"
            name="guardian-address"
            placeholder="Address"
            className="px-3 py-2 border border-slate-200 rounded-md"
          />
        </div>
        <div className="flex flex-col text-sm gap-y-1.5">
          <label htmlFor="guardian-mobile-number">Telephone Number</label>
          <input
            type="text"
            name="guardian-mobile-number"
            placeholder="Telephone Number"
            className="px-3 py-2 border border-slate-200 rounded-md"
          />
        </div>
        <div className="flex flex-col text-sm gap-y-1.5">
          <label htmlFor="relationship">Relationship</label>
          <input
            type="text"
            name="relationship"
            placeholder="Relationship"
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
