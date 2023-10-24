import { createContext, useContext, useState } from "react";

const ThemeDataContext = createContext();

export const ThemeDataProvider = ({ children }) => {
    const [newTheme, setNewTheme] = useState("light");

    // Toggle between light and dark themes
    const toggleTheme = () => {
        setNewTheme((currentTheme) =>
            currentTheme === "light" ? "dark" : "light"
        );
    };

    return (
        <ThemeDataContext.Provider value={{ toggleTheme, newTheme }}>
            {children}
        </ThemeDataContext.Provider>
    );
};

export const useThemeData = () => useContext(ThemeDataContext);
