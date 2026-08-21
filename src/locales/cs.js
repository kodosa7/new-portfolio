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
        },
        {
            id: "quizzical",
            name: "Quizzical",
            type: "webová aplikace",
            subtitle: "React",
            image: "/img/quizzical.webp",
            githubUrl: "https://github.com/kodosa7/quizzical/",
            liveUrl: "https://playful-piroshki-6ccf14.netlify.app/",
            techIcons: ["fab fa-react", "fab fa-css3-alt"],
            descriptions: [
                "Mini kvízová webová aplikace načítající náhodnou sadu otázek z webového API a vyhodnocující odpovědi uživatele.",
                "Projekt využívá komponenty a React hooky jako useState a useEffect. Jednalo se o samostatný React projekt v rámci kurzu Scrimba Frontend Path."
            ],
            courseLink: "https://scrimba.com/learn/frontend",
            courseName: "Scrimba Frontend Path"
        },
        {
            id: "travel-journal",
            name: "Travel Journal",
            type: "webová aplikace",
            subtitle: "React",
            image: "/img/travel-journal.webp",
            githubUrl: "https://github.com/kodosa7/travel-journal/",
            liveUrl: "https://superlative-mooncake-bede24.netlify.app/",
            techIcons: ["fab fa-react", "fab fa-css3-alt"],
            descriptions: [
                "Ukázková aplikace pro plánování cestování zobrazující různé destinace.",
                "Jednalo se o samostatný projekt kapitoly základů Reactu v kurzu Scrimba Frontend Path. Využívá komponenty Reactu."
            ],
            courseLink: "https://scrimba.com/learn/frontend",
            courseName: "Scrimba Frontend Path"
        },
        {
            id: "color-picker",
            name: "Color Picker",
            type: "webová aplikace",
            subtitle: "HTML, CSS & JavaScript",
            image: "/img/color-picker.webp",
            githubUrl: "https://github.com/kodosa7/color-picker-js/",
            liveUrl: "https://kodosa7.github.io/color-picker-js/",
            techIcons: ["fab fa-html5", "fab fa-css3-alt", "fab fa-js"],
            descriptions: [
                "Webová aplikace načítající různé sady barev z webového API, která uživatelům umožňuje vybírat kombinace odpovídající zvolenému barevnému schématu.",
                "Vytvořeno pomocí HTML/CSS a čistého JavaScriptu jako cvičení na práci s API v rámci kurzu Scrimba Frontend Path."
            ],
            courseLink: "https://scrimba.com/learn/frontend",
            courseName: "Scrimba Frontend Path"
        },
        {
            id: "mobile-restaurant",
            name: "Mobile Restaurant",
            type: "webová aplikace",
            subtitle: "HTML, CSS & JavaScript",
            image: "/img/mobile-restaurant.webp",
            githubUrl: "https://github.com/kodosa7/mobile-restaurant-js/",
            liveUrl: "https://precious-malasada-6a2bc6.netlify.app/",
            techIcons: ["fab fa-html5", "fab fa-css3-alt", "fab fa-js"],
            descriptions: [
                "Webová aplikace pro objednávání jídla z lokální restaurace. Uživatelé si mohou vybrat hamburgery, pizzu nebo pivo, přidat je do košíku a dokončit objednávku.",
                "Vytvořeno pomocí HTML/CSS a čistého JavaScriptu jako cvičení na práci s daty a formuláři v rámci kurzu Scrimba Frontend Path."
            ],
            courseLink: "https://scrimba.com/learn/frontend",
            courseName: "Scrimba Frontend Path"
        },
        {
            id: "twimba",
            name: "Twimba",
            type: "webová aplikace",
            subtitle: "HTML, CSS & JavaScript",
            image: "/img/twimba.webp",
            githubUrl: "https://github.com/kodosa7/twimba-js/",
            liveUrl: "https://whimsical-taffy-7e5a44.netlify.app/",
            techIcons: ["fab fa-html5", "fab fa-css3-alt", "fab fa-js"],
            descriptions: [
                "Klon Twitteru zobrazující tweety z lokálního datového souboru. Uživatelé mohou lajkovat, retweetovat nebo komentovat. Do seznamu lze přidat i nový tweet.",
                "Tento projekt je vytvořen pomocí HTML, CSS a čistého JavaScriptu jako cvičení na práci s lokálními daty v kurzu Scrimba Frontend Path."
            ],
            courseLink: "https://scrimba.com/learn/frontend",
            courseName: "Scrimba Frontend Path"
        },
        {
            id: "unit-converter",
            name: "Unit Converter",
            type: "webová aplikace",
            subtitle: "HTML, CSS & JavaScript",
            image: "/img/unit-converter.webp",
            githubUrl: "https://github.com/kodosa7/unit-converter-js/",
            liveUrl: "https://profound-marigold-60788a.netlify.app/",
            techIcons: ["fab fa-html5", "fab fa-css3-alt", "fab fa-js"],
            descriptions: [
                "Jednoduchá webová aplikace převodníku jednotek, která umožňuje převádět metry na stopy, litry na galony, kilogramy na libry a naopak.",
                "Uživatel zadá číslo do formuláře a stisknutím tlačítka provede převod. Pokud je zadána nečíselná hodnota, program zobrazí upozornění.",
                "Tento projekt byl vytvořen pomocí HTML, CSS a čistého JavaScriptu v rámci kurzu Scrimba Frontend Path."
            ],
            courseLink: "https://scrimba.com/learn/frontend",
            courseName: "Scrimba Frontend Path"
        }
    ],
    creativeProjects: [
        {
            id: "fruitypete",
            name: "Homebrew herní design",
            subtitle: "Atari a retro hry",
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
