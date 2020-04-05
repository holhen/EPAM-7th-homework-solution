import Footer from "./components/footer.js";
import Header from "./components/header.js";
import Main from "./components/main.js";

(function () {
  document.getElementById("root").innerHTML = `
        ${Header.template}
        ${Main.template}
        ${Footer.template}
    `;

  Promise.all([new Header(), new Main(), new Footer()]);
})();
