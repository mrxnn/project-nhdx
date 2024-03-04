"use client";

import { Stepper } from "@/components/stepper";
import { PHNForm } from "./steps/phn-form";
import { DemographicsForm } from "./steps/demographics-form";
import { IdentifiersForm } from "./steps/identifiers-form";
import { ContactDetailsForm } from "./steps/contact-details-form";
import { WorkAndEducationForm } from "./steps/work-and-education-form";
import { EmergencyContactForm } from "./steps/emergency-contact-form";
import { PHNCard } from "./steps/phn-card";
import { OnboardingLayout } from "@/modules/onboarding-layout";
import { useGlobalStore } from "@/lib/store";

export default function OnboardingPage() {
  const step = useGlobalStore((s) => s.onboardingStep);
  const isLastStep = step === Object.keys(steps).length;

  return (
    <OnboardingLayout>
      <OnboardingLayout.Left>
        <p className="text-5xl font-bold tracking-tighter">
          {isLastStep ? "Welcome to NEHR" : "Setting up the patient portal"}
        </p>
        {isLastStep ? (
          <p className="text-slate-500 mt-4">
            The National Electronic Health Record (NEHR) is a key enabler for
            Sri Lanka's strategic vision of "One Patient, One Health Record".
          </p>
        ) : (
          <Stepper stepCount={6} activeStep={step} className="mt-10" />
        )}
      </OnboardingLayout.Left>
      <OnboardingLayout.Right>{steps[step as 1]}</OnboardingLayout.Right>
    </OnboardingLayout>
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
