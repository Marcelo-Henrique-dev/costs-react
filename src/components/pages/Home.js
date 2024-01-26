import styles from './Home.module.css'
import savings from '../../img/savings.svg'
import LinkButton from '../layout/LinkButton'
import Message from '../layout/Message'
import { useLocation } from 'react-router-dom'

function Home(){
    const location = useLocation()
    let message = ''
    if(location.state){
        message = location.state.message
    }
    return(
        <section className={styles.home_container}>
            {message && (<Message type="success" msg={message} />)}
            <h1>Bem-Vindo ao <span>Costs</span></h1>
            <p>Comece a gerenciar os seus projetos agora mesmo!</p>
            <LinkButton to="/novoprojeto" text="Criar Projeto"></LinkButton>
            <img src={savings} alt="Costs" />
        </section>
    )
}

export default Home