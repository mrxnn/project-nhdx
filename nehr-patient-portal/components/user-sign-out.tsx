import { Button } from "./ui/button";
import { FaSignOutAlt } from "react-icons/fa";
import { signOut } from "next-auth/react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

export const UserSignOut = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Button size="icon" variant="outline" onClick={() => signOut()}>
            <FaSignOutAlt />
            <span className="sr-only">sign out</span>
          </Button>
          <TooltipContent>Sign Out</TooltipContent>
        </TooltipTrigger>
      </Tooltip>
    </TooltipProvider>
  );
};
