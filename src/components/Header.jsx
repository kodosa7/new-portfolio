import React, { useState } from "react";

/**
 * Header Component
 * Renders top navigation with hamburger menu toggle and hero intro section.
 */
export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => setIsNavOpen(prev => !prev);
    const closeNav = () => setIsNavOpen(false);

    return (
        <header class="header header--background-pattern">
            {/* Navigation Hamburger Button */}
            <button
                class={`nav-btn ${isNavOpen ? "nav-btn--open" : ""}`}
                aria-label="toggle navigation screen"
                onClick={toggleNav}
            >
                <span class="nav-btn__hamburger"></span>
            </button>

            {/* Navigation Overlay */}
            <nav class={`nav ${isNavOpen ? "nav--open" : ""}`}>
                <ul class="nav__list">
                    <li>
                        <a href="#top" class="nav__link" onClick={closeNav}>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#about" class="nav__link" onClick={closeNav}>
                            About me
                        </a>
                    </li>
                    <li>
                        <a href="#services" class="nav__link" onClick={closeNav}>
                            Skills & Services
                        </a>
                    </li>
                    <li>
                        <a href="#work" class="nav__link" onClick={closeNav}>
                            Projects
                        </a>
                    </li>
                </ul>
            </nav>

            {/* Introduction / Hero Banner */}
            <div class="container intro" id="top">
                <h1 class="intro__title">
                    <span class="intro__first-name">Ella</span>
                    <br />
                    <span class="intro__last-name">Šenov&shy;ská</span>
                </h1>

                {/* Subtitle updated to 3 English keywords */}
                <p class="intro__subtitle">
                    Focus
                    <span class="intro__subtitle-separator">\\</span>
                    Precision
                    <span class="intro__subtitle-separator">\\</span>
                    Attention to detail
                </p>

                <img
                    src="/img/photo.webp"
                    alt="Ella Šenovská"
                    class="intro__img"
                />
            </div>
        </header>
    );
}
