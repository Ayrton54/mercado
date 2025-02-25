import React from 'react';
import styles from './styles.module.css';

interface FormInputProps {
    label: string;
    name: string;
    id: string;
    placeholder: string;
    type?: string;
}

const FormInput: React.FC<FormInputProps> = ({ label, name, id, placeholder, type = "text" }) => {
    return (
        <div className={styles.formGroup}>
            <label htmlFor={id} className={styles.formLabel}>{label}</label>
            <input type={type} name={name} id={id} placeholder={placeholder} className={styles.formInput} />
        </div>
    );
};

export default FormInput;