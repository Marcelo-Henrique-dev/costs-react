import styles from './ContactForm.module.css'
import Input from "../form/Input";
import SubmitButton from '../form/SubmitButton';
import { useState } from 'react';

function ContactForm({handleSubmit, btnText, userData}){

    const [user, setUser] = useState(userData || {})

    const submit = (e)=>{
        e.preventDefault()
        handleSubmit(user)
    }

    function handleChange(e){
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    return(
        <form onSubmit={submit} className={styles.form_container}>
            <Input 
                type="text"
                text="Nome"
                name="name"
                placeholder="Digite seu nome:"
                handleOnChange={handleChange}
                value={user.name ? user.name: ''}
            ></Input>
            <Input
                type="email"
                text="Email"
                name="email"
                placeholder="Digite seu Email"
                handleOnChange={handleChange}
                value={user.email ? user.email: ''}
            ></Input>
            <Input
                type="number"
                text="Telefone"
                name="telefone"
                placeholder="Digite seu telefone"
                handleOnChange={handleChange}
                value={user.telefone ? user.telefone: ''}
            ></Input>
            <Input
                type="textarea"
                text="Sua Mensagem"
                name="mensagem"
                placeholder="Digite sua mensagem"
                handleOnChange={handleChange}
                value={user.mensagem ? user.mensagem: ''}
            />
            <SubmitButton text={btnText} />
        </form>
    )
}

export default ContactForm