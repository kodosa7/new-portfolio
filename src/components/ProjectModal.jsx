import React, { useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

/**
 * ProjectModal Component
 * Reusable modal view for displaying project details, tech icons, links, and navigation.
 */
export default function ProjectModal({ project, onClose, onNavigateProject, allProjects }) {
    const { t } = useLanguage();

    if (!project) return null;

    // Handle Escape key to close modal
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [onClose]);

    // If active project is askforcv, get localized askforcv object
    const activeProject = project.id === "askforcv" ? t.askForCv : project;

    // Find current index and prev/next projects
    const currentIndex = allProjects.findIndex(p => p.id === activeProject.id);
    const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
    const nextProject = currentIndex >= 0 && currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                {/* Close Button */}
                <button
                    className="modal-close-btn"
                    onClick={onClose}
                    aria-label={t.modal.closeAria}
                    type="button"
                >
                    &times;
                </button>

                {/* Project Header View */}
                <div className="project-modal__header">
                    <h1 className="project-modal__title">{activeProject.name}</h1>
                    {activeProject.subtitle && (
                        <div className="project-modal__subtitle">{activeProject.subtitle}</div>
                    )}
                    {activeProject.image && (
                        <img
                            src={activeProject.image}
                            alt={activeProject.name}
                            className="project-modal__img"
                        />
                    )}
                </div>

                {/* Project Details Body */}
                <div className="project">
                    {/* Action Links & Tech Icons */}
                    {(activeProject.githubUrl || activeProject.liveUrl || activeProject.techIcons) && (
                        <div className="project__buttons" style={{ justifyContent: "center", marginBottom: "1.5rem" }}>
                            {activeProject.githubUrl && (
                                <a
                                    className="project__button"
                                    href={activeProject.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fab fa-github"></i> {t.modal.githubBtn}
                                </a>
                            )}
                            {activeProject.liveUrl && (
                                <a
                                    className="project__button"
                                    href={activeProject.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fas fa-eye"></i> {t.modal.liveBtn}
                                </a>
                            )}

                            {/* Tech Stack Icons */}
                            {activeProject.techIcons && activeProject.techIcons.map((iconClass, idx) => (
                                <div className="project__icons" key={idx}>
                                    {iconClass === "custom-tailwind" ? (
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                                            width="34px"
                                            alt="Tailwind CSS"
                                        />
                                    ) : (
                                        <i className={`${iconClass} fa-lg project__icon`} aria-hidden="true"></i>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Descriptions */}
                    {activeProject.descriptions && activeProject.descriptions.map((desc, idx) => (
                        <p className="project__description" key={idx}>
                            {desc}
                        </p>
                    ))}

                    {/* Navigation Buttons (Home / Prev / Next) */}
                    <div className="project__buttons" style={{ justifyContent: "center", marginTop: "2rem" }}>
                        <button
                            className="project__button"
                            onClick={onClose}
                            type="button"
                        >
                            <i className="fa fa-home"></i> {t.modal.backToMain}
                        </button>

                        {prevProject && (
                            <button
                                className="project__button"
                                onClick={() => onNavigateProject(prevProject)}
                                type="button"
                            >
                                <i className="fa fa-arrow-left"></i> {t.modal.prevProject}
                            </button>
                        )}

                        {nextProject && (
                            <button
                                className="project__button"
                                onClick={() => onNavigateProject(nextProject)}
                                type="button"
                            >
                                <i className="fa fa-arrow-right"></i> {t.modal.nextProject}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
