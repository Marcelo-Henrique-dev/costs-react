import Message from "../layout/Message";
import { useLocation } from "react-router-dom";
import styles from "./Projetos.module.css";
import Container from "../layout/Container";
import LinkButton from "../layout/LinkButton";
import Card from "../projects/Card";
import { useState, useEffect } from "react";
import Loading from "../layout/Loading";

function Projetos() {
  const [projects, setProjects] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false)

  const location = useLocation();
  let message = "";
  if (location.state) {
    message = location.state.message;
  }

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:5000/projects", {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          console.log(data);
          setProjects(data);
          setRemoveLoading(true);
        })
        .catch((err) => console.log(err));
    }, 300);
  }, []);

  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus Projetos</h1>
        <LinkButton to="/novoprojeto" text="Criar Projeto"></LinkButton>
      </div>
      {message && <Message type="success" msg={message} />}
      <Container customClass="center">
        {projects.length > 0 &&
          projects.map((project) => (
            <Card
              name={project.name}
              id={project.id}
              budget={project.budget}
              category={project.category.name}
              key={project.id}
            />
          ))}
          {!removeLoading && <Loading />}
          {removeLoading && projects.length === 0 && (
            <p>Não Há Projetos Cadastrados</p>
          )}
      </Container>
    </div>
  );
}

export default Projetos;
