import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss'
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import {useTranslation} from "react-i18next";

interface SidebarProps {
    className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
    const { t } = useTranslation()
    const [collapsed, setCollapsed] = useState(false)
    const onToggle = () => {
        setCollapsed(perv => !perv)
    }
    return (
        <div
            data-testid='sidebar'
            className={classNames(cls.Sidebar,
                { [cls.collapsed]: collapsed },
                [className])}
        >

            <button
                data-testid='sidebar-toggle'
                onClick={onToggle}
            >
                {t('Переключить')}
            </button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher className={cls.lang}/>
            </div>
        </div>
    );
};
