"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTranslation } from "react-i18next";
import { DASHBOARD } from "@/locales/namespaces";
import { TitleSeparator } from "@/components/title-separator";
import { Separator } from "@/components/ui/separator";

const formSchema = z.object({
  name: z
    .string()
    .min(2, "Must be at least 2 charactors")
    .max(50, "Must be at most 50 charactors"),
  gender: z.enum(["male", "female", "other"]),
  dateOfBirth: z.string().min(2, "Required"),
  maritalStatus: z.enum(["single", "married", "divorced", "widowed"]),
  nationalIdNumber: z
    .string()
    .min(10, "Must be at least 10 charactors")
    .max(12, "Must be at most 12 charactors"),
  passportNumber: z.string().max(8, "Must be 8 charactors").optional(),
  drivingLicenseNumber: z.string().max(12, "Must be 12 charactors").optional(),
  seniorCitizenNumber: z.string().max(12, "Must be 12 charactors").optional(),
  nationality: z.boolean().default(true),
  mobileNumber: z.string().length(10, "Must be 10 charactors"),
  email: z.string().email(),
  address: z
    .string()
    .min(2, "Must be at least 2 charactors")
    .max(200, "Must be at most 200 charactors"),
  gramaNiladariDivision: z
    .string()
    .min(2, "Must be at least 2 charactors")
    .max(50, "Must be at most 50 charactors"),
  occupation: z.string().max(50, "Must be at most 50 charactors").optional(),
  highestEducationLevel: z
    .string()
    .max(50, "Must be at most 50 charactors")
    .optional(),
  emergencyContactName: z
    .string()
    .min(2, "Must be at least 2 charactors")
    .max(50, "Must be at most 50 charactors"),
  emergencyContactAddress: z
    .string()
    .min(10, "Must be at least 10 charactors")
    .max(200, "Guardian Address must be at most 200 charactors"),
  emergencyContactMobileNumber: z.string().length(10, "Must be 10 charactors"),
  emergencyContactRelationship: z.enum(["father", "mother", "spouse", "other"]),
});

