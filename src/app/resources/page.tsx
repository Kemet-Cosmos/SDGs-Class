import ClimateChange from "@/components/ClimateChange";
import SDG_13_Mean from "@/components/SDG_13_Mean";
import React from "react";

export default function Page() {
  return (
    <main className="space-y-20 ">
      <ClimateChange />
      <SDG_13_Mean />
    </main>
  );
}
