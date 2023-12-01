import Titulo from "componentes/Titulo";
import styles from "./Player.module.css";
import Banner from "componentes/Banner";
import { useParams } from "react-router-dom";
import NaoEncontrada from "pages/NaoEncontrada";
import { useEffect, useState } from "react";

export default function Player() {
  const [video, setVideo] = useState();
  const parametros = useParams();

  useEffect(() => {
    fetch(
      `https://my-json-server.typicode.com/harrisonlima/cine-tag-react-api/videos?id=${parametros.id}`
    )
      .then((respostas) => respostas.json())
      .then((dados) => {
        setVideo(...dados);
      });
  }, []);

  if (!video) {
    return <NaoEncontrada />;
  }

  return (
    <>
      <Banner imagem="player" />
      <Titulo>
        <h1>Player</h1>
      </Titulo>
      <section className={styles.container}>
        <iframe
          width="100%"
          height="100%"
          src={video.link}
          title={video.titulo}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </section>
    </>
  );
}