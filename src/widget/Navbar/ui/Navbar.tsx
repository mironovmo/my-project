import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import React, { useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    const [isAuthModal, setAuthModal] = useState(false);

    const setToggleModal = () => {
        setAuthModal((prev) => !prev);
    };

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                onClick={setToggleModal}
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
            >
                {t('Войти')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={setToggleModal}>
                {/* eslint-disable-next-line max-len */}
                {t('Lorem ipsum dolor sit amet, consectetur adipisicing, elit. Alias animi aut autem consequuntur, cum fugit illum laboriosam laudantium magni maxime nisi odit officiis porro quasi, qui sed veniam vitae voluptatibus.')}
            </Modal>
        </div>
    );
};
