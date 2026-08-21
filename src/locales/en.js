/**
 * English Locale Data
 */

export const en = {
    meta: {
        title: "Ella Senovska – Portfolio",
        description: "Portfolio of Ella Senovska – design, frontend development, audiovisual technology and digital art."
    },
    nav: {
        toggleAria: "toggle navigation screen",
        home: "Home",
        about: "About me",
        services: "Skills & Services",
        projects: "Projects"
    },
    intro: {
        firstName: "Ella",
        lastName: "Šenov&shy;ská",
        subtitleKeywords: ["Focus", "Precision", "Attention to detail"],
        imgAlt: "Ella Šenovská"
    },
    about: {
        title: "Who I am",
        p1: `I am a creative technologist who thrives on <strong class="highlighted highlighted--light">precision</strong>, <strong class="highlighted highlighted--light">problem-solving</strong>, and a strong <strong class="highlighted highlighted--light">attention to detail</strong>. My work connects frontend web development, visual design, and hands-on technical exploration rooted in the <a class="highlighted highlighted--light" href="https://en.wikipedia.org/wiki/Demoscene" target="_blank" rel="noopener noreferrer">demoscene</a> and local hackerspace community.`,
        p2: `I enjoy understanding how things work under the hood — whether that means writing clean frontend code, designing 3D models for print, or hardware tinkering. My projects range from custom Casio watch LED backlight modifications to diagnosing and restoring vintage computer hardware and general IT systems.`,
        p3: `I bring a patient, systematic approach to troubleshooting: testing, iterating, and finding practical solutions to technical challenges. I’m always eager to learn, build, and craft visually polished, reliable experiences.`,
        resumeBtn: "My Resume",
        projectsBtn: "Projects"
    },
    services: {
        title: "What I do",
        design: {
            title: "Design & Frontend",
            text: `I build responsive, user-friendly web applications using <strong class="highlighted">HTML</strong>, <strong class="highlighted">CSS/SCSS</strong>, <strong class="highlighted">JavaScript</strong>, and <strong class="highlighted">React</strong>. My design focus is centered around clarity, clean typography, aesthetic precision, and meticulous attention to detail.`
        },
        hardware: {
            title: "Hardware & Technology",
            text: `With a background in hackerspace projects and IT support, I work with 3D modeling for print, hardware modifications (such as custom display backlights), AV setups, and computer repair. I bring a methodical testing mindset to diagnosing and resolving hardware and software issues.`
        }
    },
    portfolio: {
        digitalHeading: "Selected Digital Projects",
        digitalSubtitle: "Frontend, design and multimedia work",
        creativeHeading: "Creative & Experimental Work",
        creativeSubtitle: "Graphics, retro computing and demoscene-related projects"
    },
    carousel: {
        prevAria: "Previous projects",
        nextAria: "Next projects",
        dotAria: "Go to slide"
    },
    modal: {
        closeAria: "Close modal",
        githubBtn: "GitHub Repo",
        liveBtn: "Live version",
        backToMain: "Back to Main",
        prevProject: "Previous project",
        nextProject: "Next project"
    },
    askForCv: {
        id: "askforcv",
        name: "ask for the paper",
        type: "",
        subtitle: "",
        descriptions: [
            "CVs contain personal information. Therefore, for safety reasons, it is no longer possible to download my CV directly from this website. You are still welcome to contact me anytime, and I’ll send it to you by email — of course if I consider the requester trustworthy and you comply with the quirky anti-spam feature."
        ]
    },
    footer: {
        contact: "Contact"
    },
    digitalProjects: [
        {
            id: "eshop",
            name: "E-Shop",
            type: "web app",
            subtitle: "React, Bootstrap",
            image: "/img/eshop.webp",
            githubUrl: "https://github.com/kodosa7/eshop/",
            liveUrl: "https://els-eshop.netlify.app/",
            techIcons: ["fab fa-react", "fa-brands fa-bootstrap"],
            descriptions: [
                "A mockup E-Shop app with basic functionality of buying an item and making a fictional order. The app fetches data from an API and it has a responsive design.",
                "The project had been developed as a CoreSkill Mentoring Programme course project and is using React and Bootstrap."
            ],
            courseLink: "https://coreskill.tech",
            courseName: "CoreSkill"
        },
        {
            id: "dev-bugflow",
            name: "Dev BugFlow",
            type: "web app",
            subtitle: "React, TailwindCSS",
            image: "/img/devbugflow.webp",
            githubUrl: "https://github.com/kodosa7/bug-flow/",
            liveUrl: "https://devbugflow.netlify.app/",
            techIcons: ["fab fa-react", "custom-tailwind"],
            descriptions: [
                "Web app for helping developers to report their bug flow visually in steps by adding screenshots, text captions and exporting them as an image workflow to clipboard or image, being easy to share on social media.",
                "The project was made using React and TailwindCSS."
            ]
        },
        {
            id: "c64colquiz",
            name: "C64ColQuiz",
            type: "web game",
            subtitle: "HTML, CSS & JavaScript",
            image: "/img/c64colquiz.webp",
            githubUrl: "https://github.com/kodosa7/c64colquiz-js/",
            liveUrl: "https://taupe-melomakarona-5d005b.netlify.app/",
            techIcons: ["fab fa-html5", "fab fa-css3-alt", "fab fa-js"],
            descriptions: [
                "This is a web game based on the Commodore 64 retro computer game called C64 Color Quiz. It is built using vanilla JavaScript and CSS, and is utilizing Flexbox and CSS Variables. It was built independently just like a hobby project.",
                "It's trying to mimic original visuals, just like on the original computer. Sound is sampled from the original machine as well.",
                "It took me about 3 weeks to complete this project, using JavaScript functional programming only."
            ]
        },
        {
            id: "demoparty-info-website",
            name: "Demoparty Info Website",
            type: "web site",
            subtitle: "HTML, CSS & JavaScript",
            image: "/img/demoparty-info-website.webp",
            githubUrl: "https://github.com/kodosa7/jobj42/",
            liveUrl: "https://jobj42-dev.netlify.app/",
            techIcons: ["fab fa-html5", "fab fa-css3-alt", "fab fa-js"],
            descriptions: [
                "A static information website for a demoparty event inviting people and giving them basic information about the venue. Fully responsive.",
                "Made using HTML, CSS and vanilla JavaScript."
            ]
        }
    ],
    creativeProjects: [
        {
            id: "fruitypete",
            name: "Homebrew Game Design",
            subtitle: "Commodore 64 & Retro Gaming",
            image: "/img/fruitypete.webp",
            externalUrl: "https://www.youtube.com/watch?v=ZlyazBbdAe4"
        },
        {
            id: "vectorgraphics",
            name: "Vector Graphics",
            subtitle: "Branding & Visual Artwork",
            image: "/img/vectorgraphics.webp",
            externalUrl: "https://www.behance.net/gallery/142479359/My-Portfolio"
        },
        {
            id: "pixelgraphics",
            name: "Pixel Graphics",
            subtitle: "Retro Pixel Art & Demoscene",
            image: "/img/pixelgraphics.webp",
            externalUrl: "https://zxart.ee/spa/autores/a/aki/"
        },
        {
            id: "textmode-graphics",
            name: "Text Mode Graphics Art",
            subtitle: "PETSCII & ASCII Artwork",
            image: "/img/textmode-graphics.webp",
            externalUrl: "https://demozoo.org/graphics/361911/"
        },
        {
            id: "3dprint",
            name: "3D Print & Models",
            subtitle: "3D Hardware & Physical Prints",
            image: "/img/3dprint.webp",
            externalUrl: null
        },
        {
            id: "demosceneawards",
            name: "Demoscene Awards",
            subtitle: "International Digital Art Competitions",
            image: "/img/demosceneawards.webp",
            externalUrl: "https://2024.revision-party.net/"
        }
    ]
};
