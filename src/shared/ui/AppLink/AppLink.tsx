import {classNames} from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss'
import {FC} from 'react';
import {Link, LinkProps} from 'react-router-dom';

export const enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps{
    className?: string
    theme?: AppLinkTheme
}

export const AppLink:FC<AppLinkProps> = (props) => {
    const {to, children, theme = AppLinkTheme.PRIMARY, className, ...otherProps } = props
    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};