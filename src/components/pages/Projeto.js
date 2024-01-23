import styles from "./Projeto.module.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Projeto() {
  const { id } = useParams();

  const [project, setProject] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/projetos/${id}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then(resp => resp.json())
      .then((data) => {
        setProject(data)
      })
      .catch((err) => console.log(err));
  }, [id]);

  return <p>{project.name}oi</p>;
}

export default Projeto;
