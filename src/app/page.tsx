import FeatureJobs from "@/components/FeatureJobs";
import BannerSignUp from "@/components/organism/BannerSignUp";
import Category from "@/components/organism/Category";
import Clients from "@/components/organism/Clients";
import Hero from "@/components/organism/Hero";

export default function Home() {
  return (
    <div className="px-32 mt-10">
      <Hero />
      <Clients />
      <Category />
      <BannerSignUp />
      <FeatureJobs />
    </div>
  );
}
