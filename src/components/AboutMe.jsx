import React from "react";
import { useLanguage } from "../context/LanguageContext";

/**
 * AboutMe Component
 * Displays bio, background, demoscene/hackerspace hardware tinkering, and resume/projects buttons.
 */
export default function AboutMe({ onOpenAskForCv }) {
    const { t } = useLanguage();

    return (
        <section className="container about-me" id="about">
            <h2 className="about-me__title">{t.about.title}</h2>

            <div className="about-me__body">
                <p dangerouslySetInnerHTML={{ __html: t.about.p1 }} />
                <p>{t.about.p2}</p>
                <p>{t.about.p3}</p>
            </div>

            <div className="about-me__buttons">
                <button
                    onClick={onOpenAskForCv}
                    className="btn btn--resume"
                    type="button"
                >
                    <div className="btn__text">
                        <i className="fas fa-file-pdf"></i> {t.about.resumeBtn}
                    </div>
                </button>

                <a href="#work" className="btn btn--projects">
                    <div className="btn__text">
                        <i className="fas fa-arrow-down"></i> {t.about.projectsBtn}
                    </div>
                </a>
            </div>
        </section>
    );
}
