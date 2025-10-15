import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/solarized.css';
import "./home.css";

document.addEventListener("DOMContentLoaded", showAllAvailableSlides);

async function showAllAvailableSlides() {
  const files = import.meta.glob('../slides/**/*.md');
  const filesByFolder = {};
  
  // Group files by folder
  Object.keys(files)
    .map(filename => filename.replace("../slides/", ""))
    .map(filename => filename.replace(".md", ""))
    .forEach(filename => {
      const parts = filename.split('/');
      const title = parts[parts.length - 1];
      const folder = parts.length > 1 ? parts[0] : 'Sans catégorie';
      
      if (!filesByFolder[folder]) {
        filesByFolder[folder] = [];
      }
      
      filesByFolder[folder].push({
        filename: filename,
        title: title
      });
    });
  
  // Generate HTML with folders as titles
  const html = Object.keys(filesByFolder)
    .map(folder => {
      const fileList = filesByFolder[folder]
        .map(file => `<li><a href="/slides?filename=${file.filename}">${file.title}</a></li>`)
        .join("");
      return `<h2>${folder}</h2><ul>${fileList}</ul>`;
    })
    .join("");
  
  document.querySelector("ul").innerHTML = html;
}
