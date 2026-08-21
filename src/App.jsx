import React, { useState } from "react";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Carousel from "./components/Carousel";
import ProjectModal from "./components/ProjectModal";
import Footer from "./components/Footer";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";

/**
 * Portfolio Content Component
 * Consumes language context to render localized headings and project carousels.
 */
function PortfolioContent() {
    const [selectedProject, setSelectedProject] = useState(null);
    const { t, digitalProjects, creativeProjects } = useLanguage();

    const handleOpenAskForCv = () => {
        setSelectedProject(t.askForCv);
    };

    return (
        <div className="app">
            {/* Header with Navigation and Language Switcher */}
            <Header />

            <main className="main">
                {/* About me */}
                <div className="wedge"></div>
                <AboutMe onOpenAskForCv={handleOpenAskForCv} />

                {/* Skills & Services */}
                <div className="wedge"></div>
                <Services />

                {/* Portfolio Section with Carousels */}
                <div className="wedge"></div>
                <section className="container portfolio" id="work">
                    {/* Selected Digital Projects Carousel */}
                    <h2 className="title portfolio__heading">{t.portfolio.digitalHeading}</h2>
                    <p className="portfolio__subtitle">
                        {t.portfolio.digitalSubtitle}
                    </p>
                    <Carousel
                        items={digitalProjects}
                        onSelectProject={(proj) => setSelectedProject(proj)}
                    />

                    {/* Creative & Experimental Work Carousel */}
                    <h2 className="title portfolio__heading--other">
                        {t.portfolio.creativeHeading}
                    </h2>
                    <p className="portfolio__subtitle">
                        {t.portfolio.creativeSubtitle}
                    </p>
                    <Carousel
                        items={creativeProjects}
                        onSelectProject={(proj) => setSelectedProject(proj)}
                    />
                </section>
            </main>

            {/* Footer */}
            <Footer />

            {/* Reusable Project Detail Modal */}
            <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
                onNavigateProject={(proj) => setSelectedProject(proj)}
                allProjects={digitalProjects}
            />
        </div>
    );
}

/**
 * Main App Component
 * Wraps portfolio content with LanguageProvider.
 */
export default function App() {
    return (
        <LanguageProvider>
            <PortfolioContent />
        </LanguageProvider>
    );
}
