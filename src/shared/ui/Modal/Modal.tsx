import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Modal.module.scss"
import React, {ReactNode, useCallback, useEffect, useRef, useState} from "react";
import {useTheme} from "app/provider/ThemeProvider";
import {Portal} from "shared/ui/Portal/Portal";

interface ModalProps {
    className?: string
    children?: ReactNode
    isOpen?: boolean
    onClose?: () => void
}

const ANIMATION_DELAY = 300

export const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
    } = props

    const closeHandler = useCallback( () => {
        if (onClose) {
            setIsClosing(true)
            timerRef.current = setTimeout(() => {
                onClose()
                setIsClosing(false)
            }, ANIMATION_DELAY)
        }
    }, [onClose])

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler()
        }
    }, [closeHandler])

    const stopContentClick = (e: React.MouseEvent) => {
        e.stopPropagation()
    }

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown)
        }
        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        }
    },[isOpen, onKeyDown])

    const [isClosing, setIsClosing] = useState(false)
    const timerRef = useRef<ReturnType <typeof setTimeout>>()
    const { theme } = useTheme()

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
        [cls[theme]]: true
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div className={cls.content} onClick={stopContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};