import { useLocalStorage } from "./useLocalStorage";

export function useDarkMode() {
    const [darkMode, setDarkMode] = useLocalStorage('darkmode', false)
    return [darkMode, setDarkMode]
}