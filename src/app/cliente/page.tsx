"use client";

import React from 'react';
import styles from './styles.module.css';
import FormInput from '../components/Input/page';
import { useRouter } from 'next/navigation';

export default function Cliente() {
    const router = useRouter();  

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());

        const response = await fetch('/api/cliente/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();
        const queryString = new URLSearchParams(result).toString();
        router.push(`/cliente/grupo?${queryString}`);
    };

    return (
        <>
            <div>
                <p className={styles.title}>Cliente</p>
            </div>
            <div className={styles.formWrapper}>
                <div className={styles.formContainer}>
                    <form onSubmit={handleSubmit}>
                        <FormInput
                            label="Nome Cliente:"
                            name="nome"
                            id="nome"
                            placeholder="Digite o seu nome"
                        />
                        <FormInput
                            label="Endereço:"
                            name="endereco"
                            id="endereco"
                            placeholder="Digite o seu endereço"
                        />
                        <FormInput
                            label="Cidade:"
                            name="cidade"
                            id="cidade"
                            placeholder="Digite a sua cidade"
                        />
                        <div className={styles.ButtonContainer}>
                            <button type="submit" className={styles.formButton}>Cadastrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}



{/*import React from 'react';
import styles from './styles.module.css';
import FormInput from '../components/Input/page';

export default function Cliente() {
    return (
        <>
            <div>
                <p className={styles.title}>Cliente</p>
            </div>
            <div className={styles.formWrapper}>
                <div className={styles.formContainer}>
                    <form action="./cliente/grupo" method='get'>
                        <FormInput
                            label="Nome Cliente:"
                            name="nome"
                            id="nome"
                            placeholder="Digite o seu nome"
                        />
                        <FormInput
                            label="Endereço:"
                            name="endereco"
                            id="endereco"
                            placeholder="Digite o seu endereço"
                        />
                        <FormInput
                            label="Cidade:"
                            name="cidade"
                            id="cidade"
                            placeholder="Digite a sua cidade"
                        />
                        <div className={styles.ButtonContainer}>
                            <button type="submit" className={styles.formButton}>Cadastrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
*/}