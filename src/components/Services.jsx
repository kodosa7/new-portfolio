import React from "react";

/**
 * Services Component
 * Highlights Design & Frontend and Hardware & Technology expertise.
 */
export default function Services() {
    return (
        <section class="container my-services" id="services">
            <h2 class="my-services__title">What I do</h2>

            <div class="my-services__services">
                <div class="my-services__service">
                    <h3 class="highlighted">Design & Frontend</h3>

                    <p class="my-services__text">
                        I build responsive, user-friendly web applications using{" "}
                        <strong class="highlighted">HTML</strong>,{" "}
                        <strong class="highlighted">CSS/SCSS</strong>,{" "}
                        <strong class="highlighted">JavaScript</strong>, and{" "}
                        <strong class="highlighted">React</strong>.
                        My design focus is centered around clarity, clean typography, aesthetic precision, and meticulous attention to detail.
                    </p>
                </div>

                <div class="my-services__service">
                    <h3 class="highlighted">Hardware & Technology</h3>

                    <p class="my-services__text">
                        With a background in hackerspace projects and IT support, I work with 3D modeling for print,
                        hardware modifications (such as custom display backlights), AV setups, and computer repair.
                        I bring a methodical testing mindset to diagnosing and resolving hardware and software issues.
                    </p>
                </div>
            </div>
        </section>
    );
}
