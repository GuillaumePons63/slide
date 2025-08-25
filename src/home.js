import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/solarized.css';
import "./home.css";

document.addEventListener("DOMContentLoaded", showAllAvailableSlides);

async function showAllAvailableSlides() {
  const files = import.meta.glob('../slides/**/*.md');
  const slides = Object.keys(files)
    .map(filename => filename.replace("\.\./slides/", ""))
    .map(filename => filename.replace("\.md", ""))
    .map(filename => `<li><a href="/slides?filename=${filename}">${filename}</a></li>`)
    .join("");
  
  document.querySelector("ul").innerHTML = slides;
}
