import React, { useEffect } from "react";

/**
 * ProjectModal Component
 * Reusable modal view for displaying project details, tech icons, links, and navigation.
 */
export default function ProjectModal({ project, onClose, onNavigateProject, allProjects }) {
    if (!project) return null;

    // Handle Escape key to close modal
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [onClose]);

    // Find current index and prev/next projects
    const currentIndex = allProjects.findIndex(p => p.id === project.id);
    const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
    const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null;

    return (
        <div class="modal-overlay" onClick={onClose}>
            <div class="modal-content" onClick={(e) => e.stopPropagation()}>
                {/* Close Button */}
                <button
                    class="modal-close-btn"
                    onClick={onClose}
                    aria-label="Close modal"
                    type="button"
                >
                    &times;
                </button>

                {/* Project Header View */}
                <div class="project-modal__header">
                    <h1 class="project-modal__title">{project.name}</h1>
                    {project.subtitle && (
                        <div class="project-modal__subtitle">{project.subtitle}</div>
                    )}
                    {project.image && (
                        <img
                            src={project.image}
                            alt={project.name}
                            class="project-modal__img"
                        />
                    )}
                </div>

                {/* Project Details Body */}
                <div class="project">
                    {/* Action Links & Tech Icons */}
                    {(project.githubUrl || project.liveUrl || project.techIcons) && (
                        <div class="project__buttons" style={{ justifyContent: "center", marginBottom: "1.5rem" }}>
                            {project.githubUrl && (
                                <a
                                    class="project__button"
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i class="fab fa-github"></i> GitHub Repo
                                </a>
                            )}
                            {project.liveUrl && (
                                <a
                                    class="project__button"
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i class="fas fa-eye"></i> Live version
                                </a>
                            )}

                            {/* Tech Stack Icons */}
                            {project.techIcons && project.techIcons.map((iconClass, idx) => (
                                <div class="project__icons" key={idx}>
                                    {iconClass === "custom-tailwind" ? (
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                                            width="34px"
                                            alt="Tailwind CSS"
                                        />
                                    ) : (
                                        <i class={`${iconClass} fa-lg project__icon`} aria-hidden="true"></i>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Descriptions */}
                    {project.descriptions && project.descriptions.map((desc, idx) => (
                        <p class="project__description" key={idx}>
                            {desc}
                        </p>
                    ))}

                    {/* Special Ask for CV message */}
                    {project.id === "askforcv" && (
                        <p class="project__description">
                            CVs contain personal information. Therefore, for safety reasons, it is no longer possible to download my CV directly from this website. You are still welcome to contact me anytime, and I’ll send it to you by email — of course if I consider the requester trustworthy and you comply with the quirky anti-spam feature.
                        </p>
                    )}

                    {/* Navigation Buttons (Home / Prev / Next) */}
                    <div class="project__buttons" style={{ justifyContent: "center", marginTop: "2rem" }}>
                        <button
                            class="project__button"
                            onClick={onClose}
                            type="button"
                        >
                            <i class="fa fa-home"></i> Back to Main
                        </button>

                        {prevProject && (
                            <button
                                class="project__button"
                                onClick={() => onNavigateProject(prevProject)}
                                type="button"
                            >
                                <i class="fa fa-arrow-left"></i> Previous project
                            </button>
                        )}

                        {nextProject && (
                            <button
                                class="project__button"
                                onClick={() => onNavigateProject(nextProject)}
                                type="button"
                            >
                                <i class="fa fa-arrow-right"></i> Next project
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
