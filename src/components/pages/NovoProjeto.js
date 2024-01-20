import { useNavigate } from "react-router-dom";
import ProjectForm from "../projects/ProjectForm";
import styles from "./NovoProjeto.module.css";

function NovoProjeto() {
  const navigate = useNavigate();

  function createPost(project) {
    project.cost = 0;
    project.services = [];

    fetch("http://localhost:5000/projects", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data)
        navigate('/projetos', {message: 'Projeto criado com sucesso!'})
      })
      .catch(err => console.log(err));
  }

  return (
    <div className={styles.novoProjeto_container}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm handleSubmit={createPost} btnText="Criar Projeto"></ProjectForm>
    </div>
  );
}

export default NovoProjeto;
