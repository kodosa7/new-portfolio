import React, { createContext, useContext, useState, useEffect } from "react";
import { locales, defaultLanguage, supportedLanguages } from "../locales";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [language, setLanguageState] = useState(() => {
        try {
            const savedLang = localStorage.getItem("portfolio_lang");
            if (savedLang && locales[savedLang]) {
                return savedLang;
            }
        } catch (e) {
            // Ignore localStorage errors
        }
        return defaultLanguage;
    });

    const changeLanguage = (newLang) => {
        if (locales[newLang]) {
            setLanguageState(newLang);
            try {
                localStorage.setItem("portfolio_lang", newLang);
            } catch (e) {
                // Ignore localStorage errors
            }
        }
    };

    const currentData = locales[language] || locales[defaultLanguage];

    // Sync HTML lang attribute and document title with selected language
    useEffect(() => {
        document.documentElement.lang = language;
        if (currentData.meta?.title) {
            document.title = currentData.meta.title;
        }
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc && currentData.meta?.description) {
            metaDesc.setAttribute("content", currentData.meta.description);
        }
    }, [language, currentData]);

    const value = {
        language,
        setLanguage: changeLanguage,
        t: currentData,
        digitalProjects: currentData.digitalProjects,
        creativeProjects: currentData.creativeProjects,
        supportedLanguages
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
