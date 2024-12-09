import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import cls from './CustomForm.module.css';
import FormInput from "../formInput/FormInput.tsx";
import FormPictureBlock from "../formPictureBlock/FormPictureBlock.tsx";
import {schema} from '../../utils/formSchema.js'

const CustomForm = () => {
    const {register, handleSubmit, formState: { errors }, reset,} = useForm({resolver: yupResolver(schema)});

    const onSubmit = (data) => {
        console.log(data);
    };

    const handleClearForm = () => {
        reset();
    };

    return (
        <div className={cls.container}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormPictureBlock
                    src={'https://lh5.googleusercontent.com/uNVWzCWgzxzLwTSm3gBQPuISNRX5ibaV3aFTBROp-yFtdJCtCLWws9sDV3W9BqYA9uqnG9Lb3ZfbO1Uya4xmYsMXjuW0nlWo2NfywSEMaJezBv5W-Pwqz7vNcs2RKpydNA=w5000'}
                    label={"Call for papers BeerJS Zhytomyr"}
                    alt={"Some alt"}
                />
                <FormInput
                    inputLabel={"Прізвище, ім’я"}
                    inputName={"fullName"}
                    register={register}  // Передаємо register
                    error={errors.fullName?.message}
                />
                <FormInput
                    inputLabel={"Мій контакт, по якому зручно спілкуватись"}
                    inputName={"contactInfo"}
                    register={register}
                    error={errors.contactInfo?.message}
                />
                <FormInput
                    inputLabel={"Мій формат (доповідь, дискусія, панель, клуб тощо)"}
                    inputName={"speechFormat"}
                    register={register}
                    error={errors.speechFormat?.message}
                />
                <FormInput
                    inputLabel={"Тема доповіді"}
                    inputName={"speechTopic"}
                    register={register}
                    error={errors.speechTopic?.message}
                />
                <FormInput
                    inputLabel={"Короткий опис, ідея"}
                    inputName={"summary"}
                    register={register}
                    error={errors.summary?.message}
                />

                <div className={cls.buttonsArea}>
                    <button type="submit" className={cls.submitBtn}>Надіслати</button>
                    <button type="button" onClick={handleClearForm} className={cls.clearBtn}>Очистити форму</button>
                </div>
            </form>
        </div>
    );
};

export default CustomForm;
