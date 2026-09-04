"use client";
import React, { useState } from "react";
import ExperiencesHero from "@/components/shared/ExperiencesHero";
import ExperienceCategories from "@/components/shared/ExperienceCategories";

export default function ExperiencesPage() {
  return (
    <>
      <ExperiencesHero />
      <ExperienceCategories />
    </>
  );
}
