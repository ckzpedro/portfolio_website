import styles from './styles/Description.module.css'

export default function Description() {
  return (
    <div className={styles.description_box}>
      <h1 className={styles.title}>Sobre mim: </h1>
      <p className={styles.description}> Estudante de Engenharia de Computação com foco em desenvolvimento Front-end. Minha jornada inclui experiência prática com Flutter, Figma, Python, HTML, CSS, JavaScript e React, além de conhecimento em banco de dados como MySQL. Interessado em transformar ideias em produtos inovadores, buscando constantemente aprimorar minhas habilidades. </p>
    </div>
  )
}
