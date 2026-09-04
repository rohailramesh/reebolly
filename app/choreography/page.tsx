"use client";
import React from "react";
import ChoreographyHero from "@/components/shared/ChoreographyHero";
import ChoreographyUseCases from "@/components/shared/ChoreographyUseCases";
import ChoreographyProcess from "@/components/shared/ChoreographyProcess";
import ChoreographyEnquiry from "@/components/shared/ChoreographyEnquiry";

export default function ChoreographyPage() {
  return (
    <>
      <ChoreographyHero />
      <ChoreographyUseCases />
      <ChoreographyProcess />
      <ChoreographyEnquiry />
    </>
  );
}
