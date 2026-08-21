/**
 * Czech Locale Data (Čeština)
 */

export const cs = {
    meta: {
        title: "Ella Šenovská – Portfolio",
        description: "Portfolio Elly Šenovské – design, frontendový vývoj, audiovizuální technologie a digitální umění."
    },
    nav: {
        toggleAria: "přepnout navigační menu",
        home: "Domů",
        about: "O mně",
        services: "Dovednosti a služby",
        projects: "Projekty"
    },
    intro: {
        firstName: "Ella",
        lastName: "Šenov&shy;ská",
        subtitleKeywords: ["Fokus", "Preciznost", "Smysl pro detail"],
        imgAlt: "Ella Šenovská"
    },
    about: {
        title: "Kdo jsem",
        p1: `Jsem kreativní technoložka se zálibou v <strong class="highlighted highlighted--light">preciznosti</strong>, <strong class="highlighted highlighted--light">řešení problémů</strong> a důrazem na <strong class="highlighted highlighted--light">detail</strong>. Má práce propojuje frontendový vývoj webu, vizuální design a praktické technické objevování s kořeny v komunitě <a class="highlighted highlighted--light" href="https://cs.wikipedia.org/wiki/Demosc%C3%A9na" target="_blank" rel="noopener noreferrer">demoscény</a> a lokálního hackerspace.`,
        p2: `Baví mě zkoumat, jak věci fungují pod kapotou – ať už jde o psaní čistého frontendového kódu, navrhování 3D modelů pro tisk nebo bastlení s hardwarem. Moje projekty sahají od modifikací LED podsvícení digitálních hodinek až po diagnostiku a restaurování historického počítačového hardwaru a běžných IT systémů.`,
        p3: `K řešení problémů přistupuji trpělivě a systematicky: testuji, iteruji a hledám praktická řešení technických výzev. Neustále se ráda učím novým věcem, stavím a tvořím vizuálně vybroušená a spolehlivá řešení.`,
        resumeBtn: "Můj životopis",
        projectsBtn: "Projekty"
    },
    services: {
        title: "Co dělám",
        design: {
            title: "Design a Frontend",
            text: `Vytvářím responzivní, uživatelsky přívětivé webové aplikace s využitím <strong class="highlighted">HTML</strong>, <strong class="highlighted">CSS/SCSS</strong>, <strong class="highlighted">JavaScriptu</strong> a <strong class="highlighted">Reactu</strong>. V designu se zaměřuji na přehlednost, čistou typografii, estetickou přesnost a pečlivý smysl pro detail.`
        },
        hardware: {
            title: "Hardware a technologie",
            text: `Díky zkušenostem z hackerspace projektů a IT podpory se věnuji 3D modelování pro tisk, hardwarovým modifikacím, AV technice a opravám počítačů. K diagnostice a řešení hardwarových i softwarových potíží přistupuji metodicky s důrazem na důkladné testování.`
        }
    },
    portfolio: {
        digitalHeading: "Vybrané digitální projekty",
        digitalSubtitle: "Frontend, design a multimediální tvorba",
        creativeHeading: "Kreativní a experimentální tvorba",
        creativeSubtitle: "Grafika, retro počítače a projekty spojené s demoscénou"
    },
    carousel: {
        prevAria: "Předchozí projekty",
        nextAria: "Další projekty",
        dotAria: "Přejít na snímek"
    },
    modal: {
        closeAria: "Zavřít okno",
        githubBtn: "GitHub repozitář",
        liveBtn: "Živá verze",
        backToMain: "Zpět na úvod",
        prevProject: "Předchozí projekt",
        nextProject: "Další projekt"
    },
    askForCv: {
        id: "askforcv",
        name: "napište mi, prosím",
        type: "",
        subtitle: "",
        descriptions: [
            "Životopisy obsahují osobní údaje. Z bezpečnostních důvodů proto již není možné stáhnout mé CV přímo z tohoto webu. Můžete mě však kdykoliv kontaktovat a já vám jej ráda zašlu e-mailem – samozřejmě za předpokladu, že žadatele vyhodnotím jako důvěryhodného a poradíte si s drobnou antispamovou ochranou."
        ]
    },
    footer: {
        contact: "Kontakt"
    },
    digitalProjects: [
        {
            id: "eshop",
            name: "E-Shop",
            type: "webová aplikace",
            subtitle: "React, Bootstrap",
            image: "/img/eshop.webp",
            githubUrl: "https://github.com/kodosa7/eshop/",
            liveUrl: "https://els-eshop.netlify.app/",
            techIcons: ["fab fa-react", "fa-brands fa-bootstrap"],
            descriptions: [
                "Ukázková aplikace e-shopu se základní funkcionalitou nákupu položky a vytvoření fiktivní objednávky. Aplikace načítá data z API a má responzivní design.",
                "Projekt byl vytvořen v rámci kurzu CoreSkill Mentroingový Program a využívá React a Bootstrap."
            ],
            courseLink: "https://coreskill.tech",
            courseName: "CoreSkill"
        },
        {
            id: "dev-bugflow",
            name: "Dev BugFlow",
            type: "webová aplikace",
            subtitle: "React, TailwindCSS",
            image: "/img/devbugflow.webp",
            githubUrl: "https://github.com/kodosa7/bug-flow/",
            liveUrl: "https://devbugflow.netlify.app/",
            techIcons: ["fab fa-react", "custom-tailwind"],
            descriptions: [
                "Webová aplikace, která pomáhá vývojářům vizuálně v krocích reportovat průběh chyb přidáváním screenshotů a textových popisků a jejich exportem jako obrázkový postup do schránky nebo souboru, což usnadňuje sdílení na sociálních sítích.",
                "Projekt byl vytvořen pomocí Reactu a TailwindCSS."
            ]
        },
        {
            id: "c64colquiz",
            name: "C64ColQuiz",
            type: "webová hra",
            subtitle: "HTML, CSS & JavaScript",
            image: "/img/c64colquiz.webp",
            githubUrl: "https://github.com/kodosa7/c64colquiz-js/",
            liveUrl: "https://taupe-melomakarona-5d005b.netlify.app/",
            techIcons: ["fab fa-html5", "fab fa-css3-alt", "fab fa-js"],
            descriptions: [
                "Webová hra založená na retro hře pro počítač Commodore 64 s názvem C64 Color Quiz. Je vytvořena v čistém JavaScriptu a CSS s využitím Flexboxu a CSS proměnných. Vznikla nezávisle jako volnočasový projekt.",
                "Snaží se věrně napodobit původní vizuální stránku stejně jako na originálním počítači. Zvuky jsou rovněž nasamplovány přímo z původního stroje.",
                "Dokončení projektu mi trvalo přibližně 3 týdny a využívá výhradně funkcionální programování v JavaScriptu."
            ]
        },
        {
            id: "demoparty-info-website",
            name: "Demoparty Info Website",
            type: "webová stránka",
            subtitle: "HTML, CSS & JavaScript",
            image: "/img/demoparty-info-website.webp",
            githubUrl: "https://github.com/kodosa7/jobj42/",
            liveUrl: "https://jobj42-dev.netlify.app/",
            techIcons: ["fab fa-html5", "fab fa-css3-alt", "fab fa-js"],
            descriptions: [
                "Statický informační web pro demoparty akci, který zve návštěvníky a poskytuje jim základní informace o místě konání. Plně responzivní.",
                "Vytvořeno pomocí HTML, CSS a čistého JavaScriptu."
            ]
        }
    ],
    creativeProjects: [
        {
            id: "fruitypete",
            name: "Homebrew herní design",
            subtitle: "Commodore 64 a retro hry",
            image: "/img/fruitypete.webp",
            externalUrl: "https://www.youtube.com/watch?v=ZlyazBbdAe4"
        },
        {
            id: "vectorgraphics",
            name: "Vektorová grafika",
            subtitle: "Branding a vizuální tvorba",
            image: "/img/vectorgraphics.webp",
            externalUrl: "https://www.behance.net/gallery/142479359/My-Portfolio"
        },
        {
            id: "pixelgraphics",
            name: "Pixelová grafika",
            subtitle: "Retro pixel art a demoscéna",
            image: "/img/pixelgraphics.webp",
            externalUrl: "https://zxart.ee/spa/autores/a/aki/"
        },
        {
            id: "textmode-graphics",
            name: "Grafika v textovém režimu",
            subtitle: "PETSCII a ASCII tvorba",
            image: "/img/textmode-graphics.webp",
            externalUrl: "https://demozoo.org/graphics/361911/"
        },
        {
            id: "3dprint",
            name: "3D tisk a modely",
            subtitle: "3D hardware a fyzické výtisky",
            image: "/img/3dprint.webp",
            externalUrl: null
        },
        {
            id: "demosceneawards",
            name: "Ocenění z demoscény",
            subtitle: "Mezinárodní soutěže digitálního umění",
            image: "/img/demosceneawards.webp",
            externalUrl: "https://2024.revision-party.net/"
        }
    ]
};
