import {useThemeData} from "../themes/LightOrDarkModeTheme"

export const ToggleTheme = () => {
    const { toggleTheme, newTheme } = useThemeData();

  return (
    <div>            
        <p>Current theme is: {newTheme}</p>
        <button onClick={() => toggleTheme()}>
            Toggle dark and light mode
        </button>
    </div>
  )
}