export const MyProfile = () => {
  const { t } = useTranslation(DASHBOARD);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      dateOfBirth: "",
      nationalIdNumber: "",
      passportNumber: "",
      drivingLicenseNumber: "",
      seniorCitizenNumber: "",
      nationality: true,
      mobileNumber: "",
      email: "",
      address: "",
      gramaNiladariDivision: "",
      occupation: "",
      highestEducationLevel: "",
      emergencyContactName: "",
      emergencyContactAddress: "",
      emergencyContactMobileNumber: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {/* Demographics */}
        <TitleSeparator title={t("demographics")} />
        <div className="grid md:grid-cols-3 gap-5 mt-5">
          <div className="flex flex-col text-sm gap-y-1.5">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("name")}</FormLabel>
                  <FormControl>
                    <Input placeholder={t("name")} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col text-sm gap-y-1.5">
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("gender")}</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="focus-visible:ring-2">
                        <SelectValue placeholder={t("gender")} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="male">{t("male")}</SelectItem>
                      <SelectItem value="female">{t("female")}</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col text-sm gap-y-1.5">
            <FormField
              control={form.control}
              name="dateOfBirth"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("dateOfBirth")}</FormLabel>
                  <FormControl>
                    <Input {...field} type="date" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col text-sm gap-y-1.5">
            <FormField
              control={form.control}
              name="maritalStatus"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("maritalStatus")}</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="focus-visible:ring-2">
                        <SelectValue placeholder={t("maritalStatus")} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="single">{t("single")}</SelectItem>
                      <SelectItem value="married">{t("married")}</SelectItem>
                      <SelectItem value="divorced">{t("divorced")}</SelectItem>
                      <SelectItem value="widowed">{t("widowed")}</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <Separator className="sr-only" />

        {/* Identifiers */}
        <TitleSeparator title={t("identifiers")} />
        <div className="grid md:grid-cols-3 gap-5 mt-5">
          <div className="flex flex-col text-sm gap-y-1.5">
            <FormField
              control={form.control}
              name="nationalIdNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("nationalIdNumber")}</FormLabel>
                  <FormControl>
                    <Input placeholder={t("nationalIdNumber")} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col text-sm gap-y-1.5">
            <FormField
              control={form.control}
              name="passportNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("passportNumber")}</FormLabel>
                  <FormControl>
                    <Input placeholder={t("passportNumber")} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col text-sm gap-y-1.5">
            <FormField
              control={form.control}
              name="drivingLicenseNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("drivingLicenseNumber")}</FormLabel>
                  <FormControl>
                    <Input placeholder={t("drivingLicenseNumber")} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col text-sm gap-y-1.5">
            <FormField
              control={form.control}
              name="seniorCitizenNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("seniorCitizenNumber")}</FormLabel>
                  <FormControl>
                    <Input placeholder={t("seniorCitizenNumber")} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <Separator className="sr-only" />

        {/* Nationality */}
        <TitleSeparator title={t("nationality")} />
        <div className="mt-5">
          <FormField
            control={form.control}
            name="nationality"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center gap-x-2">
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="-translate-y-1">
                  <FormLabel className="text-sm cursor-pointer">
                    {t("sriLankan")}
                  </FormLabel>
                </div>
              </FormItem>
            )}
          />
        </div>
        <Separator className="sr-only" />

        {/* Contact Info */}
        <TitleSeparator title={t("contactInformation")} />
        <div className="grid md:grid-cols-3 gap-5 mt-5">
          <div className="flex flex-col text-sm gap-y-1.5">
            <FormField
              control={form.control}
              name="mobileNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("mobileNumber")}</FormLabel>
                  <FormControl>
                    <Input placeholder={t("mobileNumber")} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col text-sm gap-y-1.5">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("emailAddress")}</FormLabel>
                  <FormControl>
                    <Input placeholder={t("emailAddress")} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div>&nbsp;</div>
          <div className="flex flex-col text-sm gap-y-1.5 md:col-span-2">
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("address")}</FormLabel>
                  <FormControl>
                    <Input placeholder={t("address")} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col text-sm gap-y-1.5">
            <FormField
              control={form.control}
              name="gramaNiladariDivision"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("gramaNiladariDivision")}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t("gramaNiladariDivision")}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <Separator className="sr-only" />

        {/* Other */}
        <TitleSeparator title={t("other")} />
        <div className="space-y-5 md:max-w-[calc((100%-40px)/3)] mt-5">
          <div className="flex flex-col text-sm gap-y-1.5">
            <FormField
              control={form.control}
              name="occupation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("occupation")}</FormLabel>
                  <FormControl>
                    <Input placeholder={t("occupation")} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col text-sm gap-y-1.5">
            <FormField
              control={form.control}
              name="highestEducationLevel"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("highestEducationLevel")}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t("highestEducationLevel")}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <Separator className="sr-only" />

        {/* Emergency Contact Information */}
        <TitleSeparator title={t("emergencyContactInfo")} />
        <div className="grid md:grid-cols-3 gap-5 mt-5">
          <div className="flex flex-col text-sm gap-y-1.5">
            <FormField
              control={form.control}
              name="emergencyContactName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("name")}</FormLabel>
                  <FormControl>
                    <Input placeholder={t("name")} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col text-sm gap-y-1.5">
            <FormField
              control={form.control}
              name="emergencyContactAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("address")}</FormLabel>
                  <FormControl>
                    <Input placeholder={t("address")} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col text-sm gap-y-1.5">
            <FormField
              control={form.control}
              name="emergencyContactMobileNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("mobileNumber")}</FormLabel>
                  <FormControl>
                    <Input placeholder={t("mobileNumber")} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col text-sm gap-y-1.5">
            <FormField
              control={form.control}
              name="emergencyContactRelationship"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("relationship")}</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="focus-visible:ring-2">
                        <SelectValue placeholder={t("relationship")} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="father">{t("father")}</SelectItem>
                      <SelectItem value="mother">{t("mother")}</SelectItem>
                      <SelectItem value="spouse">{t("spouse")}</SelectItem>
                      <SelectItem value="other">{t("other")}</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <Separator className="sr-only" />

        <Button type="submit" className="mt-8">
          Submit
        </Button>
      </form>
    </Form>
  );
};
