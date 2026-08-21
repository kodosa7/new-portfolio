import React from "react";
import { useLanguage } from "../context/LanguageContext";

/**
 * Footer Component
 * Renders email contact link and social icons (LinkedIn, GitHub, Behance).
 */
export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="footer" id="contact">
            <h2 className="u-sr-heading">{t.footer.contact}</h2>

            <a href="mailto:ellasenovska(no-spam)@gmail.com" className="footer__email">
                ellasenovska@gmail.com
            </a>

            <div className="footer__icons">
                <a
                    aria-label="LinkedIn"
                    className="footer__link"
                    href="https://www.linkedin.com/in/ella-senovska/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-linkedin"></i>
                </a>

                <a
                    aria-label="GitHub"
                    className="footer__link"
                    href="https://github.com/kodosa7/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-github"></i>
                </a>

                <a
                    aria-label="Behance"
                    className="footer__link"
                    href="https://www.behance.net/gallery/142479359/My-Portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-behance"></i>
                </a>
            </div>
        </footer>
    );
}
