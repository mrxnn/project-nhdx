"use client";

import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useGlobalStore } from "@/lib/store";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const formSchema = z.object({
  emergencyContactName: z.string(),
  emergencyContactAddress: z.string(),
  emergencyContactPhone: z.string(),
  emergencyContactRelationship: z.string(),
});

export const EmergencyContactForm = () => {
  const router = useRouter();
  const { onboardingFormData, setOnboardingFormData } = useGlobalStore();
  const { register, handleSubmit } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setOnboardingFormData({
      ...onboardingFormData,
      ...values,
    });

    router.push("?step=7");
  };

  return (
    <div className="divide-y">
      <form className="pb-12 space-y-8" onSubmit={handleSubmit(onSubmit)}>
        <p className="font-bold text-3xl tracking-tight mb-7">
          Emergency Contact
        </p>

        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-bold">
              Name
            </label>
            <Input
              type="text"
              id="name"
              placeholder="Eg: John Doe"
              {...register("emergencyContactName")}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="address" className="text-sm font-bold">
              Address
            </label>
            <Input
              type="text"
              id="address"
              placeholder="Select"
              {...register("emergencyContactAddress")}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-bold">
              Phone
            </label>
            <Input
              type="text"
              id="phone"
              placeholder="Select"
              {...register("emergencyContactPhone")}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="relationship" className="text-sm font-bold">
              Relationship
            </label>
            <Input
              type="text"
              id="relationship"
              placeholder="Select"
              {...register("emergencyContactRelationship")}
            />
          </div>
        </div>

        <Button className="space-x-2" type="submit">
          <span>Finish</span>
          <ChevronRight size={18} />
        </Button>
      </form>
    </div>
  );
};
