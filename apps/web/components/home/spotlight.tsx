import React from "react";
import { Spotlight } from "../ui/spotlight";

export function SpotlightPreview() {
  return (
    <div className="relative flex h-[40rem] w-full overflow-hidden rounded-md bg-black/[0.96] antialiased md:items-center md:justify-center">

      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="orange"
      />
      <div className="relative z-10 mx-auto w-full max-w-9xl p-4 pt-20 md:pt-0">
        <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-3xl font-bold text-transparent md:text-7xl">
          Multi Cloud Deployment <br />Cost Optimizer and Auto-Migrator
        </h1>
        <p className="mx-auto mt-4 max-w-4xl text-center text-base font-normal text-gray-500">
          Our platform empowers businesses to deploy and manage applications across multiple clouds, 
          automatically migrating workloads while optimizing costs. With intelligent automation and real-time insights,
           you can scale efficiently, reduce expenses, and focus on innovation without worrying about complex multi-cloud management.
        </p>
      </div>
    </div>
  );
}
