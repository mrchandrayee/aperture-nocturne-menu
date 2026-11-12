# Nocturne — Aperture Menu

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/aperture-nocturne-menu/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A runnable reconstruction of the uploaded 5.8-second video.

## Video observations

The video shows a dark premium camera-studio landing page branded **Nocturne**. The header contains a small circular camera aperture control and an f-stop readout. Clicking the aperture opens a full-screen navigation menu through a camera-shutter animation.

Visible menu:
- Work
- Studio
- Journal
- About
- Contact

Visible hero:
- Shoot
- Spring collection, shot on film

Contact:
- Nocturne Cameras, Berlin
- hello@nocturne.camera

The three code panels are labelled `index.html`, `aperture.css`, and `aperture.js`.

## Readable JavaScript values transcribed from the video

```js
const BLADES = 7;
const OPEN_RAD = 57 * Math.PI / 180;
const F_STOPS = ['16', '11', '8', '5.6', '4', '2.8', '1.4'];
const CLOSE_MS = 150;
```

The visible CSS panel also shows an `.aperture-flash` overlay with fixed positioning and an opacity of zero. The reconstruction uses a CSS iris polygon and animated f-stop readout to reproduce the observed opening/closing effect.

## Features

- Camera-lens aperture toggle.
- Seven-blade shutter-inspired iris animation.
- F-stop readout animates from f/16 to f/1.4.
- Navigation reveal and close.
- Escape key closes the menu.
- Menu links close the aperture after selection.
- Responsive dark landing page.
- No external dependencies.

## Run locally

```bash
python -m http.server 8000
```

Open http://localhost:8000

## Project structure

```text
aperture-nocturne-menu/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Accuracy note

The JavaScript constants above are transcribed from the readable code panel. The full original source is not legible in the short video, so the remaining code is a functional reconstruction of the visible layout and behavior, not a verbatim extraction.
