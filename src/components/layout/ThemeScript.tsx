export function ThemeScript() {
  const code = `
    try {
      document.documentElement.classList.add("js");
      var stored = localStorage.getItem("vj-theme");
      var systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      var theme = stored === "light" || stored === "dark" ? stored : (systemDark ? "dark" : "light");
      document.documentElement.dataset.theme = theme;
      document.documentElement.style.colorScheme = theme;
      document.documentElement.dataset.themeBoot = "true";
      requestAnimationFrame(function () {
        delete document.documentElement.dataset.themeBoot;
      });
    } catch (error) {
      document.documentElement.dataset.theme = "light";
      document.documentElement.style.colorScheme = "light";
    }
  `;

  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
