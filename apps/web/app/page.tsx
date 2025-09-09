"use client"
import { Button } from "@/components/ui/button";
import { HeroCircuit } from "../components/home/hero-circuit";

export default function Home() {
  return (
    <div className="w-screen h-screen dark:bg-black">
      <div className="absolute z-10 text-amber-50 flex flex-col justify-center items-center w-full h-full -my-32">
          <div className="text-6xl font-bold"> 
            Multi Cloud Deployment
          </div>
          
          <div className="text-6xl font-bold">
            Cost Optimizer and Auto-Migrator
          </div>

          <div className="text-base w-4xl text-center text-gray-600">
            Our platform empowers businesses to deploy and manage applications across multiple clouds, automatically migrating workloads while optimizing costs. With intelligent automation and real-time insights, you can scale efficiently, reduce expenses, and focus on innovation without worrying about complex multi-cloud management.
          </div>

           <div className="flex py-8 gap-6">
            <Button className="bg-amber-700 rounded-3xl h-12 w-40">Get Started</Button>
            <Button className="bg-gray-600 h-12 w-40 rounded-3xl">Documentation</Button>
          </div>
          
      </div>
      <HeroCircuit />
    </div>
  );
}
