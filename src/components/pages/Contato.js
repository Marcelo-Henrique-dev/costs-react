import styles from './Contato.module.css'
import ContactForm from '../projects/ContactForm'
import { useNavigate } from 'react-router-dom';

function Contato(){

    const navigate = useNavigate()

    function submit(user) {
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((resp) => resp.json())
          .then((data) => {
            console.log(data)
            navigate('/', {state:{message: 'Mensagem Enviada com sucesso!'}})
          })
          .catch(err => console.log(err));
      }

    return(
        <div className={styles.contact_container}>
            <ContactForm handleSubmit={submit} btnText="Enviar" />
        </div>
    )
}

export default Contato