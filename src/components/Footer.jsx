import React from "react";

/**
 * Footer Component
 * Renders email contact link and social icons (LinkedIn, GitHub, Behance).
 */
export default function Footer() {
    return (
        <footer class="footer" id="contact">
            <h2 class="u-sr-heading">Contact</h2>

            <a href="mailto:ellasenovska(no-spam)@gmail.com" class="footer__email">
                ellasenovska@gmail.com
            </a>

            <div class="footer__icons">
                <a
                    aria-label="LinkedIn"
                    class="footer__link"
                    href="https://www.linkedin.com/in/ella-senovska/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i class="fab fa-linkedin"></i>
                </a>

                <a
                    aria-label="GitHub"
                    class="footer__link"
                    href="https://github.com/kodosa7/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i class="fab fa-github"></i>
                </a>

                <a
                    aria-label="Behance"
                    class="footer__link"
                    href="https://www.behance.net/gallery/142479359/My-Portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i class="fab fa-behance"></i>
                </a>
            </div>
        </footer>
    );
}
