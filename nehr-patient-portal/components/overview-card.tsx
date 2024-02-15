export type OverviewCardProps = {
  title: string;
  value: string;
  lastMonthValue?: string;
};

export const OverviewCard = ({
  title,
  value,
  lastMonthValue,
}: OverviewCardProps) => {
  return (
    <div className="border border-slate-200 rounded-lg px-4 py-4">
      <p className="font-medium space-y-0.5">{title}</p>
      <p className="font-medium text-[30px] font-mono">{value}</p>
      {lastMonthValue && (
        <p className="text-xs text-muted-foreground">
          {lastMonthValue} from last month
        </p>
      )}
    </div>
  );
};
