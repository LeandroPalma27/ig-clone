import { useTheme } from "../../../app/providers/ThemeProvider";
import { HelloMessage } from "../components/HelloMessage";

export const HelloPage = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <main>
      <HelloMessage />
      <button onClick={toggleTheme}>
        Cambiar a {theme === "light" ? "dark" : "light"}
      </button>
    </main>
  );
};
