import { create } from "zustand";

type GlobalState = {
  onboardingFormData: any;
  setOnboardingFormData: (value: any) => void;
};

export const useGlobalStore = create<GlobalState>((set) => ({
  onboardingFormData: {},
  setOnboardingFormData: (data: any) => set({ onboardingFormData: data }),
}));
