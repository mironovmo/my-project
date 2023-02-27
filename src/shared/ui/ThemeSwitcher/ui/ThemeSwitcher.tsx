import {classNames} from "shared/lib/classNames/classNames";
import cls from "./ThemeSwitcher.module.scss"
import React from "react";
import {Theme, useTheme} from "app/provider/ThemeProvider";
import DarkIcon from "shared/assets/icons/theme-dark.svg"
import LightIcon from "shared/assets/icons/theme-light.svg"
import {Button, ButtonTheme} from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {

    const {theme, toggleTheme} = useTheme()

    return (
        <Button
            theme = {ButtonTheme.CLEAR}
            className={classNames(cls.ThemeSwitcher, {}, [className, theme])}
            onClick={toggleTheme}
        >
            { theme === Theme.DARK ? <DarkIcon/> : <LightIcon/> }
        </Button>
    );
};