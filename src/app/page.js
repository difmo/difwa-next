"use client";

import { useEffect, useState } from "react";
import JsonData from "./data/data.json";
import Page from "./components/mhome/page";
import AboutUs from "./components/AboutUs";
import Phone from "./components/Phone";
import OurServices from "./components/OurServices";
import { Gallery } from "./components/Gallery";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";

export default function Home() {
  const [landingPageData, setLandingPageData] = useState(null);

  useEffect(() => {
    if (JsonData) {
      setLandingPageData(JsonData);
    }
  }, []);

  if (!landingPageData) {
    return <div className="text-center py-10 text-gray-500">Loading...</div>;
  }

  return (
    <>
      <Page />
      <AboutUs />
      <Phone />
      <OurServices />
      <Gallery data={landingPageData.Gallery} />
      <Testimonials data={landingPageData.Testimonials} />
      {/* <Contact data={landingPageData.Contact} /> */}
    </>
  );
}
