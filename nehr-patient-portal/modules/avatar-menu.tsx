"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { LuUsers } from "react-icons/lu";
import { signOut } from "next-auth/react";
import { useTranslation } from "react-i18next";

const PATIENT_HOST =
  "https://728bba0c-9f10-4bb1-833b-7a9ce5dbfac8-dev.e1-eu-north-azure.choreoapis.dev/mlsa/patient/lk-fhir-patient-api-803/v1.0";

const fetchPatient = async (idToken: string) => {
  const response = await fetch(`${PATIENT_HOST}/fhir/r4/Patient`, {
    headers: {
      Authorization: `Bearer ${idToken}`,
    },
  });

  const json = await response.json();
  return json;
};

export const AvatarMenu = () => {
  const { t } = useTranslation();
  const { data: auth } = useSession();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["patient", auth?.user.idToken],
    queryFn: () => fetchPatient(auth?.user.idToken!),
  });

  const user = data?.entry?.[0]?.resource;
  const firstName = user?.name?.[0]?.given?.[0];
  const lastName = user?.name?.[0]?.family;
  const initials = firstName?.[0] + lastName?.[0];

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="w-9 aspect-square rounded-full bg-black text-slate-50 text-sm font-bold tracking-tighter">
          {isLoading || isError ? "..." : initials}
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" sideOffset={12}>
          <DropdownMenuLabel>{t("myAccount")}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>{t("settings")}</DropdownMenuItem>
          <DropdownMenuItem onSelect={() => signOut()}>
            {t("signOut")}
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <LuUsers strokeWidth={2.5} />
              <span className="ml-2 mr-8">{t("switchProfile")}</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Profile 1</DropdownMenuItem>
                <DropdownMenuItem>Profile 2</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>More...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
