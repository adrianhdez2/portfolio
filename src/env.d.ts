/// <reference types="astro/client" />

declare module '*.astro' {
    import { AstroComponentFactory } from 'astro';
    const Component: AstroComponentFactory;
    export default Component;
}
