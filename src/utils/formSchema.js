import * as yup from 'yup';

export const schema = yup.object().shape({
    fullName: yup.string().required('Прізвище, ім’я обов’язкові'),
    contactInfo: yup.string().required('Контактна інформація обов’язкова'),
    speechFormat: yup.string().required('Формат виступу обов’язковий'),
    speechTopic: yup.string().required('Тема доповіді обов’язкова'),
    summary: yup.string().required('Опис обов’язковий'),
});

