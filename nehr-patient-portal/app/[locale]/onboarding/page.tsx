import { Grid } from "./grid";
import { PageParams } from "@/lib/types";
import { PHNForm } from "./steps/phn-form";
import { DemographicsForm } from "./steps/demographics-form";
import { IdentifiersForm } from "./steps/identifiers-form";
import { ContactDetailsForm } from "./steps/contact-details-form";
import { WorkAndEducationForm } from "./steps/work-and-education-form";
import { EmergencyContactForm } from "./steps/emergency-contact-form";
import { PHNCard } from "./steps/phn-card";
import { Stepper } from "@/components/stepper";

export default async function OnboardingPage({ searchParams }: PageParams) {
  if (!searchParams.step) throw new Error("Missing step param in URL");
  if (Array.isArray(searchParams.step)) throw new Error("Mutiple steps in URL");

  let isLastStep = false;
  if (searchParams.step === "phn-card") {
    isLastStep = true;
  }

  return (
    <Grid>
      <Grid.Left>
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
          <Stepper
            stepCount={6}
            activeStep={getStep(searchParams.step).id}
            className="mt-10"
          />
        )}
      </Grid.Left>

      <Grid.Right>{getStep(searchParams.step).component}</Grid.Right>
    </Grid>
  );
}

const getStep = (stepName: string) => {
  let idx = 1;
  let component = <div />;

  switch (stepName) {
    case "phn-form":
      idx = 1;
      component = <PHNForm />;
      break;

    case "demographics-form":
      idx = 2;
      component = <DemographicsForm />;
      break;

    case "identifiers-form":
      idx = 3;
      component = <IdentifiersForm />;
      break;

    case "contact-details-form":
      idx = 4;
      component = <ContactDetailsForm />;
      break;

    case "work-and-education-form":
      idx = 5;
      component = <WorkAndEducationForm />;
      break;

    case "emergency-contact-form":
      idx = 6;
      component = <EmergencyContactForm />;
      break;

    case "phn-card":
      component = <PHNCard />;
      break;

    default:
      throw new Error("Unknown Step");
  }

  return {
    id: idx,
    component,
  };
};
