import { Grid } from "./grid";
import { PageParams } from "@/lib/types";
import { PHNForm } from "./steps/phn-form";
import { DemographicsForm } from "./steps/demographics-form";
import { IdentifiersForm } from "./steps/identifiers-form";
import { ContactDetailsForm } from "./steps/contact-details-form";
import { WorkAndEducationForm } from "./steps/work-and-education-form";
import { EmergencyContactForm } from "./steps/emergency-contact-form";
import { PHNCard } from "./steps/phn-card";

export default async function OnboardingPage({ searchParams }: PageParams) {
  if (!searchParams.step) throw new Error("Missing step param in URL");
  if (Array.isArray(searchParams.step)) throw new Error("Mutiple steps in URL");

  let isLastStep = false;
  if (searchParams.step === "phn-card") {
    isLastStep = true;
  }

  return (
    <Grid>
      <Grid.LeftSlice>
        <p className="text-5xl font-bold tracking-tighter">
          {isLastStep ? "Welcome to NEHR" : "Setting up the patient portal"}
        </p>
        {isLastStep && (
          <p className="text-slate-500 mt-4">
            The National Electronic Health Record (NEHR) is a key enabler for
            Sri Lanka's strategic vision of "One Patient, One Health Record".
          </p>
        )}
        {isLastStep || (
          <p className="text-slate-500 mt-4">{searchParams.step}</p>
        )}
      </Grid.LeftSlice>

      <Grid.RightSlice>
        {searchParams.step === "phn-form" && <PHNForm />}
        {searchParams.step === "demographics-form" && <DemographicsForm />}
        {searchParams.step === "identifiers-form" && <IdentifiersForm />}
        {searchParams.step === "contact-details-form" && <ContactDetailsForm />}
        {searchParams.step === "work-and-education-form" && (
          <WorkAndEducationForm />
        )}
        {searchParams.step === "emergency-contact-form" && (
          <EmergencyContactForm />
        )}
        {searchParams.step === "phn-card" && <PHNCard />}
      </Grid.RightSlice>
    </Grid>
  );
}
