import { classNames } from 'shared/lib/classNames/classNames';
import React, { InputHTMLAttributes } from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string
    value?: string,
    onChange?: (value: string) => void
    placeholder?: string
}

export const Input = (props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        ...otherProps
    } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };
    return (
        <div
            className={classNames(cls.Input, {}, [className])}
        >
            <div className={cls.inputWrapper}>
                <div className={cls.placeholder}>
                    {`${placeholder} >`}
                </div>
                <input
                    className={cls.inputValue}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    {...otherProps}
                />
            </div>
        </div>
    );
};
