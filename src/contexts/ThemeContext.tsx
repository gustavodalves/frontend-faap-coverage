import React, { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import useLocalStorage from "../hooks/useLocalStorage";
import IThemeContext from "../interfaces/ThemeContext";
import dark from "../styles/themes/dark";
import light from "../styles/themes/light";

const Context = createContext<IThemeContext>({
    changeTheme() {},
    theme: '',
});

interface ProviderParams {
    children: React.ReactNode
}
function Provider ({ children }: ProviderParams) {
    const [ theme, setTheme ] = useLocalStorage('theme', 'light');

    const changeTheme = (): void => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <Context.Provider value={{ theme, changeTheme }}>
            <ThemeProvider theme={theme === 'light' ? light : dark}>
                { children }
            </ThemeProvider>
        </Context.Provider>
    )
}

export {
    Provider,
    Context,
}
