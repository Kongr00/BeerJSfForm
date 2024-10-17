import React, {useState} from 'react';
import cls from './CustomForm.module.css'
import FormInput from "../formInput/FormInput.tsx";
import FormPictureBlock from "../formPictureBlock/FormPictureBlock.tsx";
import {FormFields} from "../../types/types.ts";

const CustomForm = () => {

    const [formData, setFormData] = useState<FormFields>({
        fullName: "",
        contactInfo: "",
        speechFormat: "",
        speechTopic: "",
        summary: "",
    })

    function handleFormChange(e) {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <div className={cls.container}>
            <form action="">
                <FormPictureBlock src={'https://lh5.googleusercontent.com/uNVWzCWgzxzLwTSm3gBQPuISNRX5ibaV3aFTBROp-yFtdJCtCLWws9sDV3W9BqYA9uqnG9Lb3ZfbO1Uya4xmYsMXjuW0nlWo2NfywSEMaJezBv5W-Pwqz7vNcs2RKpydNA=w5000'} label={"Call for papers BeerJS Zhytomyr"} alt={"Some alt"}/>
                <FormInput inputLabel={"Прізвище, ім’я"} inputName={"fullName"} value={formData.fullName} onChange={handleFormChange}/>
                <FormInput inputLabel={"Мій контакт, по якому зручно спілкуватись"} inputName={"contactInfo"} value={formData.contactInfo} onChange={handleFormChange}/>
                <FormInput inputLabel={"Мій формат (доповідь, дискусія, панель, клуб тощо)"} inputName={"speechFormat"} value={formData.speechFormat} onChange={handleFormChange}/>
                <FormInput inputLabel={"Тема доповіді"} inputName={"speechTopic"} value={formData.speechTopic} onChange={handleFormChange}/>
                <FormInput inputLabel={"Короткий опис, ідея"} inputName={"summary"} value={formData.summary} onChange={handleFormChange}/>
                <div className={cls.buttonsArea}>
                    <button className={cls.submitBtn}>Надіслати</button>
                    <button className={cls.clearBtn}>Очистити</button>
                </div>
            </form>
        </div>
    );
};

export default CustomForm;