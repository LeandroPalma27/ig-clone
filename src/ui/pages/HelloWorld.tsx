import { useTheme } from "../../app/providers/ThemeProvider";

export default function HelloWorld() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme}>
      Cambiar a {theme === "light" ? "dark" : "light"}
    </button>
  );
}
