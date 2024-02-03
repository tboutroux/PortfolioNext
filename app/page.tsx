"use client";
import ParcoursPage from "@/components/parcoursPage/ParcoursComponents";
import HomePage from "../components/homePage/HomeComponents";
import PresentationPage from "../components/presentationPage/PresentationComponents";
import SkillsPage from "@/components/skillsPage/skillsComponents";

export default function Page() {
    return (
        <div>
            <HomePage />
            <PresentationPage />
            <ParcoursPage />
            <SkillsPage />
        </div>
    );
}
