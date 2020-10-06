import React from "react";
import Carosel_ from "../components/Carosel_";
import Featurettes from "../components/Featurettes";
import Footer_ from "../components/Footer_";
import Header_ from "../components/Header_";
import MarketingContent from "../components/MarketingContent";
import ProfileContent from "../components/ProfileContent";

export default function LandingPage() {
  return (
    <>
      <Header_ />
      <main role="main">
        <Carosel_ />
        <div className="container marketing">
          <MarketingContent />
          <Featurettes />
        </div>

        {/* <ProfileContent /> */}
        <Footer_ />
      </main>
    </>
  );
}
