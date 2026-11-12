const BLADES = 7;
// how far a blade turns
const OPEN_RAD = 57 * Math.PI / 180;
const F_STOPS = ['16', '11', '8', '5.6', '4', '2.8', '1.4'];
// one blade's turn when shutting
const CLOSE_MS = 150;

const app = document.querySelector(".app");
const toggle = document.querySelector("#apertureToggle");
const iris = document.querySelector("#iris");
const fstopReadout = document.querySelector("#fstop");
const menu = document.querySelector("#menu");

let isOpen = false;
let stopIndex = 0;
let closeTimer = null;

// A seven-sided aperture polygon gives the iris its camera-shutter look.
// The polygon grows from a tiny central opening to a broad circular opening.
function aperturePolygon(openAmount) {
  const radius = 4 + openAmount * 45;
  const center = 50;
  const points = [];
  for (let blade = 0; blade < BLADES; blade++) {
    const angle = (-90 + blade * (360 / BLADES)) * Math.PI / 180;
    const x = center + Math.cos(angle) * radius;
    const y = center + Math.sin(angle) * radius;
    points.push(`${x.toFixed(2)}% ${y.toFixed(2)}%`);
  }
  return `polygon(${points.join(", ")})`;
}

function setAperture(open) {
  isOpen = open;
  app.classList.toggle("open", open);
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
  menu.inert = !open;

  if (closeTimer) clearInterval(closeTimer);
  const targetIndex = open ? F_STOPS.length - 1 : 0;
  const startIndex = stopIndex;
  const direction = open ? 1 : -1;
  let step = 0;
  const steps = Math.abs(targetIndex - startIndex);

  if (steps === 0) {
    fstopReadout.textContent = `f/${F_STOPS[targetIndex]}`;
  } else {
    closeTimer = setInterval(() => {
      step++;
      stopIndex = startIndex + direction * step;
      fstopReadout.textContent = `f/${F_STOPS[stopIndex]}`;
      if (step >= steps) {
        clearInterval(closeTimer);
        closeTimer = null;
      }
    }, CLOSE_MS);
  }

  iris.style.clipPath = aperturePolygon(open ? 1 : 0);
}

toggle.addEventListener("click", () => setAperture(!isOpen));

// Escape closes the expanded menu.
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && isOpen) {
    setAperture(false);
    toggle.focus();
  }
});

// Selecting a menu destination closes the iris menu.
menu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => setAperture(false));
});

setAperture(false);
