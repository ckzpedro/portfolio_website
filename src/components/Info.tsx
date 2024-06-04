import styles from './styles/Info.module.css'

export default function Info() {
  return (
    <div className={styles.info}>
        <img src='https://placehold.co/120x120' className={styles.profile_img}></img>
        <h1 className={styles.name}>Nome Sobrenome</h1>
    </div>
  )
}