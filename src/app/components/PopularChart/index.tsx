"use client";

import { BarChart, Pie, PieChart, ResponsiveContainer } from "recharts";

// import colors from "tailwindcss/colors";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function PopularChart() {
  const data = [
    { product: "Peperoni", amount: 40 },
    { product: "Muzzarela", amount: 80 },
    { product: "Margherita", amount: 60 },
    { product: "Fiesta", amount: 65 },
    { product: "Pomodoro", amount: 20 },
    { product: "Aglio", amount: 44 },
    { product: "Agrião", amount: 35 },
  ];

  return (
    <Card className="col-span-3">
      <CardHeader className="pb-8">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-medium">
            Produtos populares
          </CardTitle>
          <BarChart className="h-4 w-4 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <PieChart data={data} style={{ fontSize: 12 }}>
            <Pie dataKey="amount" nameKey="product" data={data} />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
