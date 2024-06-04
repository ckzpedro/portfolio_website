import styles from './styles/Description.module.css'

export default function Description() {
  return (
    <div className={styles.description_box}>
      <h1 className={styles.title}>Sobre mim: </h1>
      <p className={styles.description}>Estudante de Engenharia de Computação focado em desenvolvimento Front-end, com experiência em Flutter, Figma, Python, HTML, CSS, JavaScript, React e MySQL. Motivado a transformar ideias em produtos inovadores e a aprimorar constantemente suas habilidades.</p>
    </div>
  )
}