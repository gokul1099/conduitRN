import React, { useEffect, useState, useContext, Children } from "react"
import theme from "../config/theme-config"

import AsyncStorage from "@react-native-community/async-storage"


const ThemeContext = React.createContext({})

export const ThemeContextProvider = ({ }) => {
    const [themeId, setThemeId] = useState(false)

    useEffect(() => {
        (async () => {
            const storedThemeID = await AsyncStorage.getItem("THEME_ID")
            if (storedThemeID) {
                setThemeId(storedThemeID)
            }
            else {
                setThemeId(theme[0].theme_key)
            }
        })();
    }, [])
    return (
        <ThemeContext.Provider value={{ themeID, setThemeId }}>
            {!!themeId ? children : null}
        </ThemeContext.Provider>
    )
}


