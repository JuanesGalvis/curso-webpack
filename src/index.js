import Template from '@templates/Template.js';
import '@styles/main.css';
import '@styles/style.sass';

console.log("Probando Webpack Watch");

(async function App() {
  const main = null || document.getElementById('main');
  main.innerHTML = await Template();
})();
