import Image from "next/image";
import { Button } from "@/components/ui/button";
import Hero from "@/components/organism/Hero";
import Clients from "@/components/organism/Clients";

export default function Home() {
  return (
    <div className="px-32 mt-10">
      <Hero />
      <Clients />
    </div>
  );
}
