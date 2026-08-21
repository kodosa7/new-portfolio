import React from "react";
import { useLanguage } from "../context/LanguageContext";

/**
 * LanguageSwitcher Component
 * Displays language toggle buttons (e.g. EN | CZ) in the top-right header,
 * positioned directly to the left of the hamburger menu button.
 */
export default function LanguageSwitcher() {
    const { language, setLanguage, supportedLanguages } = useLanguage();

    return (
        <div className="lang-switch" role="group" aria-label="Language selector">
            {supportedLanguages.map((lang, index) => {
                const isActive = language === lang.code;
                return (
                    <React.Fragment key={lang.code}>
                        {index > 0 && <span className="lang-switch__divider" aria-hidden="true">|</span>}
                        <button
                            type="button"
                            className={`lang-switch__btn ${isActive ? "lang-switch__btn--active" : ""}`}
                            onClick={() => setLanguage(lang.code)}
                            aria-label={`Switch language to ${lang.title || lang.label}`}
                            aria-pressed={isActive}
                        >
                            {lang.label}
                        </button>
                    </React.Fragment>
                );
            })}
        </div>
    );
}
