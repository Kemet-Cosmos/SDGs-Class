import ClimateChange from "@/components/ClimateChange";
import SDG_13_Mean from "@/components/SDG_13_Mean";
import Targets from "@/components/Targets";
import React from "react";

export default function Page() {
  return (
    <main className="space-y-20 ">
      <ClimateChange />
      <SDG_13_Mean />
      <Targets/>
    </main>
  );
}
