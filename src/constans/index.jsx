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
        description: "PescArte, una red itinerante para la conservación sustentable de organismos acuáticos de Tabasco. Página (Single Page Application) para la Universidad Juárez Autonóma de Tabasco. Realizada con Astro y React JS",
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
        description: "Peuqeño quiz acerca de la banda Imagine Dragons, realizado en JavaScript, con animaciones en CSS.",
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
        title: "Hangman Game",
        description: "Juego clásico de adivinar palabras, con cierto limite de intentos, realizado en JavaScript (En PC puede utilizarse el teclado físico).",
        link: "https://adrianhdez2.github.io/hangman-game/",
        github: "https://github.com/adrianhdez2/hangman-game",
        image: "/img/thumbnails/ahorcado.webp",
        tags: [TAGS.HTML, TAGS.CSS, TAGS.JAVASCRIPT]
    },
    {
        title: "Carrito de compras",
        description: "Carrito de compras funcional, realizado en React JS utilizando el hook useContext, así como de local storage, y Fake Store API (API de tienda ficticia).",
        link: "https://shopping-cart-steel-mu.vercel.app/",
        github: "https://github.com/adrianhdez2/shopping-cart",
        image: "/img/thumbnails/shopping.webp",
        tags: [TAGS.HTML, TAGS.CSS, TAGS.JAVASCRIPT, TAGS.REACT]
    },
    {
        title: "E-commerce Veterinaria",
        description: "Diseño UI para un ecommerce de una veterinaria, el diseño se realizó con Bootstrap y para su funcionamiento PHP y MySQL.",
        // link: "https://veterinarialvl.000webhostapp.com/",
        github: "https://github.com/adrianhdez2/veterinaria",
        image: "/img/thumbnails/veterinaria.webp",
        tags: [TAGS.HTML, TAGS.CSS, TAGS.JAVASCRIPT, TAGS.BOOTSTRAP, TAGS.PHP],
    },
    {
        title: "Buscador de perfiles Github",
        description: "Buscador de perfiles de GitHub, realizado en JavaScript, utilizando fetch y la API de GitHub",
        link: "https://adrianhdez2.github.io/github-profile/",
        github: "https://github.com/adrianhdez2/github-profile",
        image: "/img/thumbnails/github.webp",
        tags: [TAGS.HTML, TAGS.CSS, TAGS.JAVASCRIPT],
    },
    {
        title: "Pokémon Game",
        description: "Juego de palabras relacionado a pokémon (ordenar la palabra relacionada a la imagen del pokémon), realizado con JavaScript utilizando local storage, fetch y la API gratis de pokémon (PokéAPI)",
        link: "https://adrianhdez2.github.io/pokemonGame/",
        github: "https://github.com/adrianhdez2/pokemonGame",
        image: "/img/thumbnails/pokemon.webp",
        tags: [TAGS.HTML, TAGS.CSS, TAGS.JAVASCRIPT],
    },
    {
        title: "Calculadora",
        description: "Calculadora básica elaborada con JavaScript, puede realizar operaciones como: suma, resta, multiplicacón y división.",
        link: "https://adrianhdez2.github.io/calculadora/",
        github: "https://github.com/adrianhdez2/calculadora",
        image: "/img/thumbnails/calculadora.webp",
        tags: [TAGS.HTML, TAGS.CSS, TAGS.JAVASCRIPT],
    },
    {
        title: "TODO List",
        description: "Lista TODO, empleando funciones en JavaScript como doble click y usando local storage.",
        link: "https://adrianhdez2.github.io/TODO-list/",
        github: "https://github.com/adrianhdez2/TODO-list",
        image: "/img/thumbnails/TODO.webp",
        tags: [TAGS.HTML, TAGS.CSS, TAGS.JAVASCRIPT],
    },
    {
        title: "Juego de memoria",
        description: "Juego clásico de memoria, elaborado con JavaScript, con animaciones en CSS, ademas incluyendo sonidos.",
        link: "https://adrianhdez2.github.io/memorama/",
        github: "https://github.com/adrianhdez2/memorama",
        image: "/img/thumbnails/memory.webp",
        tags: [TAGS.HTML, TAGS.CSS, TAGS.JAVASCRIPT],
    },
    {
        title: "Tic Tac Toe",
        description: "Juego clásico elaborado con JavaScript, con diferentes animaciones en CSS, con infinitas posibilidades de juego, para 2 personas.",
        link: "https://adrianhdez2.github.io/tictactoe/",
        github: "https://github.com/adrianhdez2/tictactoe",
        image: "/img/thumbnails/tic-tac-toe.webp",
        tags: [TAGS.HTML, TAGS.CSS, TAGS.JAVASCRIPT],
    },
    {
        title: "Piedra, Papel o Tijeras",
        description: "Juego clásico elaborado con JavaScript, con el modo de juego vs la máquina.",
        link: "https://adrianhdez2.github.io/scissors/",
        github: "https://github.com/adrianhdez2/scissors",
        image: "/img/thumbnails/r-p-s.webp",
        tags: [TAGS.HTML, TAGS.CSS, TAGS.JAVASCRIPT],
    },
    {
        title: "Lista con elementos arrastrables",
        description: "Lista de ejemplo para arrastrar y soltar elementos (drag and drog).",
        link: "https://adrianhdez2.github.io/drag/",
        github: "https://github.com/adrianhdez2/drag",
        image: "/img/thumbnails/drag.webp",
        tags: [TAGS.HTML, TAGS.CSS, TAGS.JAVASCRIPT],
    },
    {
        title: "Reloj Digital",
        description: "Reloj digital que muestra la hora y fecha actuales.",
        link: "https://adrianhdez2.github.io/Reloj/",
        github: "https://github.com/adrianhdez2/Reloj",
        image: "/img/thumbnails/clock.webp",
        tags: [TAGS.HTML, TAGS.CSS, TAGS.JAVASCRIPT],
    },
];