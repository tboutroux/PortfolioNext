"use client";
import { useEffect, useState } from 'react';
import Loading from '@/app/loading';
import ParcoursPage from '@/components/parcoursPage/ParcoursComponents';
import HomePage from '../components/homePage/HomeComponents';
import PresentationPage from '../components/presentationPage/PresentationComponents';
import SkillsPage from '@/components/skillsPage/skillsComponents';
import ProjectPage from '@/components/projectPage/ProjectComponents';
import DocumentPage from '@/components/documentPage/DocumentComponents';
import ContactPage from '@/components/contactPage/ContactComponents';
import Footer from '@/components/footer';

export default function Page() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simuler une pause de chargement pendant 2 secondes
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 0);

        // Nettoyer le timer lorsque le composant est démonté
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    <HomePage />
                    <PresentationPage />
                    <ParcoursPage />
                    <SkillsPage />
                    <ProjectPage />
                    <DocumentPage />
                    <ContactPage />
                    <Footer />
                </>
            )}
        </div>
    );
}
