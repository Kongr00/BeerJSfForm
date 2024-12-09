import React, { FC } from 'react';
import cls from './FormInput.module.css';

interface FormInputProps {
    inputLabel: string;
    inputName: string;
    placeholder?: string;
    error?: string;
    register: any;
}

const FormInput: FC<FormInputProps> = ({ inputLabel, inputName, placeholder = "Your answer...", error, register }) => {
    return (
        <div className={cls.inputContainer}>
            <div className={cls.inputLabel}>{inputLabel}</div>
            <input
                type="text"
                {...register(inputName)}
                placeholder={placeholder}
            />
            {error && <p className={cls.errorMessage}>{error}</p>}
        </div>
    );
};

export default FormInput;
