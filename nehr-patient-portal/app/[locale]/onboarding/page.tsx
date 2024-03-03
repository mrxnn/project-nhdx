"use client";

import { Grid } from "./grid";
import { Stepper } from "@/components/stepper";
import { PHNForm } from "./steps/phn-form";
import { DemographicsForm } from "./steps/demographics-form";
import { IdentifiersForm } from "./steps/identifiers-form";
import { ContactDetailsForm } from "./steps/contact-details-form";
import { WorkAndEducationForm } from "./steps/work-and-education-form";
import { EmergencyContactForm } from "./steps/emergency-contact-form";
import { PHNCard } from "./steps/phn-card";
import { useGlobalStore } from "@/lib/store";
import { useScopedI18n } from "@/locales/client";

export default function OnboardingPage() {
  const { onboardingStep } = useGlobalStore();
  const isLastStep = onboardingStep === 7;
  const t = useScopedI18n("Onboarding");

  return (
    <Grid>
      <Grid.Left>
        <p className="text-5xl font-bold tracking-tighter">
          {isLastStep ? "Welcome to NEHR" : t("title")}
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
            activeStep={onboardingStep}
            className="mt-10"
          />
        )}
      </Grid.Left>
      <Grid.Right>{steps[onboardingStep as 1]}</Grid.Right>
    </Grid>
  );
}

const steps = {
  1: <PHNForm />,
  2: <DemographicsForm />,
  3: <IdentifiersForm />,
  4: <ContactDetailsForm />,
  5: <WorkAndEducationForm />,
  6: <EmergencyContactForm />,
  7: <PHNCard />,
};
