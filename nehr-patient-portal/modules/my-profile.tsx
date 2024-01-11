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
        <Heading>Demographics</Heading>
        <div className="grid md:grid-cols-3 gap-5">
          <div className="flex flex-col text-sm gap-y-1.5">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Name" {...field} />
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
                  <FormLabel>Gender</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="focus-visible:ring-2">
                        <SelectValue placeholder="Gender" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
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
                  <FormLabel>Date of birth</FormLabel>
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
                            <span>Pick a date</span>
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
                  <FormLabel>Marital Status</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="focus-visible:ring-2">
                        <SelectValue placeholder="Marital Status" />
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
        <Heading>Identifiers</Heading>
        <div className="grid md:grid-cols-3 gap-5">
          <div className="flex flex-col text-sm gap-y-1.5">
            <FormField
              control={form.control}
              name="nationalIdNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>National ID Number</FormLabel>
                  <FormControl>
                    <Input placeholder="NIC" {...field} />
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
                  <FormLabel>Passport Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Passport Number" {...field} />
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
                  <FormLabel>Driving License Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Driving License Number" {...field} />
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
                  <FormLabel>Senior Citizen Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Senior Citizen Number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        {/* Nationality */}
        <Heading>Nationality</Heading>
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
                    Sri Lankan
                  </FormLabel>
                </div>
              </FormItem>
            )}
          />
        </div>

        {/* Contact Info */}
        <Heading>Contact Information</Heading>
        <div className="grid md:grid-cols-3 gap-5">
          <div className="flex flex-col text-sm gap-y-1.5">
            <FormField
              control={form.control}
              name="mobileNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mobile Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Mobile Number" {...field} />
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
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Email Address" {...field} />
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
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Address" {...field} />
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
                  <FormLabel>Grama Niladari Division</FormLabel>
                  <FormControl>
                    <Input placeholder="Grama Niladari Division" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        {/* Other */}
        <Heading>Other</Heading>
        <div className="space-y-5 md:max-w-[calc((100%-40px)/3)]">
          <div className="flex flex-col text-sm gap-y-1.5">
            <FormField
              control={form.control}
              name="occupation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Occupation</FormLabel>
                  <FormControl>
                    <Input placeholder="Occupation" {...field} />
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
                  <FormLabel>Highest Education Level</FormLabel>
                  <FormControl>
                    <Input placeholder="Highest Education Level" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        {/* Guardian Information */}
        <Heading>Guardian Information</Heading>
        <div className="grid md:grid-cols-3 gap-5">
          <div className="flex flex-col text-sm gap-y-1.5">
            <FormField
              control={form.control}
              name="guardianName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Name" {...field} />
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
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Address" {...field} />
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
                  <FormLabel>Mobile Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Mobile Number" {...field} />
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
                  <FormLabel>Relationship</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="focus-visible:ring-2">
                        <SelectValue placeholder="Relationship" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="father">Father</SelectItem>
                      <SelectItem value="mother">Mother</SelectItem>
                      <SelectItem value="spouse">Spouse</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
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
