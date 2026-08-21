import React from "react";

/**
 * ProjectCard Component
 * Displays individual project card image and name with hover animations.
 */
export default function ProjectCard({ project, onSelectProject }) {
    const handleClick = (e) => {
        if (project.externalUrl) {
            // External link for creative/experimental work
            return;
        }
        e.preventDefault();
        onSelectProject(project);
    };

    return (
        <article className="portfolio__item">
            <h3 className="portfolio__name">{project.name}</h3>

            {project.externalUrl ? (
                <a
                    className="portfolio__link"
                    aria-label={project.name}
                    href={project.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={project.image}
                        alt={project.name}
                        width="1158"
                        height="1158"
                        loading="lazy"
                    />
                </a>
            ) : project.id ? (
                <a
                    className="portfolio__link"
                    aria-label={project.name}
                    href={`#${project.id}`}
                    onClick={handleClick}
                >
                    <img
                        src={project.image}
                        alt={project.name}
                        width="1158"
                        height="1158"
                        loading="lazy"
                    />
                </a>
            ) : (
                <span className="portfolio__link--no-link">
                    <img
                        src={project.image}
                        alt={project.name}
                        width="1158"
                        height="1158"
                        loading="lazy"
                    />
                </span>
            )}
        </article>
    );
}
