class Footer {
  constructor() {
    const footer = document.getElementById("footer");
    footer.innerHTML = `<div>${new Date().toLocaleString(
      "hu-HU",
      this.dateConfig
    )}</div>
            <div>Szalontai Jordán</div>`;
    return Promise.resolve();
  }

  static template = `<footer id="footer"></footer>`;

  dateConfig = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
}

export default Footer;
