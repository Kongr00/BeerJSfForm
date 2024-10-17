import React, {ChangeEvent, FC} from 'react';
import cls from './FormInput.module.css'

interface FormInputProps {
    inputLabel: string;
    inputName: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
}
const FormInput: FC<FormInputProps> = ({inputLabel, inputName, value, onChange, placeholder="Your answer..."}) => {


    return (
        <div className={cls.inputContainer}>
            <div className={cls.inputLabel}>{inputLabel}</div>
            <input type="text" name={inputName} id="" placeholder={placeholder}/>
        </div>
    );
};

export default FormInput;