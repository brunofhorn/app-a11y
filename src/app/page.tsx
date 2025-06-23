import Image from "next/image";
import logo from "../assets/logo.svg";
import github from "../assets/github.svg";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <Image src={logo} width={266} alt={"Blog da Rocketseat"} />

        <nav className={styles.nav}>
          <a href="https://github.com/brunofhorn" arial-label="Acessar o Github">
            <Image src={github} width={20} alt="Github" />
          </a>
        </nav>
      </header>
      <main>
        <article className={styles.content}>
          <header>
            <h1>Por que desenvolvedores 360° são tão valiosos?</h1>
            <h2>Por que desenvolvedores 360° são tão valiosos?</h2>
          </header>

          <p>
            Antes de mergulharmos nas habilidades, vamos entender por que esse
            perfil profissional é tão estratégico. Um desenvolvedor 360° não se
            limita a uma única especialidade (front-end, back-end, mobile,
            etc.). Ele possui um conhecimento abrangente que lhe permite:
          </p>

          <p>
            Ter uma visão holística dos projetos: compreender como as diferentes
            partes de uma aplicação se conectam e interagem.
          </p>
          <h4>As 5 habilidades essenciais de um desenvolvedor 360° </h4>
        </article>
      </main>
      <footer className={styles.footer}>
        <Image src={logo} width={266} alt={"Blog da Rocketseat"} />

        <nav aria-label="footer-menu" className={styles.nav}>
          <a href="https://github.com/brunofhorn">Termos de uso</a>
        </nav>
      </footer>
    </>
  );
}
