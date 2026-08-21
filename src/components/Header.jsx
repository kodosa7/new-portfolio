import React, { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "../context/LanguageContext";

/**
 * Header Component
 * Renders top navigation with hamburger menu toggle, language switcher, and hero intro section.
 */
export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const { t } = useLanguage();

    const toggleNav = () => setIsNavOpen(prev => !prev);
    const closeNav = () => setIsNavOpen(false);

    return (
        <header className="header header--background-pattern">
            {/* Top Right Controls: Language Switcher and Hamburger Menu */}
            <div className={`header__controls ${isNavOpen ? "header__controls--open" : ""}`}>
                <LanguageSwitcher />

                {/* Navigation Hamburger Button */}
                <button
                    className={`nav-btn ${isNavOpen ? "nav-btn--open" : ""}`}
                    aria-label={t.nav.toggleAria}
                    onClick={toggleNav}
                    type="button"
                >
                    <span className="nav-btn__hamburger"></span>
                </button>
            </div>

            {/* Navigation Overlay */}
            <nav className={`nav ${isNavOpen ? "nav--open" : ""}`}>
                <ul className="nav__list">
                    <li>
                        <a href="#top" className="nav__link" onClick={closeNav}>
                            {t.nav.home}
                        </a>
                    </li>
                    <li>
                        <a href="#about" className="nav__link" onClick={closeNav}>
                            {t.nav.about}
                        </a>
                    </li>
                    <li>
                        <a href="#services" className="nav__link" onClick={closeNav}>
                            {t.nav.services}
                        </a>
                    </li>
                    <li>
                        <a href="#work" className="nav__link" onClick={closeNav}>
                            {t.nav.projects}
                        </a>
                    </li>
                </ul>
            </nav>

            {/* Introduction / Hero Banner */}
            <div className="container intro" id="top">
                <h1 className="intro__title">
                    <span className="intro__first-name">{t.intro.firstName}</span>
                    <br />
                    <span
                        className="intro__last-name"
                        dangerouslySetInnerHTML={{ __html: t.intro.lastName }}
                    />
                </h1>

                {/* Subtitle with 3 keywords */}
                <p className="intro__subtitle">
                    {t.intro.subtitleKeywords.map((keyword, idx) => (
                        <React.Fragment key={idx}>
                            {idx > 0 && <span className="intro__subtitle-separator">\\</span>}
                            <span>{keyword}</span>
                        </React.Fragment>
                    ))}
                </p>

                <img
                    src="/img/photo.webp"
                    alt={t.intro.imgAlt || "Ella Šenovská"}
                    className="intro__img"
                />
            </div>
        </header>
    );
}
