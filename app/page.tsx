import React from "react";
import Spline from "@splinetool/react-spline";

import GoToDashboard from "../components/homecomponents/GotoDashboard"
import FeaturesSection from "../components/homecomponents/FeaturesSection";
import PricingSection from "../components/homecomponents/PricingSection";
import Footer from "../components/homecomponents/Footer";

export default function Home() {
 
  return (
    <>
      <div className="w-full h-screen relative">
        {/* Fullscreen Spline scene */}
        <Spline
          scene="https://prod.spline.design/65Xq6My4V9CCDWtg/scene.splinecode"
          className="absolute inset-0"
        />

        {/* "Boulevard Legacy LLC" text */}
        <div className="absolute bottom-4 right-4 bg-zinc-800 text-white px-4 py-2 rounded-lg shadow-lg text-lg font-semibold">
          Boulevard Legacy LLC
        </div>
      </div>
      <div className="w-full h-screen relative">
        <GoToDashboard />
        <FeaturesSection />
<PricingSection />
<Footer />

      </div>
    </>
  );
}

