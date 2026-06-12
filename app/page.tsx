import { Navigation } from "@/components/sections/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Mission } from "@/components/sections/Mission";
import { WhatWeBuild } from "@/components/sections/WhatWeBuild";
import { Research } from "@/components/sections/Research";
import { WhyAfrica } from "@/components/sections/WhyAfrica";
import { ResponsibleScaling } from "@/components/sections/ResponsibleScaling";
import { Team } from "@/components/sections/Team";
import { Partner } from "@/components/sections/Partner";
import { Careers } from "@/components/sections/Careers";
import { Footer } from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Hero />
        <Mission />
        <WhatWeBuild />
        <Research />
        <WhyAfrica />
        <ResponsibleScaling />
        <Team />
        <Partner />
        <Careers />
      </main>
      <Footer />
    </div>
  );
}