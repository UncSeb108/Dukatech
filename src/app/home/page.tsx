"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import HeroCarousel from "./components/Hero";
import AboutSection from "./components/About";
import ServicesSection from "./components/Services";
import CoreAreas from "./components/CoreAreas";
import ImpactInNumbers from "./components/Impact";
import CommunityStories from "./components/Community";
import ProjectsSection from "./components/Projects";
import CallToAction from "./components/CallToAction";
import BlogSection from "./components/Blog";
import NewsletterSignup from "./components/Newsletter";

export default function Home() {
  return (
    <>
      <HeroCarousel></HeroCarousel>
      <AboutSection></AboutSection>
      <ServicesSection></ServicesSection>
      <CoreAreas></CoreAreas>
      <ImpactInNumbers></ImpactInNumbers>
      <CommunityStories></CommunityStories>
      <ProjectsSection></ProjectsSection>
      <CallToAction></CallToAction>
      <BlogSection></BlogSection>
      <NewsletterSignup></NewsletterSignup>
    </>
  );
}
