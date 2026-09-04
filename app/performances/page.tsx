"use client";
import React from "react";
import PerformancesHero from "@/components/shared/PerformancesHero";
import PerformanceTypes from "@/components/shared/PerformanceTypes";
import PerformancePortfolio from "@/components/shared/PerformancePortfolio";
import PerformanceEnquiry from "@/components/shared/PerformanceEnquiry";

export default function PerformancesPage() {
  return (
    <>
      <PerformancesHero />
      <PerformanceTypes />
      <PerformancePortfolio />
      <PerformanceEnquiry />
    </>
  );
}
