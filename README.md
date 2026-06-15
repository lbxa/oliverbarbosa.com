# Oliver Chu Barbosa

Civil engineering portfolio website for Oliver Chu Barbosa, an undergraduate civil engineering student at UNSW.

The site presents Oliver's selected engineering work across geotechnical, structural, architectural, environmental, and mechanical design projects. It is built as a static Astro site and includes responsive project galleries with an image lightbox.

## Live Site

https://oliverbarbosa.com

## Portfolio Content

The portfolio currently includes:

- Contaminated Parramatta Light Rail Yard Solution: remediation option screening, concrete water tank design, retaining wall concepts, and bored pile foundation design.
- House and Complex Revit Designs: residential and community-building Revit models, documentation sheets, plans, elevations, schedules, and takeoffs.
- Morphing Airfoil: CAD modelling, compliant mechanism design, Arduino-driven testing, and wind tunnel validation.

Key capability areas shown on the site include remediation option screening, structural calculations, Revit documentation, CAD modelling, Australian Standards work, and technical reporting.

## Tech Stack

- Astro
- Static HTML, CSS, and JavaScript
- Public assets served from `public/assets`
- Open Graph and Twitter card metadata for link previews

## Local Development

This project uses Bun and requires Node.js `>=22.12.0`.

```sh
bun install
bun run dev
```

Open the local development server shown in the terminal, usually:

```txt
http://localhost:4321
```

## Build

```sh
bun run build
```

The static site is generated into `dist/`.

To preview the production build locally:

```sh
bun run preview
```

## Project Structure

```txt
public/
  assets/          Portfolio images and project gallery assets
  favicon.ico
  favicon.svg
  script.js        Lightbox behavior
  styles.css       Site styling
src/
  pages/
    index.astro    Homepage markup and metadata
```

## Notes

The link preview image is configured in `src/pages/index.astro` using Open Graph metadata and points to:

```txt
https://oliverbarbosa.com/assets/portfolio-collage.jpg
```
