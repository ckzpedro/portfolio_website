import styles from './styles/Sidebar.module.css'
import Info from './Info'
import Description from './Description'
import Contact from './Contact'
import Professional from './Professional'

export default function Sidebar() {
  return (
    <div className={styles.sidebar_box}>
      <Info />
      <Description />
      <div className={styles.contact_field}>
        <Contact
          link='https://www.linkedin.com/in/pedro-lemos-2a9725218/'
          name='Linkedin'
        />
        <Contact
          link='mailto:peucampelolemos@gmail.com'
          name='Email'
        />
        <Contact
          link='https://github.com/ckzpedro'
          name='GitHub'
        />
      </div>
      <h1 className={styles.professional_field}>Experiência</h1>
      <div className={styles.teste}>
        <Professional
          role='Coordenador
          Administrativo'
          description='Funcionário Terceirizado no DNOCS - Cest-BA'
          time='02/2023 - 02/2024'
        />
        <Professional
          role='Coordenador
          Administrativo'
          description='blabla'
          time='02/2023 - 02/2024'
        />
      </div>
    </div>
  )
}