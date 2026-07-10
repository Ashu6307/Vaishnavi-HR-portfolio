export function ThemeScript() {
  const code = `
    try {
      var stored = localStorage.getItem("vj-theme");
      var systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      var theme = stored === "light" || stored === "dark" ? stored : (systemDark ? "dark" : "light");
      document.documentElement.dataset.theme = theme;
    } catch (error) {
      document.documentElement.dataset.theme = "light";
    }
  `;

  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
