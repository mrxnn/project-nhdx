import { create } from "zustand";

type GlobalState = {
  onboardingStep: number;
  setOnboardingStep: (value: number) => void;
  onboardingFormData: any;
  setOnboardingFormData: (value: any) => void;
};

export const useGlobalStore = create<GlobalState>((set) => ({
  onboardingStep: 1,
  setOnboardingStep: (value: number) => set({ onboardingStep: value }),
  onboardingFormData: {},
  setOnboardingFormData: (data: any) => set({ onboardingFormData: data }),
}));
