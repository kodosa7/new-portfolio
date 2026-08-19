import React, { useState } from "react";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Carousel from "./components/Carousel";
import ProjectModal from "./components/ProjectModal";
import Footer from "./components/Footer";
import { digitalProjects, creativeProjects } from "./data/projectsData";

/**
 * Main App Component
 * Orchestrates main sections, dual carousels, and project detail modal.
 */
export default function App() {
    const [selectedProject, setSelectedProject] = useState(null);

    const handleOpenAskForCv = () => {
        setSelectedProject({
            id: "askforcv",
            name: "ask for the paper",
            type: "",
            subtitle: "",
            descriptions: []
        });
    };

    return (
        <div class="app">
            {/* Header */}
            <Header />

            <main class="main">
                {/* About me */}
                <div class="wedge"></div>
                <AboutMe onOpenAskForCv={handleOpenAskForCv} />

                {/* Skills & Services */}
                <div class="wedge"></div>
                <Services />

                {/* Portfolio Section with Carousels */}
                <div class="wedge"></div>
                <section class="container portfolio" id="work">
                    {/* Selected Digital Projects Carousel */}
                    <h2 class="title portfolio__heading">Selected Digital Projects</h2>
                    <p class="portfolio__subtitle">
                        Frontend, design and multimedia work
                    </p>
                    <Carousel
                        items={digitalProjects}
                        onSelectProject={(proj) => setSelectedProject(proj)}
                    />

                    {/* Creative & Experimental Work Carousel */}
                    <h2 class="title portfolio__heading--other">
                        Creative & Experimental Work
                    </h2>
                    <p class="portfolio__subtitle">
                        Graphics, retro computing and demoscene-related projects
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
