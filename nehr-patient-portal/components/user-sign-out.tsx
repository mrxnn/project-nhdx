import { Button } from "./ui/button";
import { LogOutIcon } from "lucide-react";
import { signOut } from "next-auth/react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { useTranslation } from "react-i18next";

export const UserSignOut = () => {
  const { t } = useTranslation();

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button size="icon" variant="outline" onClick={() => signOut()}>
            <LogOutIcon />
            <span className="sr-only">sign out</span>
            <TooltipContent>{t("signOut")}</TooltipContent>
          </Button>
        </TooltipTrigger>
      </Tooltip>
    </TooltipProvider>
  );
};
