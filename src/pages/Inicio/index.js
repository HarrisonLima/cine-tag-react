import styles from "./Inicio.module.css";
import Banner from "componentes/Banner";
import Titulo from "componentes/Titulo";
import Card from "componentes/Card";
import videos from "json/db.json";

export default function Inicio() {


  return (
    <>
      <Banner imagem="home" />
      <Titulo>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Titulo>
      <section className={styles.container}>
        {videos.map((video) => {
            return <Card {...video} key={video.id}/>
        })}
      </section>
    </>
  );
}
