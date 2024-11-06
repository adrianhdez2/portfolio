import AstroIcon from "../components/icons/AstroIcon.astro";
export type TagKey = "ASTRO" | "BOOTSTRAP" | "CSS" | "HTML" | "JAVASCRIPT" | "PHP" | "REACT" | "TAILWIND";

export interface Project {
    title: string;
    description: string;
    link?: string;
    github?: string;
    image: string;
    tags: Tag[];
}

export interface Tag {
    name: string;
    class: string;
    icon: typeof AstroIcon;

}

export interface Experience {
    date: string;
    title: string;
    company: string;
    description: string;
    link?: string;
}

export interface LinkItem {
    title: string;
    class: string;
    path: string;
    download: boolean;
    icon: typeof AstroIcon;
}

export interface NavigationLink {
    name: string;
    label: string;
    path: string;
}