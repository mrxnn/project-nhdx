import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const HeaderSeperator = ({ children }: Props) => {
  return (
    <div className="flex items-center gap-x-2 mt-9 mb-5">
      <h3 className="font-bold text-xl">{children}</h3>
      <div className="h-px flex-1 bg-slate-200">&nbsp;</div>
    </div>
  );
};
