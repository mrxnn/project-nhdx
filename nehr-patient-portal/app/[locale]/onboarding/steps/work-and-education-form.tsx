"use client";

import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRight } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useGlobalStore } from "@/lib/store";

const formSchema = z.object({
  occupation: z.string(),
  highestEducationLevel: z.string(),
});

export const WorkAndEducationForm = () => {
  const { onboardingFormData, setOnboardingFormData, setOnboardingStep } =
    useGlobalStore();

  const { register, handleSubmit } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setOnboardingFormData({
      ...onboardingFormData,
      ...values,
    });

    setOnboardingStep(6);
  };

  return (
    <div className="divide-y">
      <form className="pb-12" onSubmit={handleSubmit(onSubmit)}>
        <p className="font-bold text-3xl tracking-tight mb-7">
          Work & Education
        </p>
        <div className="space-y-2 mb-4">
          <label htmlFor="occupation" className="text-sm font-bold">
            Occupation
          </label>
          <Input
            autoFocus
            type="text"
            id="occupation"
            placeholder="Eg: John Doe"
            {...register("occupation")}
          />
        </div>
        <div className="space-y-2 mb-4">
          <label htmlFor="highestEducationLevel" className="text-sm font-bold">
            Highest Education Level
          </label>
          <Input
            type="text"
            id="highestEducationLevel"
            placeholder="Select"
            {...register("highestEducationLevel")}
          />
        </div>
        <Button className="space-x-2" type="submit">
          <span>Continue</span>
          <ChevronRight size={18} />
        </Button>
      </form>
    </div>
  );
};
