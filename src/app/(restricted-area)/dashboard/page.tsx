import { getServerSession } from "next-auth";

import { MonthRevenueCard } from "@/app/components/MonthRevenueCard";
import { PopularChart } from "@/app/components/PopularChart";
import { RevenueChart } from "@/app/components/RevenueChart";

export default async function Dashboard() {
  const session = await getServerSession();

  console.log("session", session);

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

      <div>Olá {session?.user?.name}</div>

      <div className="grid grid-cols-4 flex-row gap-4">
        <MonthRevenueCard />
        <MonthRevenueCard />
        <MonthRevenueCard />
        <MonthRevenueCard />
      </div>

      <div className="grid grid-cols-9 gap-4">
        <RevenueChart />
        <PopularChart />
      </div>
    </div>
  );
}
