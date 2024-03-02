"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useGlobalStore } from "@/lib/store";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  phone: z.string(),
  email: z.string().email(),
  address: z.string(),
  gramaNiladariDivision: z.string(),
});

export const ContactDetailsForm = () => {
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

    router.push("?step=5");
  };

  return (
    <div className="divide-y">
      <form className="pb-12 space-y-8" onSubmit={handleSubmit(onSubmit)}>
        <p className="font-bold text-3xl tracking-tight">Contact Details</p>

        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-bold">
              Phone
            </label>
            <Input
              type="text"
              id="phone"
              placeholder="Eg: John Doe"
              {...register("phone")}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-bold">
              Email Address
            </label>
            <Input
              type="email"
              id="email"
              placeholder="Select"
              {...register("email")}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="address" className="text-sm font-bold">
              Resident Address
            </label>
            <Input
              type="text"
              id="address"
              placeholder="Select"
              {...register("address")}
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="gramaNiladariDivision"
              className="text-sm font-bold">
              Grama Niladari Division
            </label>
            <Input
              type="text"
              id="gramaNiladariDivision"
              placeholder="Select"
              {...register("gramaNiladariDivision")}
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
