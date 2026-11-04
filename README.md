# Portfolio

My personal portfolio page, built with plain HTML, CSS and JavaScript (no frameworks).

## Sections
About, Skills, Projects, Contact.

## Features
- Responsive layout (works on phones and laptops)
- Light and dark theme, remembered in the browser
- Skills and projects are built from two lists in `script.js`, so adding a project means adding one object

## How to run
Open `index.html` in any browser. No install needed.

## How to publish (GitHub Pages)
Repository Settings, Pages, Source: "Deploy from a branch", Branch: `main`, folder `/ (root)`.

## How it works
- `index.html`: the page structure.
- `style.css`: colors are CSS variables; the dark theme only changes the variables.
- `script.js`: the `skills` and `projects` arrays are turned into elements; the theme button switches `data-theme` and saves the choice in `localStorage`.

## Author
Melad Gamal Todri, Computer Science student, Assiut University.
