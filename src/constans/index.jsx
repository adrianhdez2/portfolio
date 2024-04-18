import AstroIcon from "../components/icons/AstroIcon.astro";
import Bootstrap from "../components/icons/Bootstrap.astro";
import Css from "../components/icons/Css.astro";
import Html from "../components/icons/Html.astro";
import Javascript from "../components/icons/Javascript.astro";
import Php from "../components/icons/Php.astro";
import React from "../components/icons/React.astro";
import Tailwind from "../components/icons/Tailwind.astro";

export const TAGS = {
    ASTRO: {
        name: "Astro",
        class: "bg-violet-800/50",
        icon: AstroIcon,
    },
    BOOTSTRAP: {
        name: "Bootstrap",
        class: "bg-violet-900/50",
        icon: Bootstrap,
    },
    CSS: {
        name: "CSS",
        class: "bg-sky-800/50",
        icon: Css,
    },
    HTML: {
        name: "HTML",
        class: "bg-orange-700/50",
        icon: Html,
    },
    JAVASCRIPT: {
        name: "JavaScript",
        class: "bg-yellow-700/50",
        icon: Javascript,
    },
    PHP: {
        name: "PHP",
        class: "bg-sky-900/50",
        icon: Php,
    },
    REACT: {
        name: "React",
        class: "bg-sky-800/50",
        icon: React,
    },
    TAILWIND: {
        name: "Tailwind CSS",
        class: "bg-sky-700/50",
        icon: Tailwind,
    },
};

export const PROJECTS = [
    {
        title: "Web PescArte - UJAT",
        description: "",
        link: "https://pescarte.ujat.mx/",
        image: "/img/thumbnails/pescarte.webp",
        tags: [
            TAGS.HTML,
            TAGS.ASTRO,
            TAGS.TAILWIND,
            TAGS.JAVASCRIPT,
            TAGS.REACT,
        ],
    },
    {
        title: "Quiz App",
        description: "",
        link: "https://quiz-app-orpin-phi.vercel.app/",
        github: "https://github.com/adrianhdez2/quiz-app",
        image: "/img/thumbnails/app-quiz.webp",
        tags: [
            TAGS.HTML,
            TAGS.CSS,
            TAGS.JAVASCRIPT
        ],
    },
    {
        title: "Shopping Cart",
        description: "",
        link: "https://shopping-cart-steel-mu.vercel.app/",
        github: "https://github.com/adrianhdez2/shopping-cart",
        image: "/img/thumbnails/shopping.webp",
        tags: [TAGS.HTML, TAGS.CSS, TAGS.JAVASCRIPT, TAGS.REACT]
    },
    {
        title: "E-commerce Veterinaria",
        description: "",
        link: "https://veterinarialvl.000webhostapp.com/",
        image: "/img/thumbnails/veterinaria.webp",
        tags: [TAGS.HTML, TAGS.CSS, TAGS.JAVASCRIPT, TAGS.BOOTSTRAP, TAGS.PHP],
    },    
    {
        title: "Github profiles",
        description: "",
        link: "https://adrianhdez2.github.io/github-profile/",
        github: "https://github.com/adrianhdez2/github-profile",
        image: "/img/thumbnails/github.webp",
        tags: [TAGS.HTML, TAGS.CSS, TAGS.JAVASCRIPT],
    },
    {
        title: "Pokémon Game",
        description: "",
        link: "https://adrianhdez2.github.io/pokemonGame/",
        github: "https://github.com/adrianhdez2/pokemonGame",
        image: "/img/thumbnails/pokemon.webp",
        tags: [TAGS.HTML, TAGS.CSS, TAGS.JAVASCRIPT],
    },
    {
        title: "Calculadora",
        description: "",
        link: "https://adrianhdez2.github.io/calculadora/",
        github: "https://github.com/adrianhdez2/calculadora",
        image: "/img/thumbnails/calculadora.webp",
        tags: [TAGS.HTML, TAGS.CSS, TAGS.JAVASCRIPT],
    },
    {
        title: "TODO List",
        description: "",
        link: "https://adrianhdez2.github.io/TODO-list/",
        github: "https://github.com/adrianhdez2/TODO-list",
        image: "/img/thumbnails/TODO.webp",
        tags: [TAGS.HTML, TAGS.CSS, TAGS.JAVASCRIPT],
    },
    {
        title: "Memory Game",
        description: "",
        link: "https://adrianhdez2.github.io/memorama/",
        github: "https://github.com/adrianhdez2/memorama",
        image: "/img/thumbnails/memory.webp",
        tags: [TAGS.HTML, TAGS.CSS, TAGS.JAVASCRIPT],
    },
    {
        title: "Tic Tac Toe",
        description: "",
        link: "https://adrianhdez2.github.io/tictactoe/",
        github: "https://github.com/adrianhdez2/tictactoe",
        image: "/img/thumbnails/tic-tac-toe.webp",
        tags: [TAGS.HTML, TAGS.CSS, TAGS.JAVASCRIPT],
    },
    {
        title: "Rock Paper Scissors",
        description: "",
        link: "https://adrianhdez2.github.io/scissors/",
        github: "https://github.com/adrianhdez2/scissors",
        image: "/img/thumbnails/r-p-s.webp",
        tags: [TAGS.HTML, TAGS.CSS, TAGS.JAVASCRIPT],
    },
    {
        title: "Drag list",
        description: "",
        link: "https://adrianhdez2.github.io/drag/",
        github: "https://github.com/adrianhdez2/drag",
        image: "/img/thumbnails/drag.webp",
        tags: [TAGS.HTML, TAGS.CSS, TAGS.JAVASCRIPT],
    },
    {
        title: "Digital Clock",
        description: "",
        link: "https://adrianhdez2.github.io/Reloj/",
        github: "https://github.com/adrianhdez2/Reloj",
        image: "/img/thumbnails/clock.webp",
        tags: [TAGS.HTML, TAGS.CSS, TAGS.JAVASCRIPT],
    },
];