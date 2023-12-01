import styles from "./Inicio.module.css";
import Banner from "componentes/Banner";
import Titulo from "componentes/Titulo";
import Card from "componentes/Card";
import { useEffect, useState } from "react";

export default function Inicio() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/harrisonlima/cine-tag-react-api/videos"
    )
      .then((respostas) => respostas.json())
      .then((dados) => {
        setVideos(dados);
      });
  }, []);

  return (
    <>
      <Banner imagem="home" />
      <Titulo>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Titulo>
      <section className={styles.container}>
        {videos.map((video) => {
          return <Card {...video} key={video.id} />;
        })}
      </section>
    </>
  );
}
