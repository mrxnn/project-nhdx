"use client";

import * as z from "zod";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { CalendarIcon } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
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
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTranslation } from "react-i18next";
import { DASHBOARD } from "@/locales/namespaces";

const formSchema = z.object({
  name: z
    .string()
    .min(2, "Must be at least 2 charactors")
    .max(50, "Must be at most 50 charactors"),
  gender: z.enum(["male", "female", "other"]),
  dateOfBirth: z.date(),
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
  guardianName: z
    .string()
    .min(2, "Must be at least 2 charactors")
    .max(50, "Must be at most 50 charactors"),
  guardianAddress: z
    .string()
    .min(10, "Must be at least 10 charactors")
    .max(200, "Guardian Address must be at most 200 charactors"),
  guardianMobileNumber: z.string().length(10, "Must be at least 10 charactors"),
  relationship: z.enum(["father", "mother", "spouse", "other"]),
});

export const MyProfile = () => {
  const { t } = useTranslation(DASHBOARD);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
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
      guardianName: "",
      guardianAddress: "",
      guardianMobileNumber: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {/* Demographics */}
        <Heading>{t("demographics")}</Heading>
        <div className="grid md:grid-cols-3 gap-5">
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
                <FormItem className="flex flex-col">
                  <FormLabel>{t("dateOfBirth")}</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}>
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>{t("dateOfBirth")}</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
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
                      <SelectItem value="single">Single</SelectItem>
                      <SelectItem value="married">Married</SelectItem>
                      <SelectItem value="divorced">Divorced</SelectItem>
                      <SelectItem value="widowed">Widowed</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        {/* Identifiers */}
        <Heading>{t("identifiers")}</Heading>
        <div className="grid md:grid-cols-3 gap-5">
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

        {/* Nationality */}
        <Heading>{t("nationality")}</Heading>
        <div>
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

        {/* Contact Info */}
        <Heading>{t("contactInformation")}</Heading>
        <div className="grid md:grid-cols-3 gap-5">
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

        {/* Other */}
        <Heading>{t("other")}</Heading>
        <div className="space-y-5 md:max-w-[calc((100%-40px)/3)]">
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

        {/* Guardian Information */}
        <Heading>{t("emergencyContactInfo")}</Heading>
        <div className="grid md:grid-cols-3 gap-5">
          <div className="flex flex-col text-sm gap-y-1.5">
            <FormField
              control={form.control}
              name="guardianName"
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
              name="guardianAddress"
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
              name="guardianMobileNumber"
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
              name="relationship"
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

        <Button type="submit" className="mt-8">
          Submit
        </Button>
      </form>
    </Form>
  );
};

const Heading = ({ children }: { children: any }) => {
  return (
    <div className="flex items-center gap-x-2 mt-9 mb-5">
      <h3 className="font-bold text-xl">{children}</h3>
      <div className="h-px flex-1 bg-slate-200">&nbsp;</div>
    </div>
  );
};
