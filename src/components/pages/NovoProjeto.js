import ProjectForm from '../projects/ProjectForm'
import styles from './NovoProjeto.module.css'

function NovoProjeto(){
    return(
        <div className={styles.novoProjeto_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm btnText="Criar Projeto"></ProjectForm>
        </div>
    )
}

export default NovoProjeto