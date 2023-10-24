import { HandleTask } from "./components/HandleTask";
import { ToggleTheme } from "./components/ToggleTheme";
import { ThemeDataProvider } from "./themes/LightOrDarkModeTheme";

export const App = () => {
    return (
        <ThemeDataProvider>
            <HandleTask />
            <ToggleTheme />
        </ThemeDataProvider>
    );
};
