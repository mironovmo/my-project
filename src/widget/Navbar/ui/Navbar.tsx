import { classNames } from 'shared/lib/classNames/classNames';
import React, { useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByModal';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    const [isAuthModal, setAuthModal] = useState(false);

    const setOpenModal = () => {
        setAuthModal(true);
    };

    const setCloseModal = () => {
        setAuthModal(false);
    };

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                onClick={setOpenModal}
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
            >
                {t('Войти')}
            </Button>
            <LoginModal isOpen={isAuthModal} onClose={setCloseModal} />
        </div>
    );
};
