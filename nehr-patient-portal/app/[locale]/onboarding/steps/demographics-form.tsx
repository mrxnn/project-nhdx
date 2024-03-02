"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { useGlobalStore } from "@/lib/store";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  gender: z.enum(["Male", "Female"]),
  maritalStatus: z.enum(["Single", "Married"]),
  dateOfBirth: z.string().min(1),
  nationality: z.string(),
});

export const DemographicsForm = () => {
  const router = useRouter();
  const { onboardingFormData, setOnboardingFormData } = useGlobalStore();
  const { register, handleSubmit } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      gender: "Male",
      maritalStatus: "Single",
      nationality: "Sri Lankan",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setOnboardingFormData({
      ...onboardingFormData,
      ...values,
    });

    router.push("?step=3");
  };

  return (
    <div className="divide-y">
      <form className="pb-12 space-y-8" onSubmit={handleSubmit(onSubmit)}>
        <p className="font-bold text-3xl tracking-tight">Demographics</p>

        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-bold">
              Name
            </label>
            <Input
              type="text"
              id="name"
              placeholder="Eg: John Doe"
              {...register("name")}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="gender" className="text-sm font-bold">
              Gender
            </label>
            <Input
              type="text"
              id="gender"
              placeholder="Select"
              {...register("gender")}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="marital-status" className="text-sm font-bold">
              Marital Status
            </label>
            <Input
              type="text"
              id="marital-status"
              placeholder="Select"
              {...register("maritalStatus")}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="dob" className="text-sm font-bold">
              Date of Birth
            </label>
            <Input
              type="text"
              id="dob"
              placeholder="Select"
              {...register("dateOfBirth")}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="nationality" className="text-sm font-bold">
              Nationality
            </label>
            <Input
              type="text"
              id="nationality"
              placeholder="Select"
              {...register("nationality")}
            />
          </div>
        </div>

        <Button className="space-x-2">
          <span>Continue</span>
          <ChevronRight size={18} />
        </Button>
      </form>
    </div>
  );
};
