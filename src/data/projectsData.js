/**
 * Portfolio Projects Data
 * Centralized data source for digital projects and creative & experimental work.
 */

export const digitalProjects = [
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
    },
    {
        id: "quizzical",
        name: "Quizzical",
        type: "web app",
        subtitle: "React",
        image: "/img/quizzical.webp",
        githubUrl: "https://github.com/kodosa7/quizzical/",
        liveUrl: "https://playful-piroshki-6ccf14.netlify.app/",
        techIcons: ["fab fa-react", "fab fa-css3-alt"],
        descriptions: [
            "A mini-quiz web app fetching random questions set from a web API and evaluating user's answers.",
            "The project is using components and React hooks like useState and useEffect. It was a React solo project of the Scrimba Frontend Path web course."
        ],
        courseLink: "https://scrimba.com/learn/frontend",
        courseName: "Scrimba Frontend Path"
    },
    {
        id: "travel-journal",
        name: "Travel Journal",
        type: "web app",
        subtitle: "React",
        image: "/img/travel-journal.webp",
        githubUrl: "https://github.com/kodosa7/travel-journal/",
        liveUrl: "https://superlative-mooncake-bede24.netlify.app/",
        techIcons: ["fab fa-react", "fab fa-css3-alt"],
        descriptions: [
            "A mock travel planning app showing multiple destinations.",
            "It was a solo project of React basics chapter on Scrimba Frontend Path course. It is using React components."
        ],
        courseLink: "https://scrimba.com/learn/frontend",
        courseName: "Scrimba Frontend Path"
    },
    {
        id: "color-picker",
        name: "Color Picker",
        type: "web app",
        subtitle: "HTML, CSS & JavaScript",
        image: "/img/color-picker.webp",
        githubUrl: "https://github.com/kodosa7/color-picker-js/",
        liveUrl: "https://kodosa7.github.io/color-picker-js/",
        techIcons: ["fab fa-html5", "fab fa-css3-alt", "fab fa-js"],
        descriptions: [
            "A web app fetching different color sets from a web API and letting users pick combinations that match the chosen color scheme.",
            "Made using HTML/CSS and vanilla JavaScript as an exercise on using APIs. It was a part of the Scrimba Frontend Path course."
        ],
        courseLink: "https://scrimba.com/learn/frontend",
        courseName: "Scrimba Frontend Path"
    },
    {
        id: "mobile-restaurant",
        name: "Mobile Restaurant",
        type: "web app",
        subtitle: "HTML, CSS & JavaScript",
        image: "/img/mobile-restaurant.webp",
        githubUrl: "https://github.com/kodosa7/mobile-restaurant-js/",
        liveUrl: "https://precious-malasada-6a2bc6.netlify.app/",
        techIcons: ["fab fa-html5", "fab fa-css3-alt", "fab fa-js"],
        descriptions: [
            "A web app for ordering food from a local restaurant. Users can choose hamburgers, pizzas or beers, add them to the list and proceed the checkout.",
            "Made using HTML/CSS and vanilla JavaScript as an exercise on using data and forms. It was a part of the Scrimba Frontend Path course."
        ],
        courseLink: "https://scrimba.com/learn/frontend",
        courseName: "Scrimba Frontend Path"
    },
    {
        id: "twimba",
        name: "Twimba",
        type: "web app",
        subtitle: "HTML, CSS & JavaScript",
        image: "/img/twimba.webp",
        githubUrl: "https://github.com/kodosa7/twimba-js/",
        liveUrl: "https://whimsical-taffy-7e5a44.netlify.app/",
        techIcons: ["fab fa-html5", "fab fa-css3-alt", "fab fa-js"],
        descriptions: [
            "A Twitter clone showing tweets from the local object file. Users can click on Like, Retweet or Comment icons. A new tweet can be added to the list.",
            "This project is made using HTML, CSS and vanilla JavaScript. It was an exercise on local data handling as a part of the Scrimba Frontend Path course."
        ],
        courseLink: "https://scrimba.com/learn/frontend",
        courseName: "Scrimba Frontend Path"
    },
    {
        id: "unit-converter",
        name: "Unit Converter",
        type: "web app",
        subtitle: "HTML, CSS & JavaScript",
        image: "/img/unit-converter.webp",
        githubUrl: "https://github.com/kodosa7/unit-converter-js/",
        liveUrl: "https://profound-marigold-60788a.netlify.app/",
        techIcons: ["fab fa-html5", "fab fa-css3-alt", "fab fa-js"],
        descriptions: [
            "It's a simple unit converter web app that allows users to convert meters to feet, liters to gallons, kilograms to pounds and vice versa.",
            "The user enters a number into the form above and it does the conversion by pressing the button. If a non-numeric value is provided, the program throws a warning.",
            "This project was made using HTML, CSS and vanilla JavaScript as a part of the Scrimba Frontend Path course."
        ],
        courseLink: "https://scrimba.com/learn/frontend",
        courseName: "Scrimba Frontend Path"
    }
];

export const creativeProjects = [
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
];
