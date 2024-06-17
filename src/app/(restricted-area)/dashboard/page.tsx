// import { MonthRevenueCard } from "@/app/components/MonthRevenueCard";
// import { PopularChart } from "@/app/components/PopularChart";
// import { RevenueChart } from "@/app/components/RevenueChart";
import { ShowStatusFiliation } from "@/app/components/ShowStatusFiliation";

export default async function Dashboard() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

      {/* <div className="grid grid-cols-4 flex-row gap-4">
        <MonthRevenueCard />
        <MonthRevenueCard />
        <MonthRevenueCard />
        <MonthRevenueCard />
      </div>

      <div className="grid grid-cols-9 gap-4">
        <RevenueChart />
        <PopularChart />
      </div> */}
      <ShowStatusFiliation />
    </div>
  );
}
