import React from "react";

/**
 * AboutMe Component
 * Displays bio, background, demoscene/hackerspace hardware tinkering, and resume/projects buttons.
 */
export default function AboutMe({ onOpenAskForCv }) {
    return (
        <section class="container about-me" id="about">
            <h2 class="about-me__title">Who I am</h2>

            <div class="about-me__body">
                <p>
                    I am a creative technologist who thrives on{" "}
                    <strong class="highlighted highlighted--light">precision</strong>,{" "}
                    <strong class="highlighted highlighted--light">problem-solving</strong>, and a strong{" "}
                    <strong class="highlighted highlighted--light">attention to detail</strong>.
                    My work connects frontend web development, visual design, and hands-on technical exploration rooted in the{" "}
                    <a
                        class="highlighted highlighted--light"
                        href="https://en.wikipedia.org/wiki/Demoscene"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        demoscene
                    </a>{" "}
                    and local hackerspace community.
                </p>

                <p>
                    I enjoy understanding how things work under the hood — whether that means writing clean frontend code,
                    designing 3D models for print, or hardware tinkering. My projects range from custom Casio watch LED backlight modifications
                    to diagnosing and restoring vintage computer hardware and general IT systems.
                </p>

                <p>
                    I bring a patient, systematic approach to troubleshooting: testing, iterating, and finding practical solutions to technical challenges.
                    I’m always eager to learn, build, and craft visually polished, reliable experiences.
                </p>
            </div>

            <div class="about-me__buttons">
                <button
                    onClick={onOpenAskForCv}
                    class="btn btn--resume"
                    type="button"
                >
                    <div class="btn__text">
                        <i class="fas fa-file-pdf"></i> My Resume
                    </div>
                </button>

                <a href="#work" class="btn btn--projects">
                    <div class="btn__text">
                        <i class="fas fa-arrow-down"></i> Projects
                    </div>
                </a>
            </div>
        </section>
    );
}
