import AstroIcon from "../components/icons/AstroIcon.astro";
import Bootstrap from "../components/icons/Bootstrap.astro";
import Css from "../components/icons/Css.astro";
import Email from "../components/icons/Email.astro";
import File from "../components/icons/File.astro";
import Html from "../components/icons/Html.astro";
import Javascript from "../components/icons/Javascript.astro";
import Linkedin from "../components/icons/Linkedin.astro";
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
        description: "Pequeño quiz acerca de la banda Imagine Dragons, realizado en JavaScript, con animaciones en CSS.",
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
        title: "Lista con elementos arrastrables",
        description: "Lista de ejemplo para arrastrar y soltar elementos (drag and drog).",
        link: "https://adrianhdez2.github.io/drag/",
        github: "https://github.com/adrianhdez2/drag",
        image: "/img/thumbnails/drag.webp",
        tags: [TAGS.HTML, TAGS.CSS, TAGS.JAVASCRIPT],
    },
    {
        title: "Memorama (Juego) - UJAT",
        description: "Juego clásico de memorana, empleando información relacionada a la Laguna de las Ilusiones, permitiendo así divulgación y concientización sobre su cuidado",
        link: "https://laguna-ilusiones.ujat.mx/memorama-juego/index.html",
        image: "/img/thumbnails/memorama-laguna.webp",
        tags: [TAGS.HTML, TAGS.CSS, TAGS.JAVASCRIPT]
    },
    {
        title: "Operación laguna (Juego) - UJAT",
        description: "Juego de atrapar objetos hecho en JavaScript con el objetivo de concientizar sobre el cuidado de la Laguna de las Ilusiones.",
        link: "https://laguna-ilusiones.ujat.mx/juego-cocodrilo/index.html",
        image: "/img/thumbnails/operacion-laguna.webp",
        tags: [TAGS.HTML, TAGS.CSS, TAGS.JAVASCRIPT]
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
];

export const EXPERIENCIE = [
    {
        date: "Actualmente...",
        title: "Desarrollador Web",
        company: "Universidad Juárez Autonóma de Tabasco",
        description:
            "Colaboro como desarrollador Web y de aplicaciones en el laboratorio de desarrollo de Apps de la División Académica de Ciencias y Tecnologías de la Información",
    },
    {
        date: "Diciembre 2023",
        title: "Colaborador en la Casa Universitaria del Cacao y Chocolate",
        company: "Universidad Juárez Autonóma de Tabasco",
        description:
            "Colaboré como parte del proyecto de desarrollo tecnológico, enfocándome en la creación y desarrollo de aplicaciones web y aplicaciones interactivas. Utilicé la biblioteca Leaflet para integrar mapas interactivos y el motor gráfico Unity con el lenguaje C# para las aplicaciones interactivas.",
        link: "https://casa-cacao.ujat.mx/",
    },
    {
        date: "Noviembre 2023",
        title: "Prestador de Práctica Profesional",
        company: "Universidad Juárez Autonóma de Tabasco",
        description:
            "Realicé mi práctica profesional durante 6 meses, finalizando en abril de 2024, en el laboratorio de desarrollo de Apps de la División Académica de Ciencias y Tecnologías de la Información. Durante este período, tuve la oportunidad de crear una aplicación de realidad aumentada (RA) utilizando Vuforia Engine en conjunto con Unity. Además, como desarrollador web, utilicé tecnologías como Node.js y Express.",
        link: "https://laguna-ilusiones.ujat.mx/app-ra2.html"
    },
    {
        date: "Mayo 2023",
        title: "Colaborador en proyecto de la Laguna de las Ilusiones.",
        company: "Universidad Juárez Autonóma de Tabasco",
        description: "Colaboré en el desarrollo frontend, donde tuve la oportunidad de participar en la creación de dos juegos web. Para el desarrollo de los juegos, utilicé JavaScript y CSS puro, añadiendo un nivel adicional de dinamismo y atractivo visual a los proyectos.",
        link: "https://laguna-ilusiones.ujat.mx/"
    },
    {
        date: "Marzo 2023",
        title: "Prestador de Servicio social",
        company: "Universidad Juárez Autonóma de Tabasco",
        description:
            "Realicé mi servicio social durante 6 meses, finalizando en agosto de 2023, en el laboratorio de desarrollo de Apps de la División Académica de Ciencias y Tecnologías de la Información. Durante este período, reafirmé mis habilidades como desarrollador frontend utilizando frameworks como React JS y Astro, y aporté ideas y consejos a mis compañeros. Además, mis competencias en CSS y JavaScript crecieron significativamente, permitiéndome contribuir de manera más efectiva a los proyectos del laboratorio.",
        link: "https://laguna-ilusiones.ujat.mx/"

    },
];

export const HREF = [
    {
        title: "Contáctame",
        class: "size-4",
        path: "mailto:cesarahh3@gmail.com",
        icon: Email,
    },
    {
        title: "Mi CV",
        class: "size-4",
        path: "",
        icon: File,
    },
    {
        title: "LinkedIn",
        class: "size-4",
        path: "https://www.linkedin.com/in/adrianh2/",
        icon: Linkedin,
    },
];

export const LINKS = [
    {
        name: "Experiencia",
        label: "experience",
        path: "#experience",
    },
    {
        name: "Proyectos",
        label: "projectos",
        path: "#projects",
    },
    {
        name: "Sobre mí",
        label: "sobre mí",
        path: "#about-me",
    },
    {
        name: "Contacto",
        label: "contacto",
        path: "mailto:cesarahh3@gmail.com",
    },
];