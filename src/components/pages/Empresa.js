import savings from '../../img/savings.svg'
import styles from './Empresa.module.css'

function Empresa(){
    return(
        <div className={styles.about_container}>
            <img src={savings} alt="Logo Costs" />
            <h1>Marcelo Henrique</h1>
            <p>Projeto desenvolvido em react com o propósito de aprendizado</p>
        </div>
    )
}

export default Empresa