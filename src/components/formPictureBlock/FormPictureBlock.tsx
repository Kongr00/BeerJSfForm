import React, {ChangeEvent, FC} from 'react';
import cls from './formPictureBlock.module.css'

interface PictureBlockProps {
    src: string;
    alt?: string;
    label: string;
}
const FormPictureBlock: FC<PictureBlockProps> = ({src, alt="alt", label}) => {

    
    return (
        <div className={cls.inputPictureBlock}>
            <div className={cls.inputLabel}>{label}</div>
            <img src={src} alt={alt}/>
        </div>
    );
};

export default FormPictureBlock;