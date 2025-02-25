"use client";

import { useSearchParams } from 'next/navigation';
import styles from './styles.module.css';


export default function Grupo() {
    const searchParams = useSearchParams();
    const nome = searchParams ? searchParams.get('nome') : '';
    const endereco = searchParams ? searchParams.get('endereco') : '';
    const cidade = searchParams ? searchParams.get('cidade') : '';

    return (
        <div className={styles.formWrapper}>
            <div className={styles.formContainer}>
                <h1>Dados do Cliente</h1>
                <p><strong>Nome:</strong> {nome}</p>
                <p><strong>Endereço:</strong> {endereco}</p>
                <p><strong>Cidade:</strong> {cidade}</p>
            </div>
        </div>
    );
}





{/*
''' import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';

export default function Grupo() {
    const [formData, setFormData] = useState({
        nome: '',
        endereco: '',
        cidade: ''
    });

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const nome = urlParams.get('nome');
        const endereco = urlParams.get('endereco');
        const cidade = urlParams.get('cidade');

        setFormData({
            nome: nome || '',
            endereco: endereco || '',
            cidade: cidade || ''
        });
    }, []);

    return (
        <div className={styles.formWrapper}>
            <div className={styles.formContainer}>
                <h1>Dados do Cliente</h1>
                <p><strong>Nome:</strong> {formData.nome}</p>
                <p><strong>Endereço:</strong> {formData.endereco}</p>
                <p><strong>Cidade:</strong> {formData.cidade}</p>
            </div>
        </div>
    );
} */}