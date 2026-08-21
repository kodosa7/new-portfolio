import React from "react";
import { useLanguage } from "../context/LanguageContext";

/**
 * Services Component
 * Highlights Design & Frontend and Hardware & Technology expertise.
 */
export default function Services() {
    const { t } = useLanguage();

    return (
        <section className="container my-services" id="services">
            <h2 className="my-services__title">{t.services.title}</h2>

            <div className="my-services__services">
                <div className="my-services__service">
                    <h3 className="highlighted">{t.services.design.title}</h3>

                    <p
                        className="my-services__text"
                        dangerouslySetInnerHTML={{ __html: t.services.design.text }}
                    />
                </div>

                <div className="my-services__service">
                    <h3 className="highlighted">{t.services.hardware.title}</h3>

                    <p
                        className="my-services__text"
                        dangerouslySetInnerHTML={{ __html: t.services.hardware.text }}
                    />
                </div>
            </div>
        </section>
    );
}
